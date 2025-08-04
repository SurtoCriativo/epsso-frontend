import { useState, useMemo } from "react";
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
  const { data, isLoading, isError } = usePosts({
    page,
    categoryId: selectedCategoryId,
  });
  const { categories } = useFilteredCategories([1, 3]); // Exclude "Destaque" and "Uncategorized"
  const stripHtml = useStripHtml();

  const posts = useMemo(() => data?.posts ?? [], [data]);
  const totalPages = data?.totalPages ?? 1;

  if (isLoading) return <SpinnerLoader message="Carregando..." />;
  if (isError) return <PageNotFound />;

  return (
    <motion.section
      aria-labelledby="blog-heading"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-[1128px] flex flex-col mx-auto py-4"
    >
      <CategoryFilter
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onChange={(e) => {
          const value = Number(e.target.value);
          setSelectedCategoryId(value === 0 ? null : value);
          setPage(1);
        }}
      />

      <div className="flex gap-8">
        <div className="flex-1">
          {posts.length > 0 ? (
            <>
              <h1
                id="blog-heading"
                className="text-center md:text-start text-2xl font-medium text-brand-400 pb-9"
              >
                Últimas notícias
              </h1>
              <ul
                role="list"
                className="mx-auto grid justify-center [grid-template-columns:264px] sm:[grid-template-columns:repeat(3,264px)] grid-rows-2 gap-4"
              >
                {posts.map((post) => (
                  <li key={post.id}>
                    <BlogPostCard
                      post={post}
                      categories={categories}
                      stripHtml={stripHtml}
                    />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <h1 className="text-xl font-medium text-gray-600 pb-9">
              Nenhum post ainda foi adicionado ao blog...
            </h1>
          )}
        </div>

        <aside className="hidden md:block">
          <HighlightPosts />
        </aside>
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </motion.section>
  );
}
