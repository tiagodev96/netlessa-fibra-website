import React from "react";
import ClientServiceCTACard from "../ClientServiceCTACard";

type ClientServiceCTAProps = {
  cta: {
    id: string;
    icon: { url: string };
    title: string;
    description: string;
    link: string;
  }[];
};

export default function ClientServiceCTA({ cta }: ClientServiceCTAProps) {
  return (
    <div className="flex gap-10 justify-center flex-wrap">
      {cta.map((item) => (
        <ClientServiceCTACard key={item.id} item={item} />
      ))}
    </div>
  );
}
