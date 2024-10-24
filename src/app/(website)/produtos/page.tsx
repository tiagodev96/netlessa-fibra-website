import { Banner, BlogSection } from "@/components";
import ProductPlans from "@/components/product-plans";
import { mockBlogSection, mockCarousel, mockProductsPage } from "@/mock-data";
import React from "react";

export default function ProdutosPage() {
  return (
    <div>
      <Banner carousel={mockCarousel} />
      <ProductPlans products={mockProductsPage} />
      <BlogSection {...mockBlogSection} />
    </div>
  );
}
