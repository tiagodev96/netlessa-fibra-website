import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import config from '@payload-config'
import { Media } from '@/payload-types'
import HeaderBottomContent from './HeaderBottomContent'
import HeaderTopContent from './HeaderTopContent'

export default async function HeaderServer() {
  const payload = await getPayloadHMR({ config })
  const { logo, nav, cta } = await payload.findGlobal({ slug: 'header' })
  const pages = await payload.find({
    collection: 'pages',
  })
  const validNav = (nav ?? []).map((item: any) => ({
    id: item.id ?? '',
    label: item.label ?? '',
    link: item.link ?? '',
    icon: item.icon as Media,
  }))

  return (
    <header>
      <HeaderTopContent />
      <HeaderBottomContent logo={logo as Media} nav={validNav} cta={cta} pages={pages.docs} />
    </header>
  )
}
