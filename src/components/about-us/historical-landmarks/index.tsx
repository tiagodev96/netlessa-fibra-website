import React from "react";
import LeftContent from "./left-content";
import Image from "next/image";

export default function HistoricalLandmarks() {
  return (
    <section className="section-container py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
        <LeftContent />
        <Image
          src="/about-us/historical-landmarks-image.webp"
          alt=""
          width={616}
          height={640}
          className="rounded-[6px] mx-auto"
        />
      </div>
    </section>
  );
}
