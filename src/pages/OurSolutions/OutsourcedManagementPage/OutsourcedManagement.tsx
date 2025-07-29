import { ShieldCheck } from "lucide-react";
import QuoteSection from "../../../components/_shared/QuoteSection";

export default function OutsourcedManagement() {
  return (
    <main className="min-h-screen">
      {/* Quote no topo */}
      <QuoteSection>
        <p
          className="text-brand-400 font-medium max-w-[613px] h-[80px] mx-auto"
          style={{ fontSize: "32px", fontStyle: "normal" }}
        >
          Gestão de Terceirizados
        </p>
        <ShieldCheck />
      </QuoteSection>
    </main>
  );
}
