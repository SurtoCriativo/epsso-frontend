import { useState } from "react";
import { usePosts } from "../../../hooks/usePost";
import { useFilteredCategories } from "../../../hooks/useFilteredCategories";
import SpinnerLoader from "../../../components/SpinnerLoader";
import { motion } from "framer-motion";
import PageNotFound from "../../../components/PageNotFound";
import { useStripHtml } from "../../../hooks/useStripHtml";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import BlogPostCard from "./BlogPostCard/BlogPostCard";
import Pagination from "./Pagination/Pagination";
import HighlightPosts from "./HighlightPosts/HighlightPosts";

export default function Blog() {
  const [page, setPage] = useState(1);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  // Custom hooks
  const { data, isLoading, isError } = usePosts({
    page,
    categoryId: selectedCategoryId,
  });
  const { categories } = useFilteredCategories([1, 3]); // Exclude "Destaque" (id: 3) and "Uncategorized" (id: 1)"
  const stripHtml = useStripHtml();

  const posts = data?.posts ?? [];
  const totalPages = data?.totalPages ?? 1;

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    setSelectedCategoryId(value === 0 ? null : value);
    setPage(1); // Reset to first page when category changes
  };

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  if (isLoading) return <SpinnerLoader message="Carregando..." />;
  if (isError) return <PageNotFound />;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-[1128px] lg:flex flex-col max-w-7xl mx-auto py-4"
    >
      <CategoryFilter
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onChange={handleCategoryChange}
      />

      {/* Main content area with grid layout */}
      <div className="flex gap-8">
        {/* Left side - Últimas notícias */}
        <div className="flex-1">
          <h1 className="text-2xl font-medium text-brand-400 pb-9">
            Últimas notícias
          </h1>
          <div className="grid justify-start [grid-template-columns:264px] sm:[grid-template-columns:repeat(3,264px)] grid-rows-2 gap-4">
            {posts.map((post) => (
              <BlogPostCard
                key={post.id}
                post={post}
                categories={categories}
                stripHtml={stripHtml}
              />
            ))}
          </div>
        </div>

        {/* Right side - Destaques */}
        <div className="hidden lg:block">
          <HighlightPosts />
        </div>
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </motion.section>
  );
}
