export const mockCarousel = [
  {
    id: "1",
    content_image: {
      url: "/banner/content-1/content-image-1.png",
      alt: "Imagem 1",
      width: 650,
      height: 600,
    },
    ctas: [
      {
        label: "Assine já",
        link: "https://wa.me/5571986064654",
      },
    ],
    background: {
      url: "/banner/content-1/background-image-1.png",
      alt: "Fundo 1",
      width: 2880,
      height: 1320,
    },
  },
];

export const mockProductsList = {
  id: "1",
  tag: "Produtos Net Lessa",
  section_title: "Planos para todas as necessidades",
  section_description: "Fique conectado com os nossos serviços",
  cta: [
    {
      id: "cta1",
      text: "Ver todos",
      link: "/produtos",
    },
  ],
  products_list: [
    {
      id: 1,
      name: "Planos Residenciais",
      description:
        "Conexão que a sua família precisa e merece. A melhor fibra ótica de Salvador",
      link: "produtos#planos-residenciais",
      cover_image: {
        id: "img1",
        url: "/products/capa-InternetFibra.png",
        alt: "",
      },
    },
    {
      id: 2,
      name: "Planos Comerciais",
      description:
        "Conexão que a sua empresa precisa. A melhor fibra ótica de Salvador",
      link: "produtos#planos-comerciais",
      cover_image: {
        id: "img2",
        url: "/products/capa-sua-empresa-conectada.png",
        alt: "",
      },
    },
    {
      id: 3,
      name: "Câmeras de Segurança",
      description:
        "Proteção e tranquilidade com câmeras de segurança e monitoramento ao vivo 24h.",
      link: "produtos#camera-de-seguranca",
      cover_image: {
        id: "img3",
        url: "/products/capa-camera-de-seguranca.png",
        alt: "",
      },
    },
    {
      id: 4,
      name: "Combos",
      description: "Encontre tudo que precisa em um só lugar",
      link: "produtos#combos",
      cover_image: {
        id: "img4",
        url: "/products/capa-combos.png",
        alt: "",
      },
    },
    {
      id: 5,
      name: "Ofertas Exclusivas",
      description:
        "Aproveite promoções imperdíveis e benefícios especiais para você que já é nosso cliente.",
      link: "produtos#ofertas-exclusivas",
      cover_image: {
        id: "img5",
        url: "/products/capa-ofertas-exclusivas.png",
        alt: "",
      },
    },
    {
      id: 6,
      name: "Plano Assinaturas Mais",
      description:
        "Tenha acesso a conteúdos e serviços adicionais com nosso Plano Assinaturas Mais.",
      link: "produtos#assinaturas-mais",
      cover_image: {
        id: "img6",
        url: "/products/capa-assinatura-mais.png",
        alt: "",
      },
    },
  ],
};

export const mockClientService = {
  id: "1",
  tag: "Praticidade para você",
  section_title: "Atendimento para nossos clientes",
  section_description:
    "Clique na modalidade que mais te atende para ser redirecionado para a página.",
  cta: [
    {
      id: "cta1",
      icon: {
        url: "/client-service/minha-fatura-icon.png",
      },
      title: "Minha Fatura",
      description: "Mais facilidade para acessar sua fatura",
      link: "https://wa.me/5571986064654",
    },
    {
      id: "cta2",
      icon: {
        url: "/client-service/whatsapp-icon-1.png",
      },
      title: "Tirar Dúvidas",
      description: "Entre em contato com nossos atendentes",
      link: "https://wa.me/5571986064654",
    },
  ],
};

export const mockContact = {
  image: {
    url: "/contact-section-image.png",
    alt: "",
  },
  tag: "Contato direto com nosso time",
  section_title: "Precisa de ajuda?",
  section_description:
    "Deseja contratar nosso serviço ou de alguma ajuda? Este formulário vai te encaminhar diretamente para nosso atendimento via whatsapp!",
};
