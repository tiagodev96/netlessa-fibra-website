import Button from "@/components/globals/Button";
import React from "react";

export default function LocalizationInformations() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        {" "}
        {/* Proporção 16:9 */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.488486191177!2d-38.445955688701034!3d-12.940563787319297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161a809b0f4b7b%3A0xf716c6cd6d40169b!2sR.%20S%C3%A3o%20Paulo%2C%2033%20-%20Tancredo%20Neves%2C%20Salvador%20-%20BA%2C%2041207-220!5e0!3m2!1spt-BR!2sbr!4v1729885658278!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{
            border: 0,
            borderRadius: 6,
            position: "absolute",
            top: 0,
            left: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="flex flex-col gap-6 items-center">
        <p className="text-[24px] md:text-[32px] font-bold text-black">
          Salvador - BA
        </p>
        <p className="paragraph">R. São Paulo, 33 - Tancredo Neves</p>
        <Button targetBlank link="https://maps.app.goo.gl/qmd2nS2x6T76SgjH9">
          Ampliar mapa
        </Button>
      </div>
    </div>
  );
}
