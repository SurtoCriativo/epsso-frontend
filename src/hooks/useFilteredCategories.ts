import { useMemo } from "react";
import { useCategories } from "./useCategories";

export function useFilteredCategories(excludeIds: number[] = []) {
  const { data: categories, isLoading, isError } = useCategories();

  const filteredCategories = useMemo(() => {
    if (!categories) return [];
    return categories.filter((category) => !excludeIds.includes(category.id));
  }, [categories, excludeIds]);

  return { categories: filteredCategories, isLoading, isError };
}
