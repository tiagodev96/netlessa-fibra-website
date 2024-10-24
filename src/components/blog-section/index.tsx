import BlogHeader from "./BlogHeader";
import BlogPosts from "./BlogPosts";

type RichTextField = {
  text: string;
  marks?: Array<{
    type: string;
    attrs?: Record<string, unknown>;
  }>;
  children?: RichTextField[];
};

type BlogSectionProps = {
  id: string;
  tag: string;
  title: string;
  slug: string;
  description: string;
  posts: {
    id: number;
    cover_image: {
      url: string;
      alt: string | null;
    };
    name: string;
    category: {
      name: string;
    };
    excerpt: string;
    content: RichTextField;
  }[];
};

export default function BlogSection(props: BlogSectionProps) {
  const { tag, title, description, posts } = props;

  return (
    <section>
      <div className="section-container py-24">
        <BlogHeader tag={tag} title={title} description={description} />
        <BlogPosts posts={posts} />
      </div>
    </section>
  );
}
