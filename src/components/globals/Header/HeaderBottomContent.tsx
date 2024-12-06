import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button";
import BurgerMenu from "../BurgerMenu";
import { mockProducts } from "@/mock-data";

type HeaderBottomContentProps = {
  logo: {
    url: string;
    alt: string;
  };
  cta: {
    label: string;
    link: string;
  };
  pages: {
    id: string;
    slug: string;
    name: string;
    isLegal: boolean;
  }[];
  isCompany: boolean;
};

export default function HeaderBottomContent({
  logo,
  cta,
  pages,
  isCompany,
}: HeaderBottomContentProps) {
  const products = isCompany ? null : mockProducts;

  return (
    <div className="flex justify-between section-container py-6">
      <div className="relative w-24 h-24">
        <Link href={isCompany ? "/grupo-lessa" : "/"}>
          <Image
            src={logo.url as string}
            alt={logo.alt as string}
            sizes="100vw"
            fill
            className="object-contain"
          />
        </Link>
      </div>

      <nav className="flex items-center gap-4 lg:gap-8">
        <ul className="hidden gap-4 lg:gap-8 lg:flex">
          {products?.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.link as string}
                className="flex flex-col items-center justify-center hover:-translate-y-1 duration-150 transition-all"
              >
                <Image
                  src={item.icon.url as string}
                  width={24}
                  height={24}
                  alt=""
                />
                <li className="text-[14px] text-center text-blue">
                  {item.label}
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="hidden xs:flex">
          <Button link={cta.link}>{cta.label}</Button>
        </div>
        <BurgerMenu pages={pages} cta={cta} isCompany={isCompany} />
      </nav>
    </div>
  );
}
