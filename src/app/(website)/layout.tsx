import { Footer } from "@/components";
import Header from "@/components/globals/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
