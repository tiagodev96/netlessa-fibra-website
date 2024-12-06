import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Net Lessa Fibra",
  description:
    "Empresa líder em internet fibra óptica e telecomunicações. Oferecemos planos residenciais e corporativos com a melhor velocidade e estabilidade.",
  keywords:
    "internet fibra óptica, telecomunicações, planos residenciais, internet rápida, internet estável, net lessa, fibra óptica",
  authors: [{ name: "Net Lessa Fibra" }],
  creator: "Net Lessa Fibra",
  publisher: "Net Lessa Fibra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Net Lessa Fibra | Internet Fibra Óptica",
    description:
      "Empresa líder em internet fibra óptica e telecomunicações. Oferecemos planos residenciais e corporativos com a melhor velocidade e estabilidade.",
    url: "https://netlessafibra.com.br",
    siteName: "Net Lessa Fibra",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
