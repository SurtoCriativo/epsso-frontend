import { useEffect } from "react";

interface HtmlMetaDataProps {
  title: string;
  metaDescription?: string;
}

const useHtmlMetaData = ({ title, metaDescription }: HtmlMetaDataProps) => {
  useEffect(() => {
    // Store original values
    const originalTitle = document.title;
    const originalMetaContent = document
      .querySelector('meta[name="description"]')
      ?.getAttribute("content");

    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (metaDescription) {
      let meta = document.querySelector('meta[name="description"]');

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", metaDescription);
    }

    // Cleanup function to restore original values
    return () => {
      if (originalTitle) {
        document.title = originalTitle;
      }

      const meta = document.querySelector('meta[name="description"]');
      if (meta && originalMetaContent) {
        meta.setAttribute("content", originalMetaContent);
      }
    };
  }, [title, metaDescription]);
};

export default useHtmlMetaData;
