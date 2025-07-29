import type { HTMLMotionProps, Variants } from "framer-motion";
import type { ReactNode } from "react";

export interface AccordionProps {
  children: ReactNode;
  defaultOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  className?: string;
}

export interface AccordionHeadingProps {
  index?: number;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  expandIcon?: ReactNode;
  collapseIcon?: ReactNode;
}

export interface AccordionContentProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

export interface AccordionContextValue {
  isOpen: boolean;
  toggle: () => void;
}

export const accordionVariants: Variants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: "easeOut" },
      opacity: { duration: 0.25, ease: "easeOut" },
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: "easeIn" },
      opacity: { duration: 0.25, ease: "easeIn" },
    },
  },
};

export const iconVariants: Variants = {
  open: { rotate: 180, transition: { duration: 0.3, ease: "easeInOut" } },
  closed: { rotate: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};
