'use client'

import PlansCarousel from '@/components/ProductPlans/PlansCarousel'
import ProductHeader from '@/components/ProductPlans/ProductHeader'
import { Media } from '@/payload-types'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'

type ProductPlansBlockProps = {
  products: {
    id: number
    cover_image: Media
    name: string
    description: string
    link: string
    page_product: {
      tag: string
      title: string
      description: string
    }
    plans: {
      id: string
      name: string
      is_highlighted: boolean
      price: number
      whatsapp_text: string
      features: {
        id: string
        name: string
        icon: Media
      }[]
    }[]
    whatsapp_text: string
  }[]
}

export default function ProductPlansBlock(props: ProductPlansBlockProps) {
  const { products } = props

  return (
    <section className="py-24">
      <div className="section-container">
        {products.map((product) => {
          const { page_product, plans } = product
          const sectionId = product.link.split('#')[1]

          return (
            <div key={product.id} id={sectionId} className="pb-24">
              <ProductHeader page_product={page_product} />
              <PlansCarousel plans={plans} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
