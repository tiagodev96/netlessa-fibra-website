import Link from "next/link";
import React, { FC } from "react";

type Page = {
  id: string;
  slug: string;
  name: string;
};

type LegalInfosProps = {
  copyright: string;
  legal_pages: Page[];
};

const LegalInfos: FC<LegalInfosProps> = ({ copyright, legal_pages }) => {
  return (
    <div className="flex justify-between py-8">
      <p>{copyright}</p>

      {legal_pages && (
        <div className="flex gap-6">
          {legal_pages.map((page) => (
            <Link key={page.id} href={page.slug}>
              {page.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LegalInfos;
