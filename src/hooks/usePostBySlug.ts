import { useQuery } from "@tanstack/react-query";
import type { PostProps } from "../types/post";
import { getPosts } from "../services/api";

export function usePostBySlug(slug: string | undefined) {
  return useQuery<PostProps, Error>({
    queryKey: ["post", slug],
    queryFn: async () => {
      if (!slug) throw new Error("Slug is required");

      const response = await getPosts.get<PostProps[]>("/posts", {
        params: {
          slug,
          _embed: true,
        },
      });

      if (!response.data || response.data.length === 0) {
        throw new Error("Post not found");
      }

      return response.data[0];
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 10, // 10 minutes
    retry: 1,
  });
}
