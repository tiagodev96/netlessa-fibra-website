import Button from "@/components/globals/Button";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function LeftContent() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="section-title">Explore Nossos Serviços</h2>
      <p className="paragraph">
        Quer maximizar sua experiência digital? A Net Lessa Fibra oferece planos
        de internet de alta velocidade e confiabilidade para atender às suas
        necessidades. Não deixe de conferir nossos serviços e descobrir como
        podemos transformar sua conexão.
      </p>

      <div className="max-w-[148px]">
        <Button
          link="https://wa.me/5571986064654"
          icon={<FaWhatsapp size={24} />}
        >
          Contratar
        </Button>
      </div>
    </div>
  );
}
