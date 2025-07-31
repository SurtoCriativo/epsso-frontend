import useHtmlMetaData from "../../hooks/useHtmlMetaData";
import Blog from "./_components/Blog";
import BlogHeroSection from "./_components/BlogHeroSection/BlogHeroSection";

export default function BlogPage() {
  useHtmlMetaData({
    title: "EPSSO | Blog",
    metaDescription:
      "Leia as últimas notícias e artigos do nosso blog sobre diversos temas.",
  });
  return (
    <main className="w-full">
      <BlogHeroSection />
      <Blog />
    </main>
  );
}
