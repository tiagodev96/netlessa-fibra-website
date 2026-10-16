import { google, type sheets_v4 } from "googleapis";
import type { Indicacao } from "./schema";

const SHEET_NAME = "Indicacoes";
const HEADER_RANGE = `${SHEET_NAME}!A1:K1`;
const APPEND_RANGE = `${SHEET_NAME}!A:K`;

const HEADER = [
  "Data/Hora",
  "Indicado Nome",
  "Indicado Tel 1",
  "Indicado Tel 2",
  "Indicado Bairro",
  "Indicante Nome",
  "Indicante Tel",
  "Origem",
  "Status",
  "Instalação efetivada",
  "Mês grátis creditado",
];

const dateTimeFormatter = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Bahia",
  dateStyle: "short",
  timeStyle: "short",
});

type SheetsClient = {
  sheets: sheets_v4.Sheets;
  spreadsheetId: string;
};

function createSheetsClient(): SheetsClient {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

  if (!email || !privateKey || !spreadsheetId) {
    throw new Error(
      "GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY e GOOGLE_SHEETS_ID precisam estar configurados"
    );
  }

  const auth = new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return { sheets: google.sheets({ version: "v4", auth }), spreadsheetId };
}

let isHeaderEnsured = false;

async function ensureHeader({ sheets, spreadsheetId }: SheetsClient) {
  if (isHeaderEnsured) return;

  const { data } = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: HEADER_RANGE,
  });

  if (!data.values || data.values.length === 0) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: HEADER_RANGE,
      valueInputOption: "RAW",
      requestBody: { values: [HEADER] },
    });
  }

  isHeaderEnsured = true;
}

// Rows are written with USER_ENTERED so the date column is parsed as a date,
// which also makes any value starting with = + - @ a live formula. Free-text
// fields come from a public form, so a leading apostrophe forces them to text
// (e.g. =IMPORTDATA(...) would otherwise leak other rows to an external URL).
function asPlainText(value: string): string {
  return /^[=+\-@]/.test(value) ? `'${value}` : value;
}

function toRow(indicacao: Indicacao): string[] {
  return [
    dateTimeFormatter.format(new Date(indicacao.criadoEm)),
    asPlainText(indicacao.indicado.nome),
    indicacao.indicado.telefone1,
    indicacao.indicado.telefone2 ?? "",
    asPlainText(indicacao.indicado.bairro ?? ""),
    asPlainText(indicacao.indicante.nome),
    indicacao.indicante.telefone,
    indicacao.origem,
    "Novo",
    "",
    "",
  ];
}

export async function gravarNaPlanilha(indicacao: Indicacao): Promise<void> {
  const client = createSheetsClient();

  await ensureHeader(client);

  await client.sheets.spreadsheets.values.append({
    spreadsheetId: client.spreadsheetId,
    range: APPEND_RANGE,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [toRow(indicacao)] },
  });
}
