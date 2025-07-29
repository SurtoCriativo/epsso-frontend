import React from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

type Position = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  isVisible: boolean;
  position?: Position;
}

const positionClasses = {
  top: "left-1/2 -translate-x-1/2 -top-2 translate-y-[-100%]",
  bottom: "left-1/2 -translate-x-1/2 -bottom-2 translate-y-[100%]",
  // Changed: No longer vertically centered. Aligns to the top.
  left: "top-0 -left-3 translate-x-[-100%]",
  right: "top-0 -right-3 translate-x-[100%]",
};

const animationVariants: Variants = {
  hidden: (pos: Position) => {
    let y = 0,
      x = 0;
    if (pos === "top") y = 10;
    if (pos === "bottom") y = -10;
    if (pos === "left") x = 10;
    if (pos === "right") x = -10;
    return { opacity: 0, y, x, scale: 0.95 };
  },
  visible: { opacity: 1, y: 0, x: 0, scale: 1 },
};

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  isVisible,
  position = "top",
}) => {
  return (
    <div className="relative flex items-center">
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            custom={position}
            variants={animationVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`absolute w-max max-w-xs bg-[#FFFFFF] text-[#303030] font-bold text-xs rounded-md p-4 shadow-lg z-10 ${positionClasses[position]}`}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
