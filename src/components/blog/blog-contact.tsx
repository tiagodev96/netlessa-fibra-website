import React from "react";
import Image from "next/image";
import LeftContent from "./blog-contact/left-content";

export default function BlogContact() {
  return (
    <section className="section-container py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <LeftContent />

        <Image
          src="/contact-us-blog.webp"
          alt=""
          width={616}
          height={400}
          className="w-full rounded-[6px]"
        />
      </div>
    </section>
  );
}
