import QuoteSection from "../../components/_shared/QuoteSection";
import ContactUsForm from "./_components/ContactUsForm";

export default function ContactUsPage() {
  return (
    <main className="">
      <QuoteSection>
        <p className="text-dark-green-300 text-sm font-medium mb-2 flex items-center justify-center">
          <img
            src="/trabalhe-conosco/messenger-icon.svg"
            alt="Ícone de mensagem"
            className="w-4 h-4 mr-2"
          />
          CONTATO
        </p>
        <h1 className="text-[40px] font-medium text-gray-800 leading-tight w-[358px] mx-auto">
          Como nós podemos <br className="md:hidden" /> te ajudar hoje?
        </h1>
      </QuoteSection>
      <ContactUsForm />
    </main>
  );
}
