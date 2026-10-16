"use client";

import { ReactNode, useRef, useState } from "react";
import {
  Control,
  FieldError,
  FieldPath,
  useController,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Button from "@/components/globals/Button";
import {
  indiqueFormSchema,
  type IndiqueFormValues,
  type Origem,
} from "@/lib/indique/schema";
import { formatPhone } from "@/lib/indique/telefone";
import Stepper, { type IndiqueStep } from "./Stepper";

const WHATSAPP_URL = "https://wa.me/5571986064654";
const OPENING_WHATSAPP_MESSAGE = "Abrindo o WhatsApp...";

const INDICADO_FIELDS = [
  "indicado.nome",
  "indicado.telefone1",
  "indicado.telefone2",
  "indicado.bairro",
] as const;

type FieldName = FieldPath<IndiqueFormValues>;

type PhoneFieldName =
  | "indicado.telefone1"
  | "indicado.telefone2"
  | "indicante.telefone";

const baseButtonClasses =
  "flex w-full items-center justify-center gap-2 rounded-[6px] border px-5 py-3 text-[16px] transition-all duration-150 ease-in-out sm:w-auto disabled:cursor-not-allowed disabled:opacity-60";
const primaryButtonClasses = `${baseButtonClasses} border-blue bg-blue text-white hover:border-blue hover:bg-white hover:text-blue disabled:hover:bg-blue disabled:hover:text-white`;
const secondaryButtonClasses = `${baseButtonClasses} border-blue bg-white text-blue hover:bg-blue hover:text-white`;

function inputClasses(hasError: boolean): string {
  return `w-full rounded-[6px] border bg-white p-3 text-[16px] text-black outline-none transition-colors focus:ring-2 focus:ring-blue ${
    hasError ? "border-error" : "border-light-gray focus:border-blue"
  }`;
}

function buildWhatsappReferralUrl(values: IndiqueFormValues): string {
  const { indicado, indicante } = values;
  const message = [
    "Olá! Quero registrar uma indicação da Promoção Indique.",
    "",
    `Indicado: ${indicado.nome}`,
    `Telefone: ${indicado.telefone1}`,
    indicado.bairro ? `Bairro: ${indicado.bairro}` : undefined,
    "",
    `Indicado por: ${indicante.nome}`,
  ]
    .filter((line) => line !== undefined)
    .join("\n");

  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

// Mobile browsers (Safari above all) block window.open() once an await has
// run, because the user gesture is gone. So the tab is opened during the tap
// and only pointed at WhatsApp after the spreadsheet call finishes.
function openPlaceholderTab(): Window | null {
  const tab = window.open("", "_blank");
  if (!tab) return null;

  tab.opener = null;
  tab.document.title = OPENING_WHATSAPP_MESSAGE;
  tab.document.body.textContent = OPENING_WHATSAPP_MESSAGE;
  return tab;
}

function sendTabToWhatsapp(tab: Window | null, url: string) {
  if (tab && !tab.closed) {
    tab.location.href = url;
    return;
  }
  window.open(url, "_blank");
}

type FieldProps = {
  id: string;
  label: string;
  error?: FieldError;
  hint?: string;
  isOptional?: boolean;
  children: (describedBy: string | undefined) => ReactNode;
};

function Field({ id, label, error, hint, isOptional, children }: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy =
    [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="small-text font-medium">
        {label}
        {isOptional && <span className="text-gray"> (opcional)</span>}
      </label>
      {children(describedBy)}
      {hint && (
        <p id={hintId} className="text-[12px] text-gray">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-[12px] text-error" role="alert">
          {error.message}
        </p>
      )}
    </div>
  );
}

type PhoneInputProps = {
  id: string;
  name: PhoneFieldName;
  control: Control<IndiqueFormValues>;
  describedBy?: string;
  autoComplete?: string;
  onAfterChange: (name: PhoneFieldName) => void;
};

function PhoneInput({
  id,
  name,
  control,
  describedBy,
  autoComplete = "off",
  onAfterChange,
}: PhoneInputProps) {
  const { field, fieldState } = useController({ name, control });

  return (
    <input
      id={id}
      type="tel"
      inputMode="tel"
      placeholder="(71) 99999-9999"
      autoComplete={autoComplete}
      aria-invalid={fieldState.invalid}
      aria-describedby={describedBy}
      className={inputClasses(fieldState.invalid)}
      name={field.name}
      ref={field.ref}
      value={field.value}
      onBlur={field.onBlur}
      onChange={(event) => {
        field.onChange(formatPhone(event.target.value));
        onAfterChange(name);
      }}
    />
  );
}

type IndiqueFormProps = {
  origem: Origem;
};

export default function IndiqueForm({ origem }: IndiqueFormProps) {
  const [step, setStep] = useState<IndiqueStep>(1);
  const [whatsappReferralUrl, setWhatsappReferralUrl] = useState(WHATSAPP_URL);
  const whatsappTabRef = useRef<Window | null>(null);

  const {
    register,
    control,
    handleSubmit,
    trigger,
    getValues,
    getFieldState,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<IndiqueFormValues>({
    resolver: zodResolver(indiqueFormSchema),
    defaultValues: {
      indicado: { nome: "", telefone1: "", telefone2: "", bairro: "" },
      indicante: { nome: "", telefone: "" },
      consentimento: false,
      origem,
      site: "",
    },
  });

  // Before the first submit RHF (mode "onSubmit") only validates on trigger()
  // and handleSubmit(); this clears a field's error as soon as the user fixes
  // it. After the first submit RHF's own reValidateMode ("onChange") takes over.
  const revalidateIfInvalid = (name: FieldName) => {
    if (!isSubmitted && getFieldState(name).invalid) {
      void trigger(name);
    }
  };

  const registerText = (name: FieldName) =>
    register(name, { onChange: () => revalidateIfInvalid(name) });

  const goToIndicanteStep = async () => {
    const isIndicadoValid = await trigger(INDICADO_FIELDS);
    if (isIndicadoValid) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const openWhatsappTabIfValid = () => {
    if (indiqueFormSchema.safeParse(getValues()).success) {
      whatsappTabRef.current = openPlaceholderTab();
    }
  };

  const onSubmit = async (values: IndiqueFormValues) => {
    const url = buildWhatsappReferralUrl(values);
    setWhatsappReferralUrl(url);

    // The WhatsApp message is what reaches the Netlessa team, so a failed
    // spreadsheet write must not stop the customer: it is logged (server and
    // console) and the flow continues.
    try {
      const response = await fetch("/api/indique", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        console.warn(`[indique] planilha respondeu HTTP ${response.status}`);
      }
    } catch (error) {
      console.warn("[indique] falha ao chamar /api/indique:", error);
    }

    sendTabToWhatsapp(whatsappTabRef.current, url);
    whatsappTabRef.current = null;
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-10">
      <Stepper currentStep={step} />

      {step === 3 ? (
        <section
          className="flex flex-col items-center gap-6 text-center"
          aria-live="polite"
        >
          <CheckCircle2 size={64} className="text-green" aria-hidden="true" />
          <h2 className="H3 text-[24px]">Falta só enviar!</h2>
          <p className="paragraph">
            Abrimos o WhatsApp com a sua indicação. Toque em enviar para ela
            chegar na equipe da Netlessa.
          </p>
          <p className="small-text">O WhatsApp não abriu?</p>
          <Button
            link={whatsappReferralUrl}
            icon={<FaWhatsapp size={24} />}
            targetBlank
          >
            Abrir o WhatsApp
          </Button>
          <p className="small-text text-gray">
            Assim que a instalação do seu amigo for efetivada, o mês grátis é
            creditado na sua fatura.
          </p>
        </section>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="relative flex flex-col gap-8"
        >
          <input type="hidden" {...register("origem")} />

          <div
            aria-hidden="true"
            className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden"
          >
            <label htmlFor="site">Site</label>
            <input
              id="site"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("site")}
            />
          </div>

          {step === 1 && (
            <fieldset className="flex flex-col gap-6">
              <legend className="mb-6 flex flex-col gap-1">
                <span className="H3">Amigo</span>
                <span className="paragraph">Dados do indicado</span>
              </legend>

              <Field id="indicado-nome" label="Nome" error={errors.indicado?.nome}>
                {(describedBy) => (
                  <input
                    id="indicado-nome"
                    type="text"
                    autoComplete="off"
                    aria-invalid={Boolean(errors.indicado?.nome)}
                    aria-describedby={describedBy}
                    className={inputClasses(Boolean(errors.indicado?.nome))}
                    {...registerText("indicado.nome")}
                  />
                )}
              </Field>


              <Field
                id="indicado-telefone1"
                label="Telefone 1"
                error={errors.indicado?.telefone1}
              >
                {(describedBy) => (
                  <PhoneInput
                    id="indicado-telefone1"
                    name="indicado.telefone1"
                    control={control}
                    describedBy={describedBy}
                    onAfterChange={revalidateIfInvalid}
                  />
                )}
              </Field>

              <Field
                id="indicado-telefone2"
                label="Telefone 2"
                error={errors.indicado?.telefone2}
                isOptional
              >
                {(describedBy) => (
                  <PhoneInput
                    id="indicado-telefone2"
                    name="indicado.telefone2"
                    control={control}
                    describedBy={describedBy}
                    onAfterChange={revalidateIfInvalid}
                  />
                )}
              </Field>

              <Field
                id="indicado-bairro"
                label="Bairro/cidade do amigo"
                error={errors.indicado?.bairro}
                hint="Ajuda a gente a checar a cobertura antes de ligar."
                isOptional
              >
                {(describedBy) => (
                  <input
                    id="indicado-bairro"
                    type="text"
                    autoComplete="off"
                    aria-invalid={Boolean(errors.indicado?.bairro)}
                    aria-describedby={describedBy}
                    className={inputClasses(Boolean(errors.indicado?.bairro))}
                    {...registerText("indicado.bairro")}
                  />
                )}
              </Field>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={goToIndicanteStep}
                  className={primaryButtonClasses}
                >
                  Próximo passo
                </button>
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset className="flex flex-col gap-6">
              <legend className="mb-6 flex flex-col gap-1">
                <span className="H3">Você</span>
                <span className="paragraph">Dados do indicante</span>
              </legend>

              <Field
                id="indicante-nome"
                label="Seu nome"
                error={errors.indicante?.nome}
              >
                {(describedBy) => (
                  <input
                    id="indicante-nome"
                    type="text"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.indicante?.nome)}
                    aria-describedby={describedBy}
                    className={inputClasses(Boolean(errors.indicante?.nome))}
                    {...registerText("indicante.nome")}
                  />
                )}
              </Field>


              <Field
                id="indicante-telefone"
                label="Seu telefone"
                error={errors.indicante?.telefone}
                hint="Use o mesmo telefone cadastrado como cliente Netlessa. É por ele que identificamos sua conta para creditar o mês grátis."
              >
                {(describedBy) => (
                  <PhoneInput
                    id="indicante-telefone"
                    name="indicante.telefone"
                    control={control}
                    describedBy={describedBy}
                    autoComplete="tel-national"
                    onAfterChange={revalidateIfInvalid}
                  />
                )}
              </Field>

              <div className="flex flex-col gap-2">
                <label className="flex items-start gap-3 small-text">
                  <input
                    type="checkbox"
                    aria-invalid={Boolean(errors.consentimento)}
                    aria-describedby={
                      errors.consentimento ? "consentimento-error" : undefined
                    }
                    className="mt-0.5 h-5 w-5 shrink-0 accent-blue"
                    {...register("consentimento")}
                  />
                  <span>
                    Autorizo a Netlessa a entrar em contato comigo e com a
                    pessoa indicada sobre esta campanha.
                  </span>
                </label>
                {errors.consentimento && (
                  <p
                    id="consentimento-error"
                    className="text-[12px] text-error"
                    role="alert"
                  >
                    {errors.consentimento.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  disabled={isSubmitting}
                  className={secondaryButtonClasses}
                >
                  Voltar
                </button>
                <button
                  type="submit"
                  onClick={openWhatsappTabIfValid}
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className={primaryButtonClasses}
                >
                  {isSubmitting ? "Enviando..." : "Enviar indicação"}
                </button>
              </div>
            </fieldset>
          )}
        </form>
      )}
    </div>
  );
}
