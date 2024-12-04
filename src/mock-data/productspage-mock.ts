export const mockProductsPage = [
  {
    id: Math.floor(Math.random() * 1000),
    name: "Planos Residenciais",
    description:
      "Conexão que a sua família precisa e merece. A melhor fibra ótica de Salvador",
    link: "produtos#planos-residenciais",
    whatsapp_text: "Texto padrão do WhatsApp para Planos Residenciais",
    page_product: {
      tag: "Planos Residenciais",
      title: "A conexão perfeita para sua casa",
      description: "Fique sempre conectado",
    },
    plans: [
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "500 MEGA",
        is_highlighted: true,
        price: 79.99,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo PLANO RESIDENCIAL 500 MEGA, R$79,99. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Instalação grátis",
            icon: {
              url: "/product-plans/icons/icon-instalacao-gratis-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Fidelidade de 12 meses",
            icon: {
              url: "/product-plans/icons/icon-fidelidade-12-meses-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Preço promocional para os 3 primeiros meses. Após esse período fica R$99,99",
            icon: {
              url: "/product-plans/icons/icon-promocao-destaque.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "750 MEGA",
        is_highlighted: false,
        price: 159.99,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo PLANO RESIDENCIAL 750 MEGA, R$159,99. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Instalação grátis",
            icon: {
              url: "/product-plans/icons/icon-instalacao-gratis.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Fidelidade de 12 meses",
            icon: {
              url: "/product-plans/icons/icon-fidelidade-12-meses.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Wi-fi 6",
            icon: {
              url: "/product-plans/icons/icon-wi-fi.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Lessa TV",
            icon: {
              url: "/product-plans/icons/icon-tv.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "App premium",
            icon: {
              url: "/product-plans/icons/icon-smartphone.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "1000 MEGA",
        is_highlighted: false,
        price: 199.99,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo PLANO RESIDENCIAL 1000 MEGA, R$199,99. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Instalação grátis",
            icon: {
              url: "/product-plans/icons/icon-instalacao-gratis.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Fidelidade de 12 meses",
            icon: {
              url: "/product-plans/icons/icon-fidelidade-12-meses.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Wi-fi 6",
            icon: {
              url: "/product-plans/icons/icon-wi-fi.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Lessa TV",
            icon: {
              url: "/product-plans/icons/icon-tv.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "App premium",
            icon: {
              url: "/product-plans/icons/icon-smartphone.png",
            },
          },
        ],
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "Planos Comerciais",
    description:
      "Conexão que a sua empresa precisa. A melhor fibra ótica de Salvador",
    link: "produtos#planos-comerciais",
    whatsapp_text: "Texto padrão do WhatsApp para Planos Comerciais",
    page_product: {
      tag: "Planos Comerciais",
      title: "A conexão perfeita para sua empresa",
      description: "Segurança e conexão de primeira linha para seu negócio",
    },
    plans: [
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "500 MEGA",
        is_highlighted: true,
        price: 99.99,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo PLANO COMERCIAL 500 MEGA, R$99,99. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Fidelidade de 24 meses",
            icon: {
              url: "/product-plans/icons/icon-fidelidade-12-meses-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Preço promocional para os 3 primeiros meses. Após esse período fica R$129,99",
            icon: {
              url: "/product-plans/icons/icon-promocao-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Telefone Fixo Comercial por + R$50,00",
            icon: {
              url: "/product-plans/icons/icon-telefone-fixo-destaque.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "750 MEGA",
        is_highlighted: false,
        price: 189.99,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo PLANO COMERCIAL 750 MEGA, R$189,99. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Fidelidade de 24 meses",
            icon: {
              url: "/product-plans/icons/icon-fidelidade-12-meses.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Wi-fi 6",
            icon: {
              url: "/product-plans/icons/icon-wi-fi.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Lessa TV",
            icon: {
              url: "/product-plans/icons/icon-tv.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "App premium",
            icon: {
              url: "/product-plans/icons/icon-smartphone.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Telefone Fixo Comercial por + R$50,00",
            icon: {
              url: "/product-plans/icons/icon-telefone-fixo.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "1000 MEGA",
        is_highlighted: false,
        price: 229.99,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo PLANO COMERCIAL 1000 MEGA, R$229,99. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Fidelidade de 24 meses",
            icon: {
              url: "/product-plans/icons/icon-fidelidade-12-meses.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Wi-fi 6",
            icon: {
              url: "/product-plans/icons/icon-wi-fi.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Lessa TV",
            icon: {
              url: "/product-plans/icons/icon-tv.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "App premium",
            icon: {
              url: "/product-plans/icons/icon-smartphone.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Telefone Fixo Comercial por + R$50,00",
            icon: {
              url: "/product-plans/icons/icon-telefone-fixo.png",
            },
          },
        ],
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "Câmeras de Segurança",
    description:
      "Proteção e tranquilidade com câmeras de segurança e monitoramento ao vivo 24h.",
    link: "produtos#camera-de-seguranca",
    whatsapp_text: "Texto padrão do WhatsApp para Câmeras de Segurança",
    page_product: {
      tag: "Câmeras de Segurança",
      title: "Proteção e Monitoramento 24h",
      description:
        "Proteja seu lar ou negócio em Salvador com monitoramento 24h",
    },
    plans: [
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "1 Câmera",
        is_highlighted: false,
        price: 44.99,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo produto 1 CÂMERA DE SEGURANÇA. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "1 dia de gravação",
            icon: {
              url: "/product-plans/icons/icon-gravacao.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Armazenamento em nuvem",
            icon: {
              url: "/product-plans/icons/icon-cloud.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Monitoramento 24h",
            icon: {
              url: "/product-plans/icons/icon-shield.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "2 Câmeras",
        is_highlighted: true,
        price: 99.99,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo produto 2 CÂMERAS DE SEGURANÇA. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "2 dias de gravação",
            icon: {
              url: "/product-plans/icons/icon-gravacao-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Armazenamento em nuvem",
            icon: {
              url: "/product-plans/icons/icon-cloud-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Monitoramento 24h",
            icon: {
              url: "/product-plans/icons/icon-shield-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Preço exclusivo para cliente net lessa. Preço para quem não é cliente: R$109,90",
            icon: {
              url: "/product-plans/icons/icon-vip-destaque.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "3 Câmeras",
        is_highlighted: false,
        price: 139.99,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo produto 3 CÂMERAS DE SEGURANÇA. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "1 dia de gravação",
            icon: {
              url: "/product-plans/icons/icon-gravacao.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Armazenamento em nuvem",
            icon: {
              url: "/product-plans/icons/icon-cloud.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Monitoramento 24h",
            icon: {
              url: "/product-plans/icons/icon-shield.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Preço exclusivo para cliente net lessa. Preço para quem não é cliente: R$149,99",
            icon: {
              url: "/product-plans/icons/icon-vip.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "Personalizado",
        is_highlighted: false,
        price: 44.99,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo produto CÂMERAS DE SEGURANÇA PERSONALIZADO, a partir de R$44,99. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Escolha a quantidade de câmeras",
            icon: {
              url: "/product-plans/icons/icon-camera-vigilancia.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Defina o tempo de gravação",
            icon: {
              url: "/product-plans/icons/icon-gravacao.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Monitoramento 24h",
            icon: {
              url: "/product-plans/icons/icon-shield.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "A partir de R$44,99",
            icon: {
              url: "/product-plans/icons/icon-price.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Preço exclusivo para cliente net lessa. Preço para quem não é cliente: R$149,99",
            icon: {
              url: "/product-plans/icons/icon-vip.png",
            },
          },
        ],
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "Combos",
    description: "Encontre tudo que precisa em um só lugar",
    link: "produtos#combos",
    whatsapp_text: "Texto padrão do WhatsApp para Combos",
    page_product: {
      tag: "Combos",
      title: "Tudo em um só lugar",
      description: "Fique sempre conectado",
    },
    plans: [
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "500 MEGA + 1 CHIP 25GB",
        is_highlighted: false,
        price: 169.9,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo COMBO 500 MEGA + 1 CHIP 25GB, R$169,90. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Wi-fi 6",
            icon: {
              url: "/product-plans/icons/icon-wi-fi.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Whatsapp ilimitado para mensagens, fotos e vídeos",
            icon: {
              url: "/product-plans/icons/icon-whatsapp.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Waze ilimitado",
            icon: {
              url: "/product-plans/icons/icon-waze.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Chamadas nacionais ilimitadas",
            icon: {
              url: "/product-plans/icons/icon-smartphone.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "100 SMS gratuitos",
            icon: {
              url: "/product-plans/icons/icon-sms.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "500 MEGA + 1 CHIP 50GB",
        is_highlighted: true,
        price: 189.9,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo produto 500 MEGA + 1 CHIP 50GB. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Wi-fi 6",
            icon: {
              url: "/product-plans/icons/icon-wi-fi-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Whatsapp ilimitado para mensagens, fotos e vídeos",
            icon: {
              url: "/product-plans/icons/icon-whatsapp-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Waze ilimitado",
            icon: {
              url: "/product-plans/icons/icon-waze-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Chamadas nacionais ilimitadas",
            icon: {
              url: "/product-plans/icons/icon-smartphone-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "100 SMS gratuitos",
            icon: {
              url: "/product-plans/icons/icon-sms-destaque.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "500 MEGA + 1 CHIP 75GB",
        is_highlighted: false,
        price: 209.8,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo produto 500 MEGA + 1 CHIP 75GB. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Wi-fi 6",
            icon: {
              url: "/product-plans/icons/icon-wi-fi.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Whatsapp ilimitado para mensagens, fotos e vídeos",
            icon: {
              url: "/product-plans/icons/icon-whatsapp.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Waze ilimitado",
            icon: {
              url: "/product-plans/icons/icon-waze.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Chamadas nacionais ilimitadas",
            icon: {
              url: "/product-plans/icons/icon-smartphone.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "100 SMS gratuitos",
            icon: {
              url: "/product-plans/icons/icon-sms.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "500 MEGA + 1 CHIP 100GB",
        is_highlighted: false,
        price: 229.8,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo produto 500 MEGA + 1 CHIP 100GB. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Wi-fi 6",
            icon: {
              url: "/product-plans/icons/icon-wi-fi.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Whatsapp ilimitado para mensagens, fotos e vídeos",
            icon: {
              url: "/product-plans/icons/icon-whatsapp.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Waze ilimitado",
            icon: {
              url: "/product-plans/icons/icon-waze.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Chamadas nacionais ilimitadas",
            icon: {
              url: "/product-plans/icons/icon-smartphone.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "100 SMS gratuitos",
            icon: {
              url: "/product-plans/icons/icon-sms.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "750 Mega + 1 Chip 25GB",
        is_highlighted: false,
        price: 199.9,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo produto 750 Mega + 1 Chip 25GB. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Wi-fi 6",
            icon: {
              url: "/product-plans/icons/icon-wi-fi.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Whatsapp ilimitado para mensagens, fotos e vídeos",
            icon: {
              url: "/product-plans/icons/icon-whatsapp.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Waze ilimitado",
            icon: {
              url: "/product-plans/icons/icon-waze.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Chamadas nacionais ilimitadas",
            icon: {
              url: "/product-plans/icons/icon-smartphone.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "100 SMS gratuitos",
            icon: {
              url: "/product-plans/icons/icon-sms.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "750 MEGA + 1 CHIP 50GB",
        is_highlighted: true,
        price: 219.9,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo produto 750 MEGA + 1 CHIP 50GB. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Wi-fi 6",
            icon: {
              url: "/product-plans/icons/icon-wi-fi-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Whatsapp ilimitado para mensagens, fotos e vídeos",
            icon: {
              url: "/product-plans/icons/icon-whatsapp-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Waze ilimitado",
            icon: {
              url: "/product-plans/icons/icon-waze-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Chamadas nacionais ilimitadas",
            icon: {
              url: "/product-plans/icons/icon-smartphone-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "100 SMS gratuitos",
            icon: {
              url: "/product-plans/icons/icon-sms-destaque.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "750 MEGA + 1 CHIP 75GB",
        is_highlighted: false,
        price: 239.8,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo produto 750 MEGA + 1 CHIP 75GB. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Wi-fi 6",
            icon: {
              url: "/product-plans/icons/icon-wi-fi.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Whatsapp ilimitado para mensagens, fotos e vídeos",
            icon: {
              url: "/product-plans/icons/icon-whatsapp.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Waze ilimitado",
            icon: {
              url: "/product-plans/icons/icon-waze.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Chamadas nacionais ilimitadas",
            icon: {
              url: "/product-plans/icons/icon-smartphone.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "100 SMS gratuitos",
            icon: {
              url: "/product-plans/icons/icon-sms.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "750 MEGA + 1 CHIP 100GB",
        is_highlighted: false,
        price: 259.8,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo produto 750 MEGA + 1 CHIP 100GB. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Wi-fi 6",
            icon: {
              url: "/product-plans/icons/icon-wi-fi.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Whatsapp ilimitado para mensagens, fotos e vídeos",
            icon: {
              url: "/product-plans/icons/icon-whatsapp.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Waze ilimitado",
            icon: {
              url: "/product-plans/icons/icon-waze.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Chamadas nacionais ilimitadas",
            icon: {
              url: "/product-plans/icons/icon-smartphone.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "100 SMS gratuitos",
            icon: {
              url: "/product-plans/icons/icon-sms.png",
            },
          },
        ],
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "Ofertas Exclusivas",
    description:
      "Aproveite promoções imperdíveis e benefícios especiais para você que já é nosso cliente.",
    link: "produtos#ofertas-exclusivas",
    whatsapp_text: "Texto padrão do WhatsApp para Ofertas Exclusivas",
    page_product: {
      tag: "Ofertas Exclusivas",
      title: "Promoções imperdíveis para nossos clientes",
      description:
        "Descubra nossas ofertas exclusivas para clientes Net Lessa e conecte-se com vantagens incríveis.",
    },
    plans: [
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "PLANO DE CELULAR 5G 25GB",
        is_highlighted: false,
        price: 49.9,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo PLANO EXCLUSIVO PARA CLIENTES - CELULAR 5G 25GB, R$49,90. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Whatsapp ilimitado para mensagens, fotos e vídeos",
            icon: {
              url: "/product-plans/icons/icon-whatsapp.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Waze ilimitado",
            icon: {
              url: "/product-plans/icons/icon-waze.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Chamadas nacionais ilimitadas",
            icon: {
              url: "/product-plans/icons/icon-smartphone.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "100 SMS gratuitos",
            icon: {
              url: "/product-plans/icons/icon-sms.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "PLANO DE CELULAR 5G 50GB",
        is_highlighted: true,
        price: 69.9,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo PLANO EXCLUSIVO PARA CLIENTES - CELULAR 5G 50GB, R$69,90. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Whatsapp ilimitado para mensagens, fotos e vídeos",
            icon: {
              url: "/product-plans/icons/icon-whatsapp-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Waze ilimitado",
            icon: {
              url: "/product-plans/icons/icon-waze-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Chamadas nacionais ilimitadas",
            icon: {
              url: "/product-plans/icons/icon-smartphone-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "100 SMS gratuitos",
            icon: {
              url: "/product-plans/icons/icon-sms-destaque.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "PLANO DE CELULAR 5G 75GB",
        is_highlighted: false,
        price: 89.9,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo PLANO EXCLUSIVO PARA CLIENTES - CELULAR 5G 75GB, R$89,90. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Whatsapp ilimitado para mensagens, fotos e vídeos",
            icon: {
              url: "/product-plans/icons/icon-whatsapp.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Waze ilimitado",
            icon: {
              url: "/product-plans/icons/icon-waze.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Chamadas nacionais ilimitadas",
            icon: {
              url: "/product-plans/icons/icon-smartphone.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "100 SMS gratuitos",
            icon: {
              url: "/product-plans/icons/icon-sms.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "PLANO DE CELULAR 5G 100GB",
        is_highlighted: false,
        price: 109.9,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo PLANO EXCLUSIVO PARA CLIENTES - CELULAR 5G 100GB, R$109,90. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Whatsapp ilimitado para mensagens, fotos e vídeos",
            icon: {
              url: "/product-plans/icons/icon-whatsapp.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Waze ilimitado",
            icon: {
              url: "/product-plans/icons/icon-waze.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Chamadas nacionais ilimitadas",
            icon: {
              url: "/product-plans/icons/icon-smartphone.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "100 SMS gratuitos",
            icon: {
              url: "/product-plans/icons/icon-sms.png",
            },
          },
        ],
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "Plano Assinaturas Mais",
    description:
      "Tenha acesso a conteúdos e serviços adicionais com nosso Plano Assinaturas Mais.",
    link: "produtos#assinaturas-mais",
    whatsapp_text: "Texto padrão do WhatsApp para Plano Assinaturas Mais",
    page_product: {
      tag: "Plano Assinaturas Mais",
      title: "Assinatura Premium",
      description:
        "Desfrute de benefícios extras e uma experiência de conexão inigualável.",
    },
    plans: [
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "PLANO DE CELULAR 5G 25GB",
        is_highlighted: false,
        price: 69.9,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo PLANO DE CELULAR 5G 25GB, R$69,90. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Whatsapp ilimitado para mensagens, fotos e vídeos",
            icon: {
              url: "/product-plans/icons/icon-whatsapp.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Waze ilimitado",
            icon: {
              url: "/product-plans/icons/icon-waze.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Chamadas nacionais ilimitadas",
            icon: {
              url: "/product-plans/icons/icon-smartphone.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "100 SMS gratuitos",
            icon: {
              url: "/product-plans/icons/icon-sms.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "PLANO DE CELULAR 5G 50GB",
        is_highlighted: true,
        price: 89.9,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo PLANO DE CELULAR 5G 50GB, R$89,90. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Whatsapp ilimitado para mensagens, fotos e vídeos",
            icon: {
              url: "/product-plans/icons/icon-whatsapp-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Waze ilimitado",
            icon: {
              url: "/product-plans/icons/icon-waze-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Chamadas nacionais ilimitadas",
            icon: {
              url: "/product-plans/icons/icon-smartphone-destaque.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "100 SMS gratuitos",
            icon: {
              url: "/product-plans/icons/icon-sms-destaque.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "PLANO DE CELULAR 5G 75GB",
        is_highlighted: false,
        price: 119.9,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo PLANO DE CELULAR 5G 75GB, R$119,90. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Whatsapp ilimitado para mensagens, fotos e vídeos",
            icon: {
              url: "/product-plans/icons/icon-whatsapp.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Waze ilimitado",
            icon: {
              url: "/product-plans/icons/icon-waze.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Chamadas nacionais ilimitadas",
            icon: {
              url: "/product-plans/icons/icon-smartphone.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "100 SMS gratuitos",
            icon: {
              url: "/product-plans/icons/icon-sms.png",
            },
          },
        ],
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        name: "PLANO DE CELULAR 5G 100GB",
        is_highlighted: false,
        price: 129.9,
        whatsapp_text:
          "Oi, tudo bem? Me interessei pelo PLANO DE CELULAR 5G 100GB, R$129,90. Como posso contratar?",
        features: [
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Whatsapp ilimitado para mensagens, fotos e vídeos",
            icon: {
              url: "/product-plans/icons/icon-whatsapp.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Waze ilimitado",
            icon: {
              url: "/product-plans/icons/icon-waze.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "Chamadas nacionais ilimitadas",
            icon: {
              url: "/product-plans/icons/icon-smartphone.png",
            },
          },
          {
            id: Math.random().toString(36).substr(2, 9),
            name: "100 SMS gratuitos",
            icon: {
              url: "/product-plans/icons/icon-sms.png",
            },
          },
        ],
      },
    ],
  },
];
