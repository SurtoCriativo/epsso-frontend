import { useQuery } from "@tanstack/react-query";
import type { PostProps } from "../types/post";
import { getPosts } from "../services/api";

interface UsePostsResult {
  posts: PostProps[];
  totalPages: number;
}

export function usePosts(page: number) {
  return useQuery<UsePostsResult, Error>({
    queryKey: ["posts", page],
    queryFn: async () => {
      const response = await getPosts.get<PostProps[]>("/posts", {
        params: {
          per_page: 6,
          page,
          _embed: true,
        },
      });

      return {
        posts: response.data,
        totalPages: Number(response.headers["x-wp-totalpages"] ?? 1),
      };
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
