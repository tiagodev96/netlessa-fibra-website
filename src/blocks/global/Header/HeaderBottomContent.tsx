import BurguerMenu from '@/components/BurguerMenu'
import Button from '@/components/Button'
import { Media, Page } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type HeaderBottomContentProps = {
  nav: {
    id: string
    label: string
    link: string
    icon: Media
  }[]
  logo: Media
  cta: {
    label: string
    link: string
  }
  pages: Page[]
}

export default function HeaderBottomContent({ logo, nav, cta, pages }: HeaderBottomContentProps) {
  return (
    <div className="flex justify-between section-container py-6">
      <div className="relative w-52 h-12">
        <Link href="/">
          <Image
            src={logo.url as string}
            alt={logo.alt as string}
            sizes="100vw"
            fill
            className="object-contain"
          />
        </Link>
      </div>

      <nav className="flex items-center gap-4 lg:gap-8">
        <ul className="hidden gap-4 lg:gap-8 md:flex">
          {nav?.map((item) => {
            const icon = item.icon as Media
            return (
              <Link
                key={item.id}
                href={item.link as string}
                className="flex flex-col items-center justify-center hover:-translate-y-1 duration-150 transition-all"
              >
                <Image src={icon.url as string} width={24} height={24} alt="" />
                <li className="text-[14px] text-center text-blue">{item.label}</li>
              </Link>
            )
          })}
        </ul>
        <div className="hidden xs:flex">
          <Button link={cta.link}>{cta.label}</Button>
        </div>
        <BurguerMenu pages={pages} nav={nav} cta={cta} />
      </nav>
    </div>
  )
}
