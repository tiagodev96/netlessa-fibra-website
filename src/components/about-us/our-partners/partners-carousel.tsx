"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PartnersCarouselProps = {
  partners: string[];
};

export default function PartnersCarousel({ partners }: PartnersCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    const scroll = () => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    };
    const interval = setInterval(scroll, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {partners.map((src, index) => (
          <div
            className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] gap-2 sm:px-2"
            key={index}
          >
            <Image
              src={src}
              alt={`Parceiro ${index + 1}`}
              width={140}
              height={56}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
