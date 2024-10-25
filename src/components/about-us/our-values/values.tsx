import React from "react";
import { FaRegHandshake, FaRegLightbulb, FaShieldAlt } from "react-icons/fa";
import ValueItem from "./value-item";

export default function Values() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <ValueItem
        icon={<FaShieldAlt size={48} />}
        title="Integridade"
        description="Agimos com transparência e honestidade em todas as nossas relações. Nosso objetivo é construir uma relação de confiança com nossos clientes e parceiros."
      />
      <ValueItem
        icon={<FaRegLightbulb size={48} />}
        title="Inovação"
        description="Estamos sempre em busca de novas tecnologias e soluções para melhorar nossos serviços. A inovação é fundamental para oferecer uma experiência superior de internet."
      />
      <ValueItem
        icon={<FaRegHandshake size={48} />}
        title="Compromisso"
        description="Nosso foco está em atender e superar as expectativas de nossos clientes. A satisfação deles é a nossa prioridade, e trabalhamos continuamente para oferecer um atendimento excepcional."
      />
    </div>
  );
}
