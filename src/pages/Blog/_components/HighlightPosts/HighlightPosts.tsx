import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../../../../hooks/usePost";
import { useCategories } from "../../../../hooks/useCategories";

export default function HighlightPosts() {
  const navigate = useNavigate();
  const { data: categories } = useCategories();

  const highlightCategoryId = React.useMemo(() => {
    if (!categories) return null;
    const highlight = categories.find(
      (cat) => cat.name === "Destaque" || cat.slug === "destaque"
    );
    return highlight?.id || null;
  }, [categories]);

  const { data: postsData, isLoading } = usePosts({
    page: 1,
    categoryId: highlightCategoryId,
    perPage: 3,
  });

  if (isLoading || !postsData?.posts.length) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[264px] h-[720px]"
      >
        <h2 className="text-2xl font-medium text-brand-400 pb-8">Destaques</h2>
        {isLoading ? (
          <p className="text-sm text-gray-600">Carregando destaques...</p>
        ) : (
          <p className="text-sm text-gray-600">
            Nenhum destaque disponível no momento.
          </p>
        )}
      </motion.section>
    );
  }

  return (
    <nav aria-label="Destaques">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[264px] h-[720px]"
      >
        <h2 className="text-2xl font-medium text-brand-400 pb-8">Destaques</h2>
        <ul role="list" className="space-y-8">
          {postsData.posts.map((post, index) => {
            const displayCategory = categories?.find(
              (cat) =>
                post.categories.includes(cat.id) &&
                cat.name !== "Destaque" &&
                cat.slug !== "destaque"
            );
            return (
              <li key={post.id}>
                {displayCategory && (
                  <span className="inline-block px-2 py-1 mb-2 text-[10px] leading-3 font-normal rounded bg-[#1B1F24] text-white">
                    {displayCategory.name}
                  </span>
                )}
                <h1 className="text-base font-bold leading-6 text-[#444D5A] mb-2">
                  {post.title.rendered}
                </h1>
                <p
                  className="text-xs font-normal leading-4 text-[#444D5A] mb-2"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.rendered.substring(0, 150) + "...",
                  }}
                />
                <button
                  type="button"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className="cursor-pointer py-2 text-sm font-medium rounded-lg transition-colors text-green-accents-600 underline hover:text-brand-400"
                >
                  Saiba mais
                </button>
                {index < postsData.posts.length - 1 && (
                  <div className="border border-[#BDC1C6] mt-8" />
                )}
              </li>
            );
          })}
        </ul>
      </motion.section>
    </nav>
  );
}
