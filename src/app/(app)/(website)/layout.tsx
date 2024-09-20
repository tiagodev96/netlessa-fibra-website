import FooterServer from '@/blocks/global/Footer/Server'
import HeaderServer from '@/blocks/global/Header/Server'
import { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white">
      <HeaderServer />
      {children}
      <FooterServer />
    </div>
  )
}
