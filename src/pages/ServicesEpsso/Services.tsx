import QuoteSection from "../../components/_shared/QuoteSection";
import ContactForm from "../../components/ContactForm";
import SecuritySection from "./_components/Security";

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Quote no topo */}
      <QuoteSection text="Segurança no trabalho não é um detalhe. É um valor." />
      <SecuritySection />
      <ContactForm />
    </main>
  );
}
