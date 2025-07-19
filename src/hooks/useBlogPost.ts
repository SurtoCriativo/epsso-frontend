import { useMemo } from "react";
import type { PostProps, CategoryProps } from "../types/post";

interface UseBlogPostParamsProps {
  post: PostProps;
  categories?: CategoryProps[];
  excludeCategoryId?: number;
}

export function useBlogPost({
  post,
  categories,
  excludeCategoryId = 3,
}: UseBlogPostParamsProps) {
  const categoryInfo = useMemo(() => {
    const validCategoryId = post.categories.find(
      (id) => id !== excludeCategoryId
    );
    const categoryName =
      categories?.find((category) => category.id === validCategoryId)?.name ??
      "Sem categoria";
    return { validCategoryId, categoryName };
  }, [post.categories, categories, excludeCategoryId]);

  const imageUrl =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/fallback.jpg";

  return {
    categoryInfo,
    imageUrl,
  };
}
