import React from "react";
import LeftContent from "./left-content";
import RightContent from "./right-content";
import Image from "next/image";

export default function OurHistory() {
  return (
    <section className="section-container py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
        <LeftContent />
        <RightContent />
      </div>

      <Image
        src="/about-us/our-history-image.webp"
        alt=""
        width={2000}
        height={700}
        className="rounded-[6px]"
      />
    </section>
  );
}
