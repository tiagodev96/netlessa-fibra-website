"use client";

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
import { usePathname } from "next/navigation";

type Page = {
  id: string;
  slug: string;
  name: string;
};

export default function Footer() {
  const { logo, address, phone_number, email, socials } = mockCompanyInfos;
  const router = usePathname();
  const isCompany = router.startsWith("/grupo-lessa");

  const phone = isCompany ? "(71) 9 9645-5433" : phone_number;
  const emailText = isCompany ? "lessa@netlessafibra.com.br" : email;

  return (
    <footer className="border-t border-gray">
      <div className="section-container py-20">
        <div className="flex justify-between items-start flex-wrap gap-8">
          <CompanyInfos
            logo={logo}
            address={address}
            phoneNumber={phone}
            email={emailText}
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
