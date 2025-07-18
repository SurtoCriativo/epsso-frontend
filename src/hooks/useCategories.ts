import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { getCategories } from "../services/api";
import type { CategoryProps } from "../types/post";

export function useCategories(): UseQueryResult<CategoryProps[], Error> {
  return useQuery<CategoryProps[], Error>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await getCategories.get<CategoryProps[]>("");
      return response.data;
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
    retry: 1,
  });
}
