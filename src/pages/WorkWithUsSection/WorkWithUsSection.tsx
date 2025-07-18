import { motion } from "framer-motion";
import JobApplicationForm from "./_components/JobApplicationForm";

export default function WorkWithUsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white py-[48px] md:py-[120px] px-4"
    >
      <div className="max-w-[1128px] mx-auto grid grid-cols-1 md:grid-cols-[512px_512px] md:gap-[120px] items-start">
        {/* Coluna da Esquerda: Título, Imagem e Texto */}
        <div>
          <h2 className="text-[24px] font-semibold text-brand-400 mb-6">
            Faça parte do nosso time.
          </h2>

          <img
            src="/forms/trabalhe-conosco.svg"
            alt="Equipe EPSSO"
            width={552}
            height={312}
            className="w-full max-w-[512px] h-auto mb-6 rounded-lg"
          />

          <p className="text-sm text-neutral-700 leading-relaxed">
            Você pode enviar seu currículo para{" "}
            <span className="font-semibold text-neutral-900">
              recrutamento@epsso.com.br
            </span>{" "}
            ou preencha o formulário desta página para entrar em contato conosco
            e enviar seu currículo.
          </p>

          <p className="text-sm text-neutral-700 leading-relaxed mt-4">
            Para que o formulário seja enviado, todos os campos devem ser
            preenchidos.
          </p>
        </div>

        {/* Coluna da Direita: Formulário */}
        <JobApplicationForm />
      </div>
    </motion.section>
  );
}
