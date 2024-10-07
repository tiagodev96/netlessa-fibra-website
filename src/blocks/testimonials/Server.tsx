'use client'

import TestimonialCarousel from '@/components/TestimonialsSection/TestimonialCarousel'
import TestimonialHeader from '@/components/TestimonialsSection/TestimonialHeader'
import React from 'react'

type TestimonialsBlockSectionProps = {
  id: string
  title: string
  description: string
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

export default function TestimonialsBlockSection(props: TestimonialsBlockSectionProps) {
  console.log('🚀 ~ TestimonialsBlockSection ~ props:', props)
  const { title, description, user_testimonials } = props

  return (
    <section className="bg-light-green">
      <div className="py-24">
        <div className="section-container">
          <TestimonialHeader title={title} description={description} />
        </div>
        <TestimonialCarousel user_testimonials={user_testimonials} />
      </div>
    </section>
  )
}
