import type { Metadata } from "next";
import IndiqueForm from "@/components/indique/IndiqueForm";
import { parseOrigem } from "@/lib/indique/schema";

const PAGE_URL = "https://netlessafibra.com.br/indique";
const DESCRIPTION =
  "Indique um amigo para a Netlessa Fibra. Na instalação efetivada do indicado, você ganha 1 mês de internet grátis.";

export const metadata: Metadata = {
  title: "Indique e Ganhe | Netlessa Fibra",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Indique e Ganhe | Netlessa Fibra",
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Net Lessa Fibra",
    locale: "pt_BR",
    type: "website",
    images: ["/logo.png"],
  },
};

type IndiquePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function IndiquePage({ searchParams }: IndiquePageProps) {
  const { src } = await searchParams;
  const origem = parseOrigem(src);

  return (
    <div>
      <section className="section-container flex flex-col items-center gap-4 pb-10 pt-16 text-center md:pt-24">
        <span className="tag uppercase">Indique e Ganhe</span>
        <h1 className="section-title">Indique um amigo!</h1>
        <p className="H3">Indicou, instalou e ganhou!</p>
        <p className="paragraph max-w-xl">
          Na instalação efetivada do indicado, você ganha 1 mês de internet
          grátis.
        </p>
      </section>

      <section className="section-container pb-24">
        <IndiqueForm origem={origem} />
      </section>
    </div>
  );
}
