import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import config from '@payload-config'
import Image from 'next/image'
import { Media } from '@/payload-types'

export default async function HeaderServer() {
  const payload = await getPayloadHMR({ config })
  const header = await payload.findGlobal({ slug: 'header' })
  console.log('🚀 ~ HeaderServer ~ header:', header)
  const logo = header.logo as Media

  return (
    <header>
      <div className="flex justify-between section-container py-6">
        <div className="relative w-52 h-12">
          <Image
            src={logo.url as string}
            alt={logo.alt as string}
            sizes="100vw"
            fill
            className="object-contain"
          />
        </div>

        <nav>
          <ul className="flex">
            {header?.nav?.map((item) => {
              const icon = item.icon as Media
              return (
                <a
                  key={item.id}
                  href={item.link as string}
                  className="flex flex-col items-center justify-center mr-8"
                >
                  <Image src={icon.url as string} width={24} height={24} alt="" />
                  <li>{item.label}</li>
                </a>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
