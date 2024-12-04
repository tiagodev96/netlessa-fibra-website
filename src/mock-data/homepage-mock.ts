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
      link: "https://central.netlessa.com.br/central_assinante_web/login",
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

export const mockTestimonials = {
  id: "1",
  title: "Confiança que fala por si",
  description: "Veja o que nossos clientes têm a dizer sobre nossos serviços",
  user_testimonials: [
    {
      rating: 5,
      name: "John Doe",
      comment:
        '"Desde que migrei para a internet fibra da NetLessa, minha experiência online melhorou drasticamente. A conexão é super estável e a velocidade é impressionante, mesmo em horários de pico. Posso trabalhar, jogar e assistir a vídeos em alta definição sem nenhum problema. A mudança foi realmente transformadora para o meu dia a dia!"',
      neighbourhood: "Cabula",
      avatar: {
        id: "avatar1",
        url: "/testimonials-avatars/john-doe.png",
        alt: "Avatar de John Doe",
      },
    },
    {
      rating: 4,
      name: "Jane Doe",
      comment:
        '"O combo de internet, TV HD e plano de celular oferecido é simplesmente fantástico! A qualidade da imagem da TV é excelente, e a internet nunca falha, com uma velocidade incrível. Além disso, o plano de celular tem ótimo custo-benefício e cobertura. É ótimo ter tudo em um só lugar com um atendimento ao cliente tão eficiente!"',
      neighbourhood: "Tancredo Neves",
      avatar: {
        id: "avatar2",
        url: "/testimonials-avatars/jane-doe.png",
        alt: "Avatar de Jane Doe",
      },
    },
    {
      rating: 5,
      name: "José Silva",
      comment:
        '"Estou realmente impressionado com o combo de internet, TV e celular da NetLessa! A velocidade da internet fibra é incrível; consigo transmitir séries em 4K sem interrupções e jogar online sem lag. A qualidade da TV é maravilhosa, com uma vasta seleção de canais. E o plano de celular tem uma cobertura excelente, além de ser super acessível. O suporte ao cliente também merece destaque, sempre pronto para ajudar. Sem dúvida, foi uma escolha que fez toda a diferença na minha rotina!"',
      neighbourhood: "Saboeiro",
      avatar: {
        id: "avatar3",
        url: "/testimonials-avatars/john-doe.png",
        alt: "Avatar de José Silva",
      },
    },
  ],
};

export const mockBlogSection = {
  id: "1",
  tag: "Blog",
  title: "Blog de Inovações e Dicas Tecnológicas",
  slug: "index",
  description:
    "Fique por dentro das últimas tendências e descubra como aproveitar ao máximo nossos serviços e produtos",
  posts: [
    {
      id: 1,
      cover_image: {
        url: "/posts/imagem-capa-post-1.png",
        alt: "",
      },
      name: "Como Escolher o Melhor Plano de Internet para sua Casa",
      category: {
        name: "Dicas de Internet",
      },
      excerpt:
        "Descubra os fatores essenciais para selecionar o plano de internet ideal para suas necessidades. Este guia ajuda você a tomar uma decisão informada para garantir uma conexão estável e eficiente.",
      content: {
        text: "Conteúdo do Post 1",
        marks: [],
        children: [],
      },
    },
    {
      id: 2,
      cover_image: {
        url: "/posts/imagem-capa-post-2.png",
        alt: "",
      },
      name: "Os Benefícios do Combo: Internet, TV HD e Plano de Celular",
      category: {
        name: "Ofertas e Pacotes",
      },
      excerpt:
        "Optar por um combo de internet, TV HD e plano de celular traz vantagens como economia, conveniência e uma experiência aprimorada. Com serviços integrados, você simplifica pagamentos e aproveita melhor as ofertas, garantindo qualidade e praticidade.",
      content: {
        text: "Conteúdo do Post 2",
        marks: [],
        children: [],
      },
    },
  ],
};
