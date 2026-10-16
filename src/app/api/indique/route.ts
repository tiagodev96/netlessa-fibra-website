import { NextResponse } from "next/server";
import { indiqueFormSchema, toIndicacao } from "@/lib/indique/schema";
import { gravarNaPlanilha } from "@/lib/indique/sheets";

export const runtime = "nodejs";

const INVALID_BODY_MESSAGE = "Verifique os dados informados e tente novamente.";
const UNAVAILABLE_MESSAGE =
  "Não foi possível enviar sua indicação agora. Tente novamente em alguns minutos ou fale com a gente no WhatsApp.";
const RATE_LIMITED_MESSAGE =
  "Muitas indicações enviadas em pouco tempo. Aguarde alguns minutos e tente novamente.";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

// In-memory, so the limit is per server instance. Enough to stop naive
// scripts; a shared store is needed if abuse shows up across instances.
const requestTimestampsByIp = new Map<string, number[]>();

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const firstForwarded = forwardedFor?.split(",")[0]?.trim();
  return firstForwarded || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  for (const [key, timestamps] of requestTimestampsByIp) {
    if (timestamps.every((timestamp) => timestamp <= windowStart)) {
      requestTimestampsByIp.delete(key);
    }
  }

  const recent = (requestTimestampsByIp.get(ip) ?? []).filter(
    (timestamp) => timestamp > windowStart
  );

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestTimestampsByIp.set(ip, recent);
    return true;
  }

  requestTimestampsByIp.set(ip, [...recent, now]);
  return false;
}

function isHoneypotFilled(body: unknown): boolean {
  if (typeof body !== "object" || body === null || !("site" in body)) {
    return false;
  }
  const { site } = body as { site: unknown };
  return typeof site === "string" && site.trim() !== "";
}

export async function POST(request: Request) {
  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { ok: false, message: RATE_LIMITED_MESSAGE },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: INVALID_BODY_MESSAGE },
      { status: 400 }
    );
  }

  if (isHoneypotFilled(body)) {
    return NextResponse.json({ ok: true });
  }

  const parsed = indiqueFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: INVALID_BODY_MESSAGE },
      { status: 400 }
    );
  }

  const indicacao = toIndicacao(parsed.data);

  try {
    await gravarNaPlanilha(indicacao);
  } catch (error) {
    console.error("[indique] falha ao gravar na planilha:", error);
    return NextResponse.json(
      { ok: false, message: UNAVAILABLE_MESSAGE },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
