import React from "react";
import {
  mockCarousel,
  mockProductsList,
  clientServiceMockup,
} from "@/mock-data";
import { Banner, ProductsSection } from "@/components";
import ClientServiceSection from "@/components/client-service";

export default function Homepage() {
  return (
    <div>
      <Banner carousel={mockCarousel} />
      <ProductsSection {...mockProductsList} />
      <ClientServiceSection {...clientServiceMockup} />
    </div>
  );
}
