// src/components/ui/Accordion/Accordion.tsx
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  Children,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  type AccordionProps,
  type AccordionHeadingProps,
  type AccordionContentProps,
  type AccordionContextValue,
  accordionVariants,
  iconVariants,
} from "./Accordion.config";

// Updated context to include hasContent
interface ExtendedAccordionContextValue extends AccordionContextValue {
  hasContent: boolean;
}

// context + hook
const AccordionContext = createContext<ExtendedAccordionContextValue | null>(
  null
);
const useAccordionContext = () => {
  const ctx = useContext(AccordionContext);
  if (!ctx)
    throw new Error(
      "Accordion compound components must be used within <Accordion>"
    );
  return ctx;
};

// default Chevron
const ChevronIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Accordion root
const Accordion: React.FC<AccordionProps> & {
  Heading: React.FC<AccordionHeadingProps>;
  Content: React.FC<AccordionContentProps>;
} = ({ children, defaultOpen = false, onToggle, className }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Check if Accordion.Content is present among children
  const hasContent = useMemo(() => {
    let hasContentChild = false;
    Children.forEach(children, (child) => {
      if (
        React.isValidElement(child) &&
        (child.type === AccordionContent ||
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (child.type as any)?.displayName === "AccordionContent")
      ) {
        hasContentChild = true;
      }
    });
    return hasContentChild;
  }, [children]);

  const toggle = useCallback(() => {
    // Only toggle if there's content
    if (hasContent) {
      setIsOpen((prev) => {
        const next = !prev;
        onToggle?.(next);
        return next;
      });
    }
  }, [onToggle, hasContent]);

  const value = useMemo(
    () => ({ isOpen, toggle, hasContent }),
    [isOpen, toggle, hasContent]
  );

  const accordionClasses = `
    group flex px-6 py-[17px] sm:py-[23px] flex-col justify-center items-start gap-4 self-stretch
    rounded-3xl border border-gray-300 bg-gray-50 ${
      hasContent ? "cursor-pointer" : ""
    }
    transition-colors duration-200 hover:bg-[#7FBC53] text-neutral-700 hover:text-white
    ${className || ""}
  `.trim();

  return (
    <AccordionContext.Provider value={value}>
      <div
        onClick={hasContent ? toggle : undefined}
        className={accordionClasses}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// Heading with badge
const AccordionHeading: React.FC<AccordionHeadingProps> = ({
  index,
  children,
  className,
  icon,
  expandIcon,
  collapseIcon,
}) => {
  const { isOpen, toggle, hasContent } = useAccordionContext();

  const headingClasses = `
  flex items-center gap-4 self-stretch ${
    hasContent ? "cursor-pointer" : ""
  } select-none
  text-[12.5px] font-medium sm:font-semibold sm:text-[18px] hover:text-white
  ${className || ""}
`.trim();

  const renderIcon = () => {
    // Don't render any icon if there's no content
    if (!hasContent) return null;

    if (expandIcon && collapseIcon) {
      return isOpen ? collapseIcon : expandIcon;
    }
    const IconNode = icon || (
      <ChevronIcon className="text-dark-green-300 group-hover:text-white" />
    );
    return (
      <motion.div
        variants={iconVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="flex items-center"
      >
        {IconNode}
      </motion.div>
    );
  };

  return (
    <div
      className={headingClasses}
      role="button"
      tabIndex={hasContent ? 0 : -1}
      onKeyDown={(e) => {
        if (hasContent && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          toggle();
        }
      }}
      aria-expanded={hasContent ? isOpen : undefined}
    >
      {/* badge: centered + hoverable via group-hover */}
      <span
        className="
          flex items-center justify-center
          py-[7px] px-[12px] w-[40px] h-[40px] rounded-full
          bg-dark-green-300 group-hover:bg-white
          transition-colors duration-200
        "
      >
        <p className="text-white font-bold text-[18px] group-hover:text-[#008F32] transition-colors duration-200">
          {index}
        </p>
      </span>

      {children}
      {renderIcon()}
    </div>
  );
};

// Content panel
const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className,
  ...motionProps
}) => {
  const { isOpen } = useAccordionContext();
  const contentClasses = `
    flex px-14 flex-col items-start gap-4 self-stretch overflow-hidden text-[14px] md:text-[16px] text-neutral-700
    group-hover:text-white
    ${className || ""}
  `.trim();

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          className={contentClasses}
          variants={accordionVariants}
          initial="closed"
          animate="open"
          exit="closed"
          {...motionProps}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Set display name for component detection
AccordionContent.displayName = "AccordionContent";

Accordion.Heading = AccordionHeading;
Accordion.Content = AccordionContent;

export default Accordion;
