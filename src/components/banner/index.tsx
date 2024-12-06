"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Button from "../globals/Button";

type BannerProps = {
  carousel: {
    id: string;
    content_image: {
      url: string;
      alt: string;
      width: number;
      height: number;
    };
    ctas: {
      label: string;
      icon?: {
        url: string;
      };
      link: string;
    }[];
    background: {
      url: string;
      alt: string;
      width: number;
      height: number;
    };
  }[];
};

export default function Banner({ carousel }: BannerProps) {
  return (
    <section>
      <Swiper className="mySwiper">
        {carousel.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[600px] flex items-center justify-start">
              <Image
                src={slide.background.url || ""}
                alt={slide.background.alt || ""}
                width={slide.background.width || 0}
                height={slide.background.height || 0}
                className="absolute top-0 left-0 right-0 bottom-0 z-[-1] h-full object-cover object-left"
                fill={false}
              />

              <div className="pl-4 h-full max-h-[450px] section-container flex flex-col gap-2 items-start justify-center w-full">
                <Image
                  src={slide.content_image.url || ""}
                  alt={slide.content_image.alt || ""}
                  width={slide.content_image.width || 0}
                  height={slide.content_image.height || 0}
                  className="h-full object-contain mr-auto"
                />
                <div className="flex gap-4 pl-8">
                  {slide.ctas.map((cta, index) => (
                    <Button key={index} link={cta.link} isHero targetBlank>
                      {cta.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
