import ClientServiceGridCTA from '@/components/ClientServiceSection/ClientServiceGridCTA'
import ClientServiceHeader from '@/components/ClientServiceSection/ClientServiceHeader'
import Image from 'next/image'

type ClientServiceSectionBlockServerProps = {
  id: string
  tag: string
  section_title: string
  section_description: string
  cta: {
    id: string
    icon: any
    title: string
    description: string
    link: string
  }[]
}

export default function ClientServiceSectionBlock(props: ClientServiceSectionBlockServerProps) {
  const { tag, section_title, section_description, cta } = props

  return (
    <section>
      <div className="w-full relative h-full">
        <Image src={require('@/assets/images/client-service-polygon.svg')} alt="" />
      </div>

      <div className="bg-green">
        <div className="section-container py-24 flex flex-col gap-10">
          <ClientServiceHeader
            tag={tag}
            section_title={section_title}
            section_description={section_description}
          />
          <ClientServiceGridCTA cta={cta} />
        </div>
      </div>
    </section>
  )
}
