import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqItems = [
  {
    question: "O que é a internet fibra?",
    answer:
      "A internet fibra é uma tecnologia de conexão que utiliza cabos de fibra óptica, proporcionando velocidades de internet muito mais rápidas e estáveis em comparação com as conexões tradicionais.",
  },
  {
    question: "Quais são os benefícios da internet fibra?",
    answer:
      "Os principais benefícios incluem alta velocidade de download e upload, menor latência, maior confiabilidade e a capacidade de suportar múltiplos dispositivos conectados simultaneamente.",
  },
  {
    question: "Como posso contratar o serviço de internet fibra?",
    answer:
      "Você pode contratar o serviço de internet fibra diretamente em nosso site ou entrando em contato com nosso atendimento ao cliente.",
  },
  {
    question: "O que está incluído no pacote de internet fibra?",
    answer:
      "Nosso pacote de internet fibra inclui instalação gratuita, modem, suporte técnico 24/7 e garantia de satisfação.",
  },
  {
    question: "A internet fibra é adequada para jogos online?",
    answer:
      "Sim, a internet fibra é ideal para jogos online devido à sua baixa latência e altas velocidades de conexão.",
  },
  {
    question: "O que é o serviço de TV por assinatura?",
    answer:
      "O serviço de TV por assinatura oferece uma variedade de canais de televisão, incluindo opções de filmes, séries, esportes e programação infantil.",
  },
  {
    question: "Posso assistir TV ao vivo pela internet?",
    answer:
      "Sim, oferecemos a opção de assistir TV ao vivo pela internet através do nosso aplicativo, disponível para dispositivos móveis e smart TVs.",
  },
  {
    question: "Como funciona o serviço de câmera de segurança?",
    answer:
      "Nosso serviço de câmera de segurança permite monitorar sua casa ou empresa em tempo real através de um aplicativo, com gravação em nuvem e alertas de movimento.",
  },
  {
    question: "As câmeras de segurança têm visão noturna?",
    answer:
      "Sim, todas as nossas câmeras de segurança possuem tecnologia de visão noturna, permitindo monitoramento mesmo em condições de baixa luminosidade.",
  },
  {
    question: "Como posso entrar em contato com o suporte técnico?",
    answer:
      "Você pode entrar em contato com nosso suporte técnico através do telefone, chat online ou e-mail, disponíveis em nosso site.",
  },
];

export default function Questions() {
  return (
    <section className="section-container py-24">
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-[18px] font-medium text-black">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
