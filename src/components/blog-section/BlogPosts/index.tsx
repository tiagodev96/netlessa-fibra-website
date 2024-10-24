import React from 'react'
import { ArrowRight } from 'lucide-react'
import Post from '../Post'
import { Button } from '@/components/ui/button'

type BlogPostsProps = {
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
  }[]
}

const BlogPosts: React.FC<BlogPostsProps> = ({ posts }) => {
  return (
    <div>
      <div className="grid gap-10 md:grid-cols-2">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <div className="flex justify-end mt-10">
        <Button className="bg-blue text-white border border-transparent hover:border-blue hover:text-blue hover:bg-transparent">
          Ver todos
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default BlogPosts
