import { useMemo } from "react";
import type { PostProps } from "../types/post";
import { useCategories } from "./useCategories";

export function usePostMeta(post: PostProps | undefined) {
  const { data: categories } = useCategories();

  const meta = useMemo(() => {
    if (!post) return null;

    // Get author name
    const authorName =
      post._embedded?.author?.[0]?.name || "Autor desconhecido";

    // Get category names
    const categoryNames = post.categories
      .map((catId) => categories?.find((cat) => cat.id === catId)?.name)
      .filter(Boolean)
      .join(", ");

    // Format date
    const postDate = new Date(post.date || Date.now());
    const formattedDate = new Intl.DateTimeFormat("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(postDate);

    // Get featured image
    const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

    // Calculate reading time (rough estimate: 200 words per minute)
    const wordCount = post.content.rendered.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return {
      authorName,
      categoryNames,
      formattedDate,
      featuredImage,
      readingTime,
    };
  }, [post, categories]);

  return meta;
}
