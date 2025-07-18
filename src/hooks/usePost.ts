import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import api from "../services/api";
import type { PostProps } from "../types/post";

export function usePosts(page: number): UseQueryResult<PostProps[], Error> {
  return useQuery<PostProps[], Error>({
    queryKey: ["posts", page],
    queryFn: async () => {
      const response = await api.get<PostProps[]>("/posts", {
        params: { per_page: 6, page },
      });
      return response.data;
    },
    // keepPreviousData: true, // keeps last page visible while loading next :contentReference[oaicite:3]{index=3}
    staleTime: 1000 * 60 * 5, // cache each page for 5 minutes :contentReference[oaicite:4]{index=4}
    retry: 1, // retry once on failure
    // you can also add onError, onSuccess, etc. here
  });
}
