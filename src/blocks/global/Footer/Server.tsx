import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import React from 'react'
import CompanyInfos from './CompanyInfos'
import PagesInfos from './PagesInfos'
import { Media, Page } from '@/payload-types'
import LegalInfos from './LegalInfos'

export default async function FooterServer() {
  const payload = await getPayloadHMR({ config })
  const { logo, address, phone_number, email, pages, legal_pages, socials, copyright } =
    await payload.findGlobal({ slug: 'footer' })

  const validatedSocials = (socials ?? []).map((item: any) => ({
    id: item.id ?? '',
    social_name: item.social_name ?? '',
    icon: item.icon as Media,
    link: item.link ?? '',
  }))

  return (
    <footer className="border-t border-gray">
      <div className="section-container py-20">
        <div className="flex justify-between items-start">
          <CompanyInfos
            logo={logo as Media}
            address={address}
            phoneNumber={phone_number}
            email={email}
            socials={validatedSocials}
          />

          {pages && <PagesInfos pages={pages as Page[]} />}
        </div>
      </div>
      <div className="border-t border-gray section-container">
        <LegalInfos legal_pages={legal_pages as Page[]} copyright={copyright} />
      </div>
    </footer>
  )
}
