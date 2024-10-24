import React from "react";
import {
  mockCarousel,
  mockProductsList,
  mockClientService,
  mockContact,
  mockTestimonials,
  mockBlogSection,
} from "@/mock-data";
import {
  Banner,
  BlogSection,
  ContactSection,
  ProductsSection,
  TestimonialsSection,
} from "@/components";
import ClientServiceSection from "@/components/client-service";

export default function Homepage() {
  return (
    <div>
      <Banner carousel={mockCarousel} />
      <ProductsSection {...mockProductsList} />
      <ClientServiceSection {...mockClientService} />
      <ContactSection {...mockContact} />
      <TestimonialsSection {...mockTestimonials} />
      <BlogSection {...mockBlogSection} />
    </div>
  );
}
