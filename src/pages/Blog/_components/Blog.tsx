import { useState } from "react";
import { usePosts } from "../../../hooks/usePost";
import SpinnerLoader from "../../../components/SpinnerLoader";
import { BlogCard } from "./BlogCard";
import { useCategories } from "../../../hooks/useCategories";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageNotFound from "../../../components/PageNotFound";

export default function Blog() {
  const [page, setPage] = useState(1);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const { data, isLoading, isError } = usePosts(page);
  const { data: categories } = useCategories();

  const posts = data?.posts ?? [];
  const totalPages = data?.totalPages ?? 1;

  function stripHtml(html: string) {
    const temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || "";
  }

  if (isLoading) return <SpinnerLoader message="Carregando..." />;
  if (isError) return <PageNotFound />;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-[1128px] hidden lg:flex flex-col max-w-7xl mx-auto py-4"
    >
      <div className="flex justify-center items-center pt-8 pb-12">
        <label
          htmlFor="category"
          className="block text-[20px] font-medium leading-7"
        >
          Leia sobre:
        </label>
        <select
          id="category"
          onChange={(e) => {
            const value = Number(e.target.value);
            setSelectedCategoryId(value === 0 ? null : value);
          }}
          className="px-2 py-1 text-[20px] underline cursor-pointer text-green-accents-400 font-medium leading-7"
        >
          <option value={0} className="text-neutral-800 bg-white">
            Todas as categorias
          </option>
          {categories
            ?.filter((category) => category.id !== 3) // exclude Destaque
            .map((category) => (
              <option
                key={category.id}
                value={category.id}
                className="text-neutral-800 bg-white"
              >
                {category.name}
              </option>
            ))}
        </select>
      </div>
      <h1 className="text-2xl font-medium text-brand-400 pb-9">
        Últimas notícias
      </h1>
      <div className="grid justify-start [grid-template-columns:264px] sm:[grid-template-columns:repeat(3,264px)] grid-rows-2 gap-4">
        {posts!
          .filter((post) =>
            selectedCategoryId
              ? post.categories.includes(selectedCategoryId)
              : true
          )
          .map((post) => {
            const validCategoryId = post.categories.find((id) => id !== 3);
            const categoryName =
              categories?.find((category) => category.id === validCategoryId)
                ?.name ?? "Sem categoria";
            const imageUrl =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

            return (
              <BlogCard key={post.id}>
                <BlogCard.Image>
                  <img
                    src={imageUrl || "/fallback.jpg"}
                    alt={post.title.rendered}
                  />
                </BlogCard.Image>
                <BlogCard.Badge>{categoryName}</BlogCard.Badge>
                <BlogCard.Title>{post.title.rendered}</BlogCard.Title>
                <BlogCard.Content>
                  {stripHtml(post.content.rendered)}
                </BlogCard.Content>
                <Link to={`/blog/${post.slug}`}>
                  <BlogCard.Button>Saiba Mais</BlogCard.Button>
                </Link>
              </BlogCard>
            );
          })}
      </div>
      <div className="flex justify-center gap-1 pt-[72px] pb-[54px]">
        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              className={`w-8 h-8 cursor-pointer rounded-full flex items-center justify-center text-[12px] font-medium shadow ${
                pageNumber === page
                  ? "bg-brand-500 text-white hover:bg-brand-700"
                  : "bg-white text-green-accents-600 hover:bg-brand-500 hover:text-white"
              }`}
            >
              {pageNumber}
            </button>
          )
        )}

        {totalPages > 5 && (
          <span className="w-8 h-8 flex items-center justify-center text-[12px] font-medium text-green-accents-600">
            ...
          </span>
        )}
      </div>
    </motion.section>
  );
}
