import ContactForm from '@/components/ContactSection/ContactForm'
import ContactHeader from '@/components/ContactSection/ContactHeader'
import ContactImage from '@/components/ContactSection/ContactImage'

type ContactSectionBlockServerProps = {
  image: any
  tag: string
  section_title: string
  section_description: string
}

export default function ContactSectionBlockServer(props: ContactSectionBlockServerProps) {
  const { image, tag, section_title, section_description } = props
  return (
    <section className="section-container py-24">
      <div className="flex gap-20 justify-between">
        <ContactImage image={image} />

        <div className="flex flex-col flex-1 justify-between max-w-[732px] gap-10">
          <ContactHeader
            section_description={section_description}
            tag={tag}
            section_title={section_title}
          />

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
