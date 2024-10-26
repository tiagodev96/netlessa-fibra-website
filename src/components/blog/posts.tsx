"use client";

import React, { useState } from "react";
import Post from "../blog-section/Post";
import { mockBlogSection } from "@/mock-data";
import { Button } from "@/components/ui/button";

export default function Posts() {
  const { posts } = mockBlogSection;

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const uniqueCategories = Array.from(
    new Set(mockBlogSection.posts.map((post) => post.category.name))
  );

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category.name === selectedCategory)
    : posts;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderCategoryButtons = () => (
    <div className="flex mb-16 gap-4 flex-wrap">
      <Button
        onClick={() => setSelectedCategory(null)}
        variant={selectedCategory === null ? "default" : "outline"}
        className={`${selectedCategory === null ? "bg-blue text-white" : ""}`}
      >
        Todos
      </Button>
      {uniqueCategories.map((category, index) => (
        <Button
          key={index}
          onClick={() => setSelectedCategory(category)}
          variant={selectedCategory === category ? "default" : "outline"}
          className={selectedCategory === category ? "bg-blue text-white" : ""}
        >
          {category}
        </Button>
      ))}
    </div>
  );

  const renderPosts = () => {
    if (currentPosts.length > 0) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {currentPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      );
    } else {
      return <p className="paragraph text-center">Nenhum post encontrado</p>;
    }
  };

  const renderPagination = () => {
    if (totalPages > 1) {
      return (
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              variant={currentPage === index + 1 ? "outline" : "default"}
              className="mx-1"
            >
              {index + 1}
            </Button>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="section-container py-24">
      {renderCategoryButtons()}
      {renderPosts()}
      {renderPagination()}
    </section>
  );
}
