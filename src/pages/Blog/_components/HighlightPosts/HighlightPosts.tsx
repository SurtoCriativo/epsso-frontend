import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../../../../hooks/usePost";
import { useCategories } from "../../../../hooks/useCategories";
import { useMemo } from "react";

export default function HighlightPosts() {
  const navigate = useNavigate();
  const { data: categories } = useCategories();

  // Since you know the "Destaque" category ID is 3, use it directly
  const highlightCategoryId = useMemo(() => {
    if (!categories) return null;
    const highlightCategory = categories.find(
      (category) => category.name === "Destaque" || category.slug === "destaque"
    );
    return highlightCategory?.id || null;
  }, [categories]);

  // Fetch posts from the "Destaque" category (categoryId: 3)
  const { data: postsData, isLoading } = usePosts({
    page: 1,
    categoryId: highlightCategoryId,
    perPage: 3, // Show up to 3 highlight posts
  });

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  if (isLoading || !postsData?.posts.length) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[264px] h-[720px]"
      >
        <h1 className="text-2xl font-medium text-brand-400 pb-8">Destaques</h1>
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
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-[264px] h-[720px]"
    >
      <h1 className="text-2xl font-medium text-brand-400 pb-8">Destaques</h1>
      {postsData.posts.map((post, index) => {
        // Find a category that's not "Destaque" to display in the badge
        const displayCategory = categories?.find(
          (cat) =>
            post.categories.includes(cat.id) &&
            cat.name !== "Destaque" &&
            cat.slug !== "destaque"
        );

        return (
          <div key={post.id}>
            {/* Only show category badge if there's a non-Destaque category */}
            {displayCategory && (
              <span className="inline-block px-2 py-1 mb-2 text-[10px] leading-3 font-normal rounded bg-[#1B1F24] text-white">
                {displayCategory.name}
              </span>
            )}
            <div className="pb-2">
              <h3 className="text-base font-bold leading-6 text-[#444D5A]">
                {post.title.rendered}
              </h3>
            </div>
            <div className="flex-grow pb-2">
              <p
                className="text-xs font-normal leading-4 text-[#444D5A]"
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.rendered.substring(0, 150) + "...",
                }}
              />
            </div>
            <div className="pb-8">
              <button
                onClick={() => handlePostClick(post.slug)}
                className="cursor-pointer py-2 text-sm font-medium rounded-lg transition-colors text-green-accents-600 underline hover:text-brand-400"
              >
                Saiba mais
              </button>
            </div>
            {/* Add divider between posts, but not after the last one */}
            {index < postsData.posts.length - 1 && (
              <div className="border border-[#BDC1C6] mb-8" />
            )}
          </div>
        );
      })}
    </motion.section>
  );
}
