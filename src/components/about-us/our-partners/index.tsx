import PartnersCarousel from "./partners-carousel";

export default function OurPartners() {
  const partners = [
    "/about-us/partner-1.svg",
    "/about-us/partner-2.svg",
    "/about-us/partner-1.svg",
    "/about-us/partner-2.svg",
    "/about-us/partner-1.svg",
    "/about-us/partner-2.svg",
  ];

  return (
    <section className="section-container py-24">
      <div className="flex flex-col gap-10">
        <h2 className="section-title text-center">
          Confiança das melhores empresas do Brasil
        </h2>
        <PartnersCarousel partners={partners} />
      </div>
    </section>
  );
}
