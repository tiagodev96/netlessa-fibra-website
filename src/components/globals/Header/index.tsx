"use client";
import React from "react";
import HeaderTopContent from "./HeaderTopContent";
import HeaderBottomContent from "./HeaderBottomContent";
import { mockPages, mockLogo, mockHeaderCta } from "@/mock-data";
import { usePathname } from "next/navigation";

export default function Header() {
  const router = usePathname();
  const isCompany = router.startsWith("/grupo-lessa");

  return (
    <header>
      <HeaderTopContent />
      <HeaderBottomContent
        pages={mockPages}
        logo={mockLogo}
        cta={mockHeaderCta}
        isCompany={isCompany}
      />
    </header>
  );
}
