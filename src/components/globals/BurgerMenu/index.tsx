"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ButtonComponent from "@/components/globals/Button";
import { Separator } from "@/components/ui/separator";

type BurguerMenuProps = {
  nav: {
    id: string;
    label: string;
    link: string;
    icon: {
      url: string;
    };
  }[];
  cta: {
    label: string;
    link: string;
  };
  pages: {
    id: string;
    slug: string;
    name: string;
  }[];
};

export default function BurgerMenu({ pages, cta, nav }: BurguerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir/fechar menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] mb-4">
        <SheetTitle className="text-blue mb-2">Páginas</SheetTitle>
        <Separator className="mb-2" />
        <nav className="flex flex-col space-y-4">
          {pages.map((page) => (
            <Link
              key={page.id}
              href={page.slug}
              onClick={toggleMenu}
              className="text-lg hover:underline"
            >
              {page.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col lg:hidden">
          <SheetTitle className="text-blue mb-2 mt-8">Produtos</SheetTitle>
          <Separator className="mb-2" />
          <nav className="flex flex-col space-y-4">
            {nav?.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.link as string}
                  className="flex gap-2 items-center hover:font-bold duration-150 transition-all"
                >
                  <Image
                    src={item.icon.url as string}
                    width={24}
                    height={24}
                    alt=""
                  />
                  <p className="text-[14px] text-center text-blue">
                    {item.label}
                  </p>
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex flex-col xs:hidden">
          <SheetTitle className="text-blue mb-2 mt-8">Fale conosco</SheetTitle>
          <Separator className="mb-2" />
          <ButtonComponent link={cta.link}>{cta.label}</ButtonComponent>
        </div>
      </SheetContent>
    </Sheet>
  );
}
