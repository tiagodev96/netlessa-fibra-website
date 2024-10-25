import {
  BlogSection,
  HeaderAboutUs,
  HistoricalLandmarks,
  OurHistory,
  OurPartners,
  OurTeam,
  OurValues,
} from "@/components";
import { mockBlogSection } from "@/mock-data";
import React from "react";

export default function AboutUsPage() {
  return (
    <div>
      <HeaderAboutUs />
      <OurHistory />
      <HistoricalLandmarks />
      <OurPartners />
      <OurValues />
      <OurTeam />
      <BlogSection {...mockBlogSection} />
    </div>
  );
}
