export interface PostProps {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  link: string;
  featured_media: number;
  // add other fields if you need them…
}
