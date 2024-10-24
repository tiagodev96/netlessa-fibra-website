import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import PlanCard from "../PlanCard";

type PlansCarouselProps = {
  plans: {
    id: string;
    name: string;
    is_highlighted: boolean;
    price: number;
    whatsapp_text: string;
    features: {
      id: string;
      name: string;
      icon: {
        url: string;
      };
    }[];
  }[];
};

const redirectToWhatsapp = (text: string) => {
  const url = `https://wa.me/5571986064654?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
};

export default function PlansCarousel({ plans }: PlansCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const selectedIndex = emblaApi.selectedScrollSnap();
    setPrevBtnDisabled(selectedIndex === 0);
    setNextBtnDisabled(selectedIndex === emblaApi.scrollSnapList().length - 1);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, setScrollSnaps, onSelect]);

  const isSinglePage = scrollSnaps.length <= 1;

  return (
    <div className="w-full mx-auto py-20">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] gap-2 sm:px-2"
              >
                <PlanCard
                  plan={plan}
                  onClick={() => redirectToWhatsapp(plan.whatsapp_text)}
                />
              </div>
            ))}
          </div>
        </div>
        {!isSinglePage && (
          <>
            <button
              className={`h-8 w-8 absolute left-0 -bottom-20 md:-left-7 md:top-1/2 transform bg-green rounded-full shadow-md ${
                prevBtnDisabled ? "hidden" : ""
              }`}
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
            >
              <ChevronLeft className="h-6 w-6 m-auto" />
            </button>
            <button
              className={`h-8 w-8 absolute right-0 -bottom-20 md:-right-7 md:top-1/2 transform bg-green rounded-full shadow-md ${
                nextBtnDisabled ? "hidden" : ""
              }`}
              onClick={scrollNext}
              disabled={nextBtnDisabled}
            >
              <ChevronRight className="h-6 w-6 m-auto" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
