import React from "react";
import CompanyInfos from "./CompanyInfos";
import PagesInfos from "./PagesInfos";
import LegalInfos from "./LegalInfos";
import {
  mockCompanyInfos,
  mockPagesFooter,
  mockLegalPages,
  mockCopyright,
} from "@/mock-data";

type Page = {
  id: string;
  slug: string;
  name: string;
};

export default async function Footer() {
  const { logo, address, phone_number, email, socials } = mockCompanyInfos;

  return (
    <footer className="border-t border-gray">
      <div className="section-container py-20">
        <div className="flex justify-between items-start flex-wrap gap-8">
          <CompanyInfos
            logo={logo}
            address={address}
            phoneNumber={phone_number}
            email={email}
            socials={socials}
          />

          {mockPagesFooter && <PagesInfos pages={mockPagesFooter as Page[]} />}
        </div>
      </div>
      <div className="border-t border-gray section-container">
        <LegalInfos
          legal_pages={mockLegalPages as Page[]}
          copyright={mockCopyright}
        />
      </div>
    </footer>
  );
}
