import React from "react";
import Button from "../globals/Button";
import { FaWhatsapp } from "react-icons/fa";

export default function StillHaveDoubts() {
  return (
    <section className="section-container py-24 flex flex-col">
      <h2 className="section-title text-center mb-4">Ainda tem dúvidas?</h2>
      <p className="paragraph text-center mb-6">
        Nosso suporte está pronto para te atender
      </p>
      <div className="max-w-[218px] flex mx-auto">
        <Button
          link="https://wa.me/5571986064654"
          icon={<FaWhatsapp size={24} />}
        >
          Falar com suporte
        </Button>
      </div>
    </section>
  );
}
