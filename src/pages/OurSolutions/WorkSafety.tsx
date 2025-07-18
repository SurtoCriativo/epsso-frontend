import QuoteSection from "../../components/_shared/QuoteSection";
import ContactForm from "../../components/ContactForm";
import SecuritySection from "./_components/Security";

export default function WorkSafety() {
  return (
    <main className="min-h-screen">
      {/* Quote no topo */}
      <QuoteSection>
        <p
          className="text-brand-400 font-medium max-w-[613px] h-[80px] mx-auto"
          style={{ fontSize: "32px", fontStyle: "normal" }}
        >
          Segurança no trabalho não é um detalhe. É um valor.
        </p>
      </QuoteSection>
      <SecuritySection />
      <ContactForm />
    </main>
  );
}
