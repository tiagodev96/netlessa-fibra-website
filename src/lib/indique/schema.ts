import { z } from "zod";
import { onlyDigits } from "./telefone";

export const ORIGENS = ["modem", "tela", "instagram", "site"] as const;
export type Origem = (typeof ORIGENS)[number];

export function parseOrigem(value: unknown): Origem {
  return ORIGENS.find((origem) => origem === value) ?? "site";
}

const PHONE_REGEX = /^\(\d{2}\) \d{4,5}-\d{4}$/;

const nomeSchema = z
  .string()
  .trim()
  .min(3, "Informe o nome completo")
  .max(120, "Nome muito longo");

const telefoneSchema = z
  .string()
  .regex(PHONE_REGEX, "Informe um telefone válido com DDD");

const telefoneOpcionalSchema = z
  .string()
  .trim()
  .refine(
    (value) => value === "" || PHONE_REGEX.test(value),
    "Informe um telefone válido com DDD"
  );

export const indicadoSchema = z.object({
  nome: nomeSchema,
  telefone1: telefoneSchema,
  telefone2: telefoneOpcionalSchema,
  bairro: z.string().trim().max(120, "Bairro/cidade muito longo"),
});

export const indicanteSchema = z.object({
  nome: nomeSchema,
  telefone: telefoneSchema,
});

export const indiqueFormSchema = z
  .object({
    indicado: indicadoSchema,
    indicante: indicanteSchema,
    consentimento: z
      .boolean()
      .refine(
        (value) => value === true,
        "Você precisa autorizar o contato para enviar a indicação"
      ),
    origem: z.enum(ORIGENS),
    site: z.string().optional(),
  })
  .refine(
    (data) => {
      const telefoneIndicado = data.indicado?.telefone1;
      const telefoneIndicante = data.indicante?.telefone;
      if (!telefoneIndicado || !telefoneIndicante) return true;
      return onlyDigits(telefoneIndicado) !== onlyDigits(telefoneIndicante);
    },
    {
      path: ["indicante", "telefone"],
      error: "O telefone do indicado precisa ser diferente do seu",
    }
  );

export type IndiqueFormValues = z.infer<typeof indiqueFormSchema>;

export type Indicacao = {
  criadoEm: string;
  indicado: {
    nome: string;
    telefone1: string;
    telefone2?: string;
    bairro?: string;
  };
  indicante: {
    nome: string;
    telefone: string;
  };
  origem: Origem;
  consentimento: true;
};

export function toIndicacao(values: IndiqueFormValues): Indicacao {
  return {
    criadoEm: new Date().toISOString(),
    indicado: {
      nome: values.indicado.nome,
      telefone1: values.indicado.telefone1,
      telefone2: values.indicado.telefone2 || undefined,
      bairro: values.indicado.bairro || undefined,
    },
    indicante: {
      nome: values.indicante.nome,
      telefone: values.indicante.telefone,
    },
    origem: values.origem,
    consentimento: true,
  };
}
