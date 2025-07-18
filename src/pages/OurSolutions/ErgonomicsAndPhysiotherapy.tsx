import QuoteSection from "../../components/_shared/QuoteSection";
import { ShieldCheck } from "lucide-react";

export default function ErgonomicsAndPhysiotherapy() {
  return (
    <main className="min-h-screen">
      {/* Quote no topo */}
      <QuoteSection>
        <p
          className="text-brand-400 font-medium max-w-[613px] h-[80px] mx-auto"
          style={{ fontSize: "32px", fontStyle: "normal" }}
        >
          Ergonomia e Fisioterapia
        </p>
        <ShieldCheck />
      </QuoteSection>
    </main>
  );
}
