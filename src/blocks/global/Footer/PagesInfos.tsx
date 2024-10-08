import { Page } from '@/payload-types'
import Link from 'next/link'
import React from 'react'

type PagesInfosProps = {
  pages: Page[]
}

export default function PagesInfos({ pages }: PagesInfosProps) {
  if (pages) {
    return (
      <div>
        <p className="tag mb-3">Páginas</p>
        <ul className="grid grid-cols-2 gap-y-3 gap-x-20">
          {pages.map((page) => (
            <Link key={page.id} href={page.slug}>
              <li className="paragraph">{page.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    )
  }

  return
}
