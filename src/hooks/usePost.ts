import { useQuery } from "@tanstack/react-query";
import type { PostProps } from "../types/post";
import { getPosts } from "../services/api";

interface UsePostsResultProps {
  posts: PostProps[];
  totalPages: number;
}

interface UsePostsParamsProps {
  page: number;
  categoryId?: number | null;
  perPage?: number;
}

export function usePosts({
  page,
  categoryId,
  perPage = 6,
}: UsePostsParamsProps) {
  return useQuery<UsePostsResultProps, Error>({
    queryKey: ["posts", page, categoryId, perPage],
    queryFn: async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const params: any = {
        per_page: perPage,
        page,
        _embed: true,
      };

      // Add category filter to API request if selected
      if (categoryId) {
        params.categories = categoryId;
      }

      const response = await getPosts.get<PostProps[]>("/posts", { params });

      return {
        posts: response.data,
        totalPages: Number(response.headers["x-wp-totalpages"] ?? 1),
      };
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
