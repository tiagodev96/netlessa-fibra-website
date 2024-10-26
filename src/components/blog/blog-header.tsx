import React from "react";

export default function BlogHeader() {
  return (
    <section className="section-container py-24 flex justify-center md:justify-start">
      <div className="max-w-[768px]">
        <p className="tag mb-4 text-center md:text-left">
          Blog Net Lessa Fibra
        </p>
        <h1 className="section-title mb-6 text-center md:text-left">
          Descubra as Novidades e Dicas sobre Conectividade e Tecnologia
        </h1>
        <p className="paragraph text-center md:text-left">
          Bem-vindo ao blog da Net Lessa Fibra! Aqui você encontrará dicas sobre
          tecnologia, otimização de conexão e atualizações dos nossos serviços.
          Fique por dentro das últimas novidades digitais!
        </p>
      </div>
    </section>
  );
}
