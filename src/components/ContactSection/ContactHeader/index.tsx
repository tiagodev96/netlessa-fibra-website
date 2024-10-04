import React from 'react'

type ContactHeaderProps = {
  tag: string
  section_title: string
  section_description: string
}

export default function ContactHeader({
  tag,
  section_title,
  section_description,
}: ContactHeaderProps) {
  return (
    <div className="flex flex-col">
      <p className="tag mb-2">{tag}</p>
      <h2 className="section-title mb-6">{section_title}</h2>
      <p className="paragraph">{section_description}</p>
    </div>
  )
}
