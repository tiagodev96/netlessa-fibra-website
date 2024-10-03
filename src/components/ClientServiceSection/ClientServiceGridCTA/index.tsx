import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ClientServiceGridCTAProps = {
  cta: {
    id: string
    icon: any
    title: string
    description: string
    link: string
  }[]
}

export default function ClientServiceGridCTA({ cta }: ClientServiceGridCTAProps) {
  return (
    <div className="flex gap-10 justify-center">
      {cta.map((item) => (
        <Link key={item.id} href={item.link} target="_blank">
          <div className="flex flex-col items-center gap-2 w-full max-w-[250px] rounded-[6px] bg-blue px-5 py-5 drop-shadow-sm">
            <Image src={item.icon.url} alt="" width={50} height={50} />
            <h3 className="H3 text-green text-center">{item.title}</h3>
            <p className="paragraph text-white">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
