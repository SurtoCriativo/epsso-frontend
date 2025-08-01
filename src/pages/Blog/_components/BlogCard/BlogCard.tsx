/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import type {
  BlogCardProps,
  BlogCardImageProps,
  BlogCardBadgeProps,
  BlogCardTitleProps,
  BlogCardContentProps,
  BlogCardButtonProps,
  BlogCardCompositionProps,
} from "./BlogCard.config";
import { badgeVariants, buttonVariants } from "./BlogCard.config";

// 1. Main BlogCard component (no statics yet)
const BlogCardComponent: React.FC<BlogCardProps> = memo(
  ({ children, className }) => (
    <div
      className={`w-[264px] h-[420px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col ${
        className || ""
      }`}
    >
      {children}
    </div>
  )
);

// 2. Sub-components
const BlogCardImage: React.FC<BlogCardImageProps> = memo(
  ({ children, alt, className }) => (
    <div
      className={`w-[264px] h-[160px] overflow-hidden flex-shrink-0 ${
        className || ""
      }`}
    >
      {React.isValidElement(children) && children.type === "img"
        ? React.cloneElement(children as React.ReactElement<any>, {
            className: "w-full h-full object-cover",
            alt: alt || "Blog image",
            loading: "lazy",
            decoding: "async",
            width: 264,
            height: 160,
          })
        : children}
    </div>
  )
);

const BlogCardBadge: React.FC<BlogCardBadgeProps> = memo(
  ({ children, variant = "primary", className }) => (
    <div className="px-4 pt-4 absolute mt-32">
      <span
        className={`inline-block px-2 py-1 text-[10px] leading-3 font-normal rounded ${
          badgeVariants[variant]
        } ${className || ""}`}
      >
        {children}
      </span>
    </div>
  )
);

const BlogCardTitle: React.FC<BlogCardTitleProps> = memo(
  ({ children, className, maxLength = 80, id }) => {
    const title = children?.toString() || "";
    const shouldTruncate = title.length >= maxLength;
    const displayTitle = shouldTruncate
      ? `${title.substring(0, maxLength - 4)}...`
      : title;

    return (
      <div id={id} className="px-4 py-6">
        <h1
          className={`text-base font-bold leading-6 text-neutral-700 ${
            className || ""
          }`}
          title={shouldTruncate ? title : undefined}
        >
          {displayTitle}
        </h1>
      </div>
    );
  }
);

const BlogCardContent: React.FC<BlogCardContentProps> = memo(
  ({ children, className, maxLength = 170 }) => {
    const content = children?.toString() || "";
    const shouldTruncate = content.length >= maxLength;
    const displayContent = shouldTruncate
      ? `${content.substring(0, maxLength - 3)}...`
      : content;

    return (
      <div className="px-4 flex-grow">
        <p
          className={`text-xs font-normal leading-4 text-gray-600 ${
            className || ""
          }`}
        >
          {displayContent}
        </p>
      </div>
    );
  }
);

const BlogCardButton: React.FC<BlogCardButtonProps> = memo(
  ({ children, onClick, variant = "primary", disabled = false, className }) => (
    <div className="pb-6 mt-auto">
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`cursor-pointer py-2 px-4 text-sm font-medium rounded-lg transition-colors ${
          buttonVariants[variant]
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${
          className || ""
        }`}
      >
        {children}
      </button>
    </div>
  )
);

// 3. Merge and assert the combined type
const BlogCard = Object.assign(BlogCardComponent, {
  Image: BlogCardImage,
  Badge: BlogCardBadge,
  Title: BlogCardTitle,
  Content: BlogCardContent,
  Button: BlogCardButton,
}) as React.FC<BlogCardProps> & BlogCardCompositionProps;

export default BlogCard;
