/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useBlogPost } from "../../../../hooks/useBlogPost";
import { BlogCard } from "../BlogCard";

export interface BlogPostCardProps {
  post: any;
  categories: any[];
  stripHtml: (html: string) => string;
}

export default function BlogPostCard({
  post,
  categories,
  stripHtml,
}: BlogPostCardProps) {
  const { categoryInfo, imageUrl } = useBlogPost({ post, categories });

  return (
    <BlogCard>
      <BlogCard.Image>
        <img src={imageUrl} alt={post.title.rendered} />
      </BlogCard.Image>
      <BlogCard.Badge>{categoryInfo.categoryName}</BlogCard.Badge>
      <BlogCard.Title>{post.title.rendered}</BlogCard.Title>
      <BlogCard.Content>{stripHtml(post.content.rendered)}</BlogCard.Content>
      <Link to={`/blog/${post.slug}`}>
        <BlogCard.Button>Saiba Mais</BlogCard.Button>
      </Link>
    </BlogCard>
  );
}
