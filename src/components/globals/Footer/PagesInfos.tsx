import Link from "next/link";
import React from "react";

type Page = {
  id: string;
  slug: string;
  name: string;
};

type PagesInfosProps = {
  pages: Page[];
};

export default function PagesInfos({ pages }: PagesInfosProps) {
  if (pages) {
    return (
      <div>
        <p className="tag mb-3">Páginas</p>
        <ul className="grid grid-cols-2 gap-y-3 gap-x-20">
          {pages.map((page) => (
            <Link key={page.id} href={page.slug}>
              <li className="paragraph hover:-translate-y-0.5 transition-all duration-150">
                {page.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }

  return;
}
