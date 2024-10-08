import React from 'react'

export default function BlogHeader({
  tag,
  title,
  description,
}: {
  tag: string
  title: string
  description: string
}) {
  return (
    <header className="flex flex-col mb-20">
      <p className="tag mb-2">{tag}</p>
      <h2 className="section-title mb-6">{title}</h2>
      <p className="paragraph max-w-[600px]">{description}</p>
    </header>
  )
}
