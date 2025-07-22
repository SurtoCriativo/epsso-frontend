import React from "react";
import {
  type BlogCardProps,
  type BlogCardImageProps,
  type BlogCardBadgeProps,
  type BlogCardTitleProps,
  type BlogCardContentProps,
  type BlogCardButtonProps,
  badgeVariants,
  buttonVariants,
} from "./BlogCard.config";

// Main BlogCard component
const BlogCard = ({ children, className }: BlogCardProps) => {
  return (
    <div
      className={`w-[264px] h-[420px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

// BlogCard.Image component
const BlogCardImage = ({ children, alt, className }: BlogCardImageProps) => {
  return (
    <div
      className={`w-[264px] h-[160px] overflow-hidden flex-shrink-0 ${
        className || ""
      }`}
    >
      {React.isValidElement(children) && children.type === "img"
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          React.cloneElement(children as React.ReactElement<any>, {
            className: "w-full h-full object-cover",
            alt: alt || "Blog image",
            loading: "eager",
            fetchpriority: "high",
            decoding: "async",
            width: 264,
            height: 160,
          })
        : children}
    </div>
  );
};

// BlogCard.Badge component
const BlogCardBadge = ({
  children,
  variant = "primary",
  className,
}: BlogCardBadgeProps) => {
  return (
    <div className="px-4 pt-4 absolute mt-32">
      <span
        className={`inline-block px-2 py-1 text-[10px] leading-3 font-normal rounded ${
          badgeVariants[variant]
        } ${className || ""}`}
      >
        {children}
      </span>
    </div>
  );
};

// BlogCard.Title component
const BlogCardTitle = ({
  children,
  className,
  maxLength = 80,
}: BlogCardTitleProps) => {
  const title = children?.toString() || "";
  const shouldTruncate = title.length >= maxLength;
  const displayTitle = shouldTruncate
    ? `${title.substring(0, maxLength - 3)}...`
    : title;

  return (
    <div className="px-4 py-6">
      <h3
        className={`text-base font-bold leading-6 text-neutral-700 ${
          className || ""
        }`}
        title={shouldTruncate ? title : undefined}
      >
        {displayTitle}
      </h3>
    </div>
  );
};

// BlogCard.Content component
const BlogCardContent = ({
  children,
  className,
  maxLength = 170,
}: BlogCardContentProps) => {
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
};

// BlogCard.Button component
const BlogCardButton = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className,
}: BlogCardButtonProps) => {
  return (
    <div className="pb-6 mt-auto">
      <button
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
  );
};

// Attach sub-components to BlogCard
BlogCard.Image = BlogCardImage;
BlogCard.Badge = BlogCardBadge;
BlogCard.Title = BlogCardTitle;
BlogCard.Content = BlogCardContent;
BlogCard.Button = BlogCardButton;

export default BlogCard;
