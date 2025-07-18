import { ShieldCheck } from "lucide-react";
import QuoteSection from "../../components/_shared/QuoteSection";

export default function OccupationalMedicine() {
  return (
    <main className="min-h-screen">
      {/* Quote no topo */}
      <QuoteSection>
        <p
          className="text-brand-400 font-medium max-w-[613px] h-[80px] mx-auto"
          style={{ fontSize: "32px", fontStyle: "normal" }}
        >
          Medicina do Trabalho
        </p>
        <ShieldCheck />
      </QuoteSection>
    </main>
  );
}
