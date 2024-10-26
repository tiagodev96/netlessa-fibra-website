import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type PostProps = {
  post: {
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
  };
  isHorizontal?: boolean;
};

const Post: React.FC<PostProps> = ({ post, isHorizontal }) => {
  const containerClass = isHorizontal
    ? "flex-col space-y-4 lg:flex-row lg:space-x-4 lg:items-center"
    : "flex-col space-y-4";

  return (
    <div className={`flex ${containerClass}`}>
      <Image
        src={post.cover_image.url}
        alt={post.cover_image.alt || post.name}
        width={600}
        height={400}
        className={`object-cover w-full h-[300px] rounded-[6px] ${
          isHorizontal && "max-w-[632px]"
        }`}
      />
      <div className="space-y-2">
        <div className="flex items-center">
          <span className="text-sm font-medium px-2 py-1 rounded bg-blue text-white">
            {post.category.name}
          </span>
        </div>
        <h4 className="H3 text-blue font-bold">{post.name}</h4>
        <p className="paragraph text-muted-foreground">{post.excerpt}</p>
        <Button variant="link" className="p-0 h-auto font-semibold">
          Ler mais
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Post;
