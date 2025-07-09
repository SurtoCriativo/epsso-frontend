interface QuoteSectionProps {
  text: string;
}

export default function QuoteSection({ text }: QuoteSectionProps) {
  return (
    <section className="w-full h-[240px] bg-neutral-light py-16 flex justify-center items-center text-center">
      <blockquote
        className="text-brand-400 font-medium max-w-[613px] h-[80px] mx-auto"
        style={{ fontSize: "32px", fontStyle: "normal" }}
      >
        “{text}”
      </blockquote>
    </section>
  );
}
