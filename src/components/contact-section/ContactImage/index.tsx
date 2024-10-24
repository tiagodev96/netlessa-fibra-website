import Image from "next/image";
import React from "react";

type ContactImageProps = {
  image: {
    url: string;
    alt: string;
  };
};

export default function ContactImage({ image }: ContactImageProps) {
  return (
    <div className="relative w-[500px] h-[600px] hidden lg:block">
      <Image
        src={image.url}
        alt={image.alt ?? ""}
        fill
        objectFit="cover"
        style={{ borderRadius: 6 }}
      />
    </div>
  );
}
