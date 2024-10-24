import Image from "next/image";
import ClientServiceHeader from "./ClientServiceHeader";
import ClientServiceCTA from "./ClientServiceCTA";

type ClientServiceProps = {
  id: string;
  tag: string;
  section_title: string;
  section_description: string;
  cta: {
    id: string;
    icon: {
      url: string;
    };
    title: string;
    description: string;
    link: string;
  }[];
};

export default function ClientServiceSection(props: ClientServiceProps) {
  const { tag, section_title, section_description, cta } = props;

  return (
    <section>
      <div className="w-full relative h-full">
        <Image
          src={"/client-service-polygon.svg"}
          alt=""
          width={2000}
          height={300}
        />
      </div>

      <div className="bg-green">
        <div className="section-container py-24 flex flex-col gap-10">
          <ClientServiceHeader
            tag={tag}
            section_title={section_title}
            section_description={section_description}
          />
          <ClientServiceCTA cta={cta} />
        </div>
      </div>
    </section>
  );
}
