import React from "react";
import Post from "../blog-section/Post";
import { mockBlogSection } from "@/mock-data";

export default function HighlightedPost() {
  const post = mockBlogSection.posts[0];

  return (
    <div className="section-container pb-24 pt-12">
      <Post isHorizontal post={post} />
    </div>
  );
}
