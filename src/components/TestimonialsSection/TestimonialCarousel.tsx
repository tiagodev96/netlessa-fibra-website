import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Star } from 'lucide-react'
import Image from 'next/image'

type TestimonialCarouselProps = {
  user_testimonials: {
    rating: number
    name: string
    comment: string
    neighbourhood: string
    avatar: {
      id: string
      url: string
      alt: string
    }
  }[]
}

export default function TestimonialCarousel({ user_testimonials }: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext()
      }, 10000)
      return () => clearInterval(interval)
    }
  }, [emblaApi])

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {user_testimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] px-4">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-light-gray fill-current" />
                  ))}
                </div>
                <p className="paragraph mb-4">{testimonial.comment}</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar.url}
                    alt={testimonial.avatar.alt}
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray">{testimonial.neighbourhood}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        {user_testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === selectedIndex ? 'bg-blue' : 'bg-light-gray'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
