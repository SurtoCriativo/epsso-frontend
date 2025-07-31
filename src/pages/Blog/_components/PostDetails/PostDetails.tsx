import { useParams, Link } from "react-router-dom";
import { usePostBySlug } from "../../../../hooks/usePostBySlug";
import { usePostMeta } from "../../../../hooks/usePostMeta";
import { useCategories } from "../../../../hooks/useCategories";
import SpinnerLoader from "../../../../components/SpinnerLoader";
import PageNotFound from "../../../../components/PageNotFound";
import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import HighlightPosts from "../HighlightPosts/HighlightPosts";

export default function PostDetails() {
  const { slug } = useParams();
  const { data: post, isLoading, isError } = usePostBySlug(slug);
  const { data: categories } = useCategories();
  const meta = usePostMeta(post);

  if (isLoading) return <SpinnerLoader message="Carregando..." />;
  if (isError || !post) return <PageNotFound />;

  // Get category objects for this post
  const postCategories = post.categories
    .map((catId) => categories?.find((cat) => cat.id === catId))
    .filter(Boolean);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-[1128px] mx-auto py-4 px-4"
    >
      {/* Back to Blog Link */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-green-accents-600 hover:text-green-accents-700 transition-colors pb-4 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Voltar ao Blog</span>
      </Link>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[570px_1fr] gap-32 pt-8">
        {/* Left Column - Post Content */}
        <section>
          <header>
            {/* Categories */}
            {postCategories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {postCategories.map((category) => (
                  <div
                    key={category?.id}
                    className="bg-[#1B1F24] inline-block p-2 text-[10px] leading-3 font-normal rounded"
                  >
                    <span className="text-[10px] font-normal text-white leading-3 tracking-wide">
                      {category?.name}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Title */}
            <h1
              className="text-2xl lg:text-2xl font-medium text-[#1B1F24] mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#9CA3AF] pb-8">
              <div className="flex items-center gap-2 text-sm">
                <CalendarDays className="w-4 h-4" />
                <time dateTime={post.date}>{meta?.formattedDate}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{meta?.readingTime} min de leitura</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {meta?.featuredImage && (
            <div className="mb-8 overflow-hidden rounded-t-2xl shadow-lg">
              <img
                src={meta.featuredImage}
                alt={post.title.rendered}
                className="w-full h-auto object-cover text-[#444D5A]"
              />
            </div>
          )}

          {/* Post Content */}
          <div
            className="pb-[120px] text-[#444D5A] prose prose-lg prose-neutral max-w-none
            prose-headings:font-bold prose-headings:text-neutral-900
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-green-accents-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-neutral-900 prose-strong:font-semibold
            prose-ul:my-6 prose-li:my-2
            prose-blockquote:border-l-4 prose-blockquote:border-green-accents-400 
            prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-neutral-600
            prose-img:rounded-lg prose-img:shadow-md prose-img:my-8
            [&_.wp-block-heading]:text-green-accents-700 [&_.wp-block-heading]:font-semibold
            [&_.wp-block-heading]:relative
            [&_.wp-block-heading]:text-[16px]
            [&_.wp-block-heading]:before:text-[16px]
            [&_.wp-block-heading]:before:content-[''] [&_.wp-block-heading]:before:absolute
            [&_.wp-block-heading]:before:left-0 [&_.wp-block-heading]:before:top-1/2
            [&_.wp-block-heading]:before:-translate-y-1/2 [&_.wp-block-heading]:before:w-1
            [&_.wp-block-heading]:before:h-8
            [&_.wp-block-heading]:before:rounded-full
            [&_.wp-block-heading]:before:py-4
            [&_.wp-block-heading]:py-4
            [&_.wp-block-list]:list-none [&_.wp-block-list]:pl-4
            [&_.wp-block-list_li]:relative [&_.wp-block-list_li]:pl-3
            [&_.wp-block-list_li]:my-3
            [&_.wp-block-list_li]:flex
            [&_.wp-block-list_li]:items-center
            [&_.wp-block-list_li]:before:content-[''] [&_.wp-block-list_li]:before:absolute
            [&_.wp-block-list_li]:before:left-0 [&_.wp-block-list_li]:before:top-[0.6em]
            [&_.wp-block-list_li]:before:w-1 [&_.wp-block-list_li]:before:h-1
            [&_.wp-block-list_li]:before:bg-black [&_.wp-block-list_li]:before:rounded-full"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </section>

        {/* Right Column - Highlight Posts */}
        <aside className="hidden md:block pb-[120px]  lg:sticky lg:top-4 lg:h-fit">
          <HighlightPosts />
        </aside>
      </div>
    </motion.article>
  );
}
