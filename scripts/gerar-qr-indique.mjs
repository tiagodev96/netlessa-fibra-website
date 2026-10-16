import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import QRCode from "qrcode";

const BASE_URL = "https://netlessafibra.com.br/indique";
const OUTPUT_DIR = path.resolve("public", "qr");

const SOURCES = ["modem", "tela", "instagram"];

const commonOptions = {
  errorCorrectionLevel: "H",
  margin: 2,
};

async function generate(source) {
  const url = `${BASE_URL}?src=${source}`;
  const baseName = path.join(OUTPUT_DIR, `qr-indique-${source}`);

  const svg = await QRCode.toString(url, { ...commonOptions, type: "svg" });
  await writeFile(`${baseName}.svg`, svg, "utf8");

  await QRCode.toFile(`${baseName}.png`, url, {
    ...commonOptions,
    type: "png",
    width: 2000,
  });

  console.log(`ok  ${url}`);
}

await mkdir(OUTPUT_DIR, { recursive: true });
for (const source of SOURCES) {
  await generate(source);
}
