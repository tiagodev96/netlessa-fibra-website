"use client";

import Button from "@/components/globals/Button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    description: string;
    link: string;
    cover_image: {
      id: string;
      url: string;
      alt: string;
    };
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  const { name, description, link, cover_image } = product;
  const path = usePathname();
  const isCompany = path.startsWith("/grupo-lessa");

  return (
    <div className="min-w-[280px] w-full rounded-[6px] flex flex-col flex-1 justify-between h-full">
      <div className="flex flex-col rounded-[6px]">
        <Image
          src={cover_image.url}
          alt={cover_image.alt}
          width={600}
          height={450}
          objectFit="cover"
          className="rounded-[6px]"
        />
        <h3 className="H3 mt-3 mb-1 max-w-[405px]">{name}</h3>
        <p className="paragraph max-w-[405px] mb-3">{description}</p>
      </div>

      <Button link={link} targetBlank={isCompany}>
        {isCompany ? "Fale Conosco" : "Ver Página"}
      </Button>
    </div>
  );
}
