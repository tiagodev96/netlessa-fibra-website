import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import ContactImage from "./ContactImage";

type ContactSectionProps = {
  image: {
    url: string;
    alt: string;
  };
  tag: string;
  section_title: string;
  section_description: string;
};

export default function ContactSection(props: ContactSectionProps) {
  const { image, tag, section_title, section_description } = props;
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
  );
}
