import React from 'react'

type ProductHeaderProps = {
  page_product: {
    tag: string
    title: string
    description: string
  }
}

export default function ProductHeader({ page_product }: ProductHeaderProps) {
  return (
    <header className="flex flex-col items-center justify-center gap-2">
      <p className="tag">{page_product.tag}</p>
      <h2 className="section-title mb-2">{page_product.title}</h2>
      <p className="paragraph">{page_product.description}</p>
    </header>
  )
}
