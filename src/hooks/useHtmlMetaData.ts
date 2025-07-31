import { useEffect } from "react";

interface HtmlMetaDataProps {
  title: string;
  metaDescription?: string;
}

const useHtmlMetaData = ({ title, metaDescription }: HtmlMetaDataProps) => {
  useEffect(() => {
    // Store original values
    const originalTitle = document.title;
    const metaDescriptionElement = document.querySelector(
      'meta[name="description"]'
    );
    const originalMetaContent =
      metaDescriptionElement?.getAttribute("content") || "";

    // Update document title
    if (title) {
      document.title = title;
    }

    // Update or create meta description
    if (metaDescription) {
      let meta = document.querySelector(
        'meta[name="description"]'
      ) as HTMLMetaElement;

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
      if (meta) {
        if (originalMetaContent) {
          meta.setAttribute("content", originalMetaContent);
        } else {
          // If there was no original meta description, remove the one we created
          meta.remove();
        }
      }
    };
  }, [title, metaDescription]);
};

export default useHtmlMetaData;
