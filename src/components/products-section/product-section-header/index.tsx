import Button from "@/components/globals/Button";
import React from "react";

type ProductSectionHeaderProps = {
  tag: string;
  section_title: string;
  section_description: string;
  cta: {
    id: string;
    text: string;
    link: string;
  }[];
};

export default function ProductSectionHeader({
  tag,
  section_title,
  section_description,
  cta,
}: ProductSectionHeaderProps) {
  return (
    <header className="flex justify-between items-start sm:items-end flex-col sm:flex-row gap-8">
      <div className="flex flex-col gap-2">
        <p className="tag">{tag}</p>
        <h2 className="section-title mb-2">{section_title}</h2>
        <h2 className="paragraph">{section_description}</h2>
      </div>
      <div className="flex gap-2">
        {cta.map((cta, index) => (
          <Button key={index} link={cta.link}>
            {cta.text}
          </Button>
        ))}
      </div>
    </header>
  );
}
