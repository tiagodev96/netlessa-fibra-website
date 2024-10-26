import { BlogContact, BlogHeader, HighlightedPost, Posts } from "@/components";
import React from "react";

export default function BlogPage() {
  return (
    <div>
      <BlogHeader />
      <HighlightedPost />
      <Posts />
      <BlogContact />
    </div>
  );
}
