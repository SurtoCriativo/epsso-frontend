import type { ReactNode } from "react";

// Main BlogCard component props
export interface BlogCardProps {
  children: ReactNode;
  className?: string;
}

// BlogCard.Image component props
export interface BlogCardImageProps {
  children: ReactNode;
  alt?: string;
  className?: string;
}

// BlogCard.Badge component props
export interface BlogCardBadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

// BlogCard.Title component props
export interface BlogCardTitleProps {
  children: ReactNode;
  className?: string;
  maxLength?: number;
}

// BlogCard.Content component props
export interface BlogCardContentProps {
  children: ReactNode;
  className?: string;
  maxLength?: number;
}

// BlogCard.Button component props
export interface BlogCardButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  className?: string;
}

// Style configuration
export const BlogCardStyles = {
  container: {
    width: "264px",
    height: "420px",
    borderRadius: "16px",
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: "264px",
    height: "160px",
  },
  badge: {
    height: "20px",
    paddingY: "4px",
    paddingX: "8px",
    fontSize: "10px",
    lineHeight: "12px",
    fontWeight: "400",
  },
  title: {
    paddingY: "24px",
    paddingX: "16px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "700",
    maxLength: 80,
  },
  content: {
    paddingY: "24px",
    paddingX: "16px",
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "400",
    maxLength: 170,
  },
  button: {
    paddingY: "24px",
    paddingX: "16px",
  },
} as const;

// Badge variants
export const badgeVariants = {
  primary: "bg-[#1B1F24] text-white",
  secondary: "bg-gray-600 text-white",
  accent: "bg-blue-600 text-white",
} as const;

// Button variants
export const buttonVariants = {
  primary: "text-green-accents-600 underline  hover:text-brand-400",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
} as const;

// Type for the composed BlogCard component
export interface BlogCardComposition {
  Image: React.FC<BlogCardImageProps>;
  Badge: React.FC<BlogCardBadgeProps>;
  Title: React.FC<BlogCardTitleProps>;
  Content: React.FC<BlogCardContentProps>;
  Button: React.FC<BlogCardButtonProps>;
}
