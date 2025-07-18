import { motion } from "framer-motion";

interface QuoteSectionProps {
  children: React.ReactNode;
}

export default function QuoteSection({ children }: QuoteSectionProps) {
  return (
    <section className="w-full h-[240px] bg-neutral-light py-16 flex justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-[240px] px-[64px] max-w-[1128px] mx-auto text-center flex flex-col justify-center"
      >
        <blockquote>{children}</blockquote>
      </motion.div>
    </section>
  );
}
