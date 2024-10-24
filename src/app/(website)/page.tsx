import React from "react";
import { mockCarousel, mockProductsList } from "@/mock-data";
import { Banner, ProductsSection } from "@/components";

export default function Homepage() {
  return (
    <div>
      <Banner carousel={mockCarousel} />
      <ProductsSection {...mockProductsList} />
    </div>
  );
}
