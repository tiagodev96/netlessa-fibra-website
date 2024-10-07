import React from 'react'

export default function TestimonialHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <header className="mb-20 text-center">
      <h2 className="section-title mb-6">{title}</h2>
      <p className="paragraph">{description}</p>
    </header>
  )
}
