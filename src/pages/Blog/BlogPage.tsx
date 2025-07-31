import Blog from "./_components/Blog";
import BlogHeroSection from "./_components/BlogHeroSection/BlogHeroSection";

export default function BlogPage() {
  return (
    <main className="w-full">
      <BlogHeroSection />
      <Blog />
    </main>
  );
}
