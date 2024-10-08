import BlogHeader from '@/components/BlogSection/BlogHeader'
import BlogPosts from '@/components/BlogSection/BlogPosts'
import { Media } from '@/payload-types'
import { RichTextField } from 'payload'
import React from 'react'

type BlogSectionBlockProps = {
  id: string
  tag: string
  title: string
  slug: string
  description: string
  posts: {
    id: number
    cover_image: {
      url: string
      alt: string | null
    }
    name: string
    category: {
      name: string
    }
    excerpt: string
    content: RichTextField
  }[]
}

export default function BlogSectionBlock(props: BlogSectionBlockProps) {
  const { tag, title, description, posts } = props

  return (
    <section>
      <div className="section-container py-24">
        <BlogHeader tag={tag} title={title} description={description} />
        <BlogPosts posts={posts} />
      </div>
    </section>
  )
}
