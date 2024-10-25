import Image from "next/image";
import LeftContent from "./left-content";

export default function FormContactSection() {
  return (
    <section className="section-container py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <LeftContent />

        <div className="flex justify-center md:justify-end">
          <Image
            src="/contact-us/contact-us-section-image.webp"
            alt=""
            width={600}
            height={600}
            className="rounded-[6px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
