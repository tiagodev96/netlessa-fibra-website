import Image from "next/image";
import Link from "next/link";
import React from "react";

type ClientServiceCTACardProps = {
  item: {
    id: string;
    icon: { url: string };
    title: string;
    description: string;
    link: string;
  };
};

export default function ClientServiceCTACard({
  item,
}: ClientServiceCTACardProps) {
  return (
    <Link href={item.link} target="_blank">
      <div className="flex flex-col items-center gap-2 w-full min-w-[180px] max-w-[250px] rounded-[6px] bg-blue px-5 py-5 drop-shadow-sm">
        <Image src={item.icon.url} alt="" width={50} height={50} />
        <h3 className="H3 text-green text-center">{item.title}</h3>
        <p className="paragraph text-white">{item.description}</p>
      </div>
    </Link>
  );
}
