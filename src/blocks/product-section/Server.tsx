import ProductSectionHeader from '@/components/ProductSection/ProductSectionHeader'
import ProductsList from '@/components/ProductSection/ProductsList'
import React from 'react'

type ProductSectionBlockServerProps = {
  id: string
  tag: string
  section_title: string
  section_description: string
  cta: {
    id: string
    text: string
    link: string
  }[]
  products_list: {
    id: number
    name: string
    description: string
    link: string
    cover_image: {
      id: string
      url: string
      alt: string
    }
  }[]
}

export default function ProductSectionBlockServer(props: ProductSectionBlockServerProps) {
  const { tag, section_title, section_description, cta, products_list } = props

  return (
    <section className="section-container py-24">
      <ProductSectionHeader
        cta={cta}
        section_description={section_description}
        section_title={section_title}
        tag={tag}
      />
      <div className="mt-20">
        <ProductsList products_list={products_list} />
      </div>
    </section>
  )
}
