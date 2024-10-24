type Page = {
  id: string;
  slug: string;
  name: string;
};

export const mockCompanyInfos = {
  logo: {
    url: "/logo.png",
    alt: "Logo da Empresa",
  },
  address: "R. São Paulo, 33 - Tancredo Neves, Salvador - BA, 41207-220",
  phone_number: "(71) 9 8606-4654",
  email: "net.lessa.net@gmail.com",
  socials: [
    {
      id: "1",
      social_name: "Whatsapp",
      icon: { url: "/social-media/whatsapp-icon.png" },
      link: "https://wa.me/5571986064654",
    },
    {
      id: "2",
      social_name: "Instagram",
      icon: { url: "/social-media/instagram-icon.png" },
      link: "https://instagram.com/netlessafibra",
    },
  ],
};

export const mockPagesFooter: Page[] = [
  { id: "1", name: "Início", slug: "/" },
  { id: "2", name: "Produtos", slug: "/produtos" },
];

export const mockLegalPages: Page[] = [
  { id: "1", name: "Termos de Serviço", slug: "/termos" },
  { id: "2", name: "Política de Privacidade", slug: "/privacidade" },
];

export const mockCopyright = `© ${new Date().getFullYear()} Net Lessa Fibra. Todos os direitos reservados.`;
