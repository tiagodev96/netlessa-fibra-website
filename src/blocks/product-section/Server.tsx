import Button from '@/components/Button'
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
}

export default function ProductSectionBlockServer(props: ProductSectionBlockServerProps) {
  const { id, tag, section_title, section_description, cta } = props

  return (
    <div className="section-container py-24">
      <header className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <p className="tag">{tag}</p>
          <h2 className="section-title mb-2">{section_title}</h2>
          <h2 className="paragraph">{section_description}</h2>
        </div>
        <div className="flex gap-2">
          {cta.map((cta, index) => (
            <Button key={index} link={cta.link}>
              {cta.text}
            </Button>
          ))}
        </div>
      </header>
    </div>
  )
}
