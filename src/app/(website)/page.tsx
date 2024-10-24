import React from "react";
import {
  mockCarousel,
  mockProductsList,
  mockClientService,
  mockContact,
} from "@/mock-data";
import { Banner, ContactSection, ProductsSection } from "@/components";
import ClientServiceSection from "@/components/client-service";

export default function Homepage() {
  return (
    <div>
      <Banner carousel={mockCarousel} />
      <ProductsSection {...mockProductsList} />
      <ClientServiceSection {...mockClientService} />
      <ContactSection {...mockContact} />
    </div>
  );
}
