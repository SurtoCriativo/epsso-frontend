export interface PostProps {
  id: number;
  slug: string;
  date?: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  categories: number[];
  link: string;
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url: string;
    }[];
    author?: {
      name: string;
    }[];
  };
}

export interface CategoryProps {
  id: number;
  name: string;
  slug: string;
  count: number;
  link: string;
  parent: number;
  description: string;
}
