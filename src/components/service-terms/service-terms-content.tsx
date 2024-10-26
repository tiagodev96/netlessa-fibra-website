import React from "react";

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="flex flex-col gap-4">
    <h2 className="section-title">{title}</h2>
    {children}
  </div>
);

const List: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="list-disc pl-5">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const ServiceTermsContent: React.FC = () => {
  const sections = [
    {
      title: "1. Aceitação dos Termos",
      content: (
        <>
          <p className="paragraph">
            Bem-vindo à Net Lessa Fibra! Estes Termos de Serviço (“Termos”)
            regem a utilização dos nossos serviços de internet fibra, TV HD,
            câmera de segurança e telefonia (“Serviços”). Ao contratar qualquer
            um dos nossos Serviços, você concorda com estes Termos. Se não
            concordar, por favor, não contrate nossos Serviços.
          </p>
          <p>
            Ao contratar nossos Serviços, você confirma que leu, entendeu e
            concorda com estes Termos. Podemos atualizar estes Termos
            periodicamente. Qualquer alteração será publicada em nosso site e se
            tornará válida a partir da data de publicação. O uso contínuo dos
            Serviços após modificações constitui sua aceitação das mudanças.
          </p>
        </>
      ),
    },
    {
      title: "2. Descrição dos Serviços",
      content: (
        <>
          <p className="paragraph">A Net Lessa Fibra oferece:</p>
          <List
            items={[
              <>
                <strong>Internet Fibra:</strong> Conexão de alta velocidade para
                navegação na web, streaming e outras atividades online.
              </>,
              <>
                <strong>TV HD:</strong> Serviço de televisão com qualidade de
                imagem em alta definição e diversos canais.
              </>,
              <>
                <strong>Câmera de Segurança:</strong> Sistema de vigilância para
                monitoramento de propriedades.
              </>,
              <>
                <strong>Telefonia:</strong> Serviço de chamadas telefônicas
                fixas.
              </>,
            ]}
          />
        </>
      ),
    },
    {
      title: "3. Uso Aceitável",
      content: (
        <>
          <p className="paragraph">
            Você concorda em usar nossos Serviços apenas para fins legais e em
            conformidade com todas as leis e regulamentos aplicáveis. É proibido
            utilizar nossos Serviços para:
          </p>
          <List
            items={[
              "Realizar atividades fraudulentas ou ilegais.",
              "Transmitir vírus, malware ou qualquer outro código prejudicial.",
              "Interferir na operação de nossos Serviços ou na rede de outras pessoas.",
            ]}
          />
        </>
      ),
    },
    {
      title: "4. Responsabilidades do Cliente",
      content: (
        <p className="paragraph">
          Você é responsável por fornecer informações precisas e completas ao
          contratar nossos Serviços e por manter a confidencialidade de qualquer
          dado de acesso fornecido. É sua responsabilidade notificar a Net Lessa
          Fibra sobre qualquer uso não autorizado ou suspeito de nossos
          Serviços.
        </p>
      ),
    },
    {
      title: "5. Propriedade Intelectual",
      content: (
        <p className="paragraph">
          Todo o conteúdo e materiais fornecidos através de nossos Serviços,
          incluindo, mas não se limitando a, textos, gráficos, logotipos e
          software, são propriedade exclusiva da Net Lessa Fibra ou de seus
          licenciadores e estão protegidos por leis de propriedade intelectual.
        </p>
      ),
    },
    {
      title: "6. Pagamentos e Faturas",
      content: (
        <p className="paragraph">
          Você concorda em pagar todas as taxas e encargos associadas aos nossos
          Serviços conforme o plano contratado. Faturas serão emitidas conforme
          o ciclo de faturamento acordado e devem ser pagas até a data de
          vencimento indicada. O não pagamento pode resultar na suspensão ou
          cancelamento dos Serviços.
        </p>
      ),
    },
    {
      title: "7. Suspensão e Cancelamento",
      content: (
        <p className="paragraph">
          Podemos suspender ou cancelar seus Serviços se você violar estes
          Termos ou por qualquer outra razão, incluindo manutenção necessária ou
          interrupções imprevistas. Em caso de cancelamento, você será
          responsável por pagar todas as taxas acumuladas até a data do término
          dos Serviços.
        </p>
      ),
    },
    {
      title: "8. Isenção de Responsabilidade",
      content: (
        <p>
          Nossos Serviços são fornecidos “como estão” e “conforme disponíveis”.
          Não garantimos que nossos Serviços estarão livres de erros,
          interrupções ou problemas. A Net Lessa Fibra não se responsabiliza por
          quaisquer danos indiretos, incidentais ou consequenciais decorrentes
          do uso de nossos Serviços.
        </p>
      ),
    },
    {
      title: "9. Limitação de Responsabilidade",
      content: (
        <p className="paragraph">
          Na máxima extensão permitida por lei, a responsabilidade total da Net
          Lessa Fibra por qualquer reclamação relacionada aos nossos Serviços
          será limitada ao valor total pago por você pelos Serviços nos últimos
          12 meses.
        </p>
      ),
    },
    {
      title: "10. Privacidade",
      content: (
        <p className="paragraph">
          Sua privacidade é importante para nós. Consulte nossa Política de
          Privacidade para entender como coletamos, usamos e protegemos suas
          informações pessoais.
        </p>
      ),
    },
    {
      title: "11. Modificações nos Serviços",
      content: (
        <p className="paragraph">
          Reservamos o direito de modificar, suspender ou descontinuar qualquer
          aspecto dos nossos Serviços a qualquer momento, com ou sem aviso
          prévio. Não seremos responsáveis por qualquer alteração ou interrupção
          dos Serviços.
        </p>
      ),
    },
    {
      title: "12. Lei Aplicável e Resolução de Conflitos",
      content: (
        <p className="paragraph">
          Estes Termos serão regidos e interpretados de acordo com as leis da
          Bahia - Brasil. Qualquer disputa que surja em relação a estes Termos
          será resolvida nos tribunais competentes da Bahia - Brasil.
        </p>
      ),
    },
    {
      title: "13. Contato",
      content: (
        <>
          <p className="paragraph">
            Para qualquer dúvida ou solicitação relacionada a estes Termos,
            entre em contato conosco:
          </p>
          <List
            items={[
              <>
                <strong>Telefone:</strong> (71) 9 8606-4654
              </>,
              <>
                <strong>Endereço:</strong> Rua São Paulo Nº 33, Tancredo Neves
                CEP 41207220
              </>,
              <>
                <strong>E-mail:</strong> net.lessa.net@gmail.com
              </>,
            ]}
          />
        </>
      ),
    },
  ];

  return (
    <section className="section-container py-24 flex flex-col gap-6">
      {sections.map((section, index) => (
        <Section key={index} title={section.title}>
          {section.content}
        </Section>
      ))}
    </section>
  );
};

export default ServiceTermsContent;
