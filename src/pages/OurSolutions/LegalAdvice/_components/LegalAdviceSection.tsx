import { motion } from "framer-motion";

export default function LegalAdviceSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white py-6 md:py-[120px] px-4 md:px-0"
    >
      <div
        className="
         max-w-[343px] md:max-w-[1128px] mx-auto
         flex flex-col md:grid md:grid-cols-2
         gap-8 md:gap-12 items-center
       "
      >
        {/* IMAGE */}
        <div className="w-full max-w-[540px] mb-6 md:mb-0 pt-[76px] md:pt-0 mx-auto order-first md:order-last">
          <div className="overflow-hidden rounded-r-[40px]">
            <img
              src="/services-pages/assessoria-juridica.webp"
              alt="Menino com capacete brincando com blocos"
              width={540}
              height={421}
              loading="lazy"
              fetchPriority="high"
              decoding="async"
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="order-last md:order-first">
          <h2 className="text-center md:text-left text-[32px] font-medium text-brand-450 mb-6">
            Assessoria Jurídica
          </h2>
          <p className="text-left text-base text-neutral-700 leading-relaxed mb-4 md:mb-6">
            Na EPSSO, reconhecemos a importância de uma assessoria jurídica
            especializada em segurança e medicina do trabalho, especialmente
            diante do aumento de demandas judiciais que utilizam a prova técnica
            como fator decisivo. Contamos com uma equipe experiente na área de
            auxílio a perícias trabalhistas, oferecendo consultoria em
            acompanhamento de processos periciais, assistência técnica em
            perícias judiciais e extrajudiciais, além de consultoria preventiva.
            Em momentos tão cruciais do processo, é fundamental contar com
            profissionais que entendam profundamente do assunto para garantir a
            melhor defesa e orientação.
          </p>
          <p className="text-left text-base text-neutral-700 leading-relaxed max-w-[600px]">
            Confie na EPSSO para assegurar um acompanhamento técnico preciso e
            eficiente, fortalecendo sua estratégia jurídica e protegendo sua
            empresa.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
