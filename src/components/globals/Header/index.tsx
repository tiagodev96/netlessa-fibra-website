import React from "react";
import HeaderTopContent from "./HeaderTopContent";
import HeaderBottomContent from "./HeaderBottomContent";
import { mockPages, mockProducts, mockLogo, mockHeaderCta } from "@/mock-data";

export default function Header() {
  return (
    <header>
      <HeaderTopContent />
      <HeaderBottomContent
        pages={mockPages}
        nav={mockProducts}
        logo={mockLogo}
        cta={mockHeaderCta}
      />
    </header>
  );
}
