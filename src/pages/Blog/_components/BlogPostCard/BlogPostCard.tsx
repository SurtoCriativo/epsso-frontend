/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useBlogPost } from "../../../../hooks/useBlogPost";
import { BlogCard } from "../BlogCard";

export interface BlogPostCardProps {
  post: any;
  categories: any[];
  stripHtml: (html: string) => string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  post,
  categories,
  stripHtml,
}) => {
  const { categoryInfo, imageUrl } = useBlogPost({ post, categories });

  return (
    <article className="group" aria-labelledby={`post-title-${post.id}`}>
      <BlogCard>
        <BlogCard.Image>
          <img src={imageUrl} alt={post.title.rendered} />
        </BlogCard.Image>
        <BlogCard.Badge>{categoryInfo.categoryName}</BlogCard.Badge>
        <BlogCard.Title id={`post-title-${post.id}`}>
          {post.title.rendered}
        </BlogCard.Title>
        <BlogCard.Content>{stripHtml(post.content.rendered)}</BlogCard.Content>
        <Link to={`/blog/${post.slug}`}>
          <BlogCard.Button>Saiba Mais</BlogCard.Button>
        </Link>
      </BlogCard>
    </article>
  );
};

export default memo(BlogPostCard);
