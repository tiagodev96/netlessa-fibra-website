import React from 'react'

type ClientServiceHeaderProps = {
  tag: string
  section_title: string
  section_description: string
}

export default function ClientServiceHeader({
  tag,
  section_title,
  section_description,
}: ClientServiceHeaderProps) {
  return (
    <div className="flex flex-col items-center w-full mx-auto">
      <p className="tag">{tag}</p>
      <h3 className="section-title">{section_title}</h3>
      <p className="paragraph">{section_description}</p>
    </div>
  )
}
