import React from "react";

export default function LeftContent() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <h2 className="section-title">Marcos Históricos</h2>
        <p className="paragraph">
          A trajetória da Net Lessa Fibra é marcada por importantes conquistas
          que definem nossa reputação no mercado.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-blue text-[36px] md:text-[48px] font-bold">
            15.000
          </p>
          <p className="paragraph">Clientes atendidos</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-blue text-[36px] md:text-[48px] font-bold">98%</p>
          <p className="paragraph">de Satisfação dos Clientes</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-blue text-[36px] md:text-[48px] font-bold">
            1.000
          </p>
          <p className="paragraph">Vendas mensais</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-blue text-[36px] md:text-[48px] font-bold">
            1.000km
          </p>
          <p className="paragraph">de Fibra Ótica instalados</p>
        </div>
      </div>
    </div>
  );
}
