import { motion } from "framer-motion";

export default function OutsourcedManagementSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        w-full bg-white
        py-6 md:py-[120px]
        px-4 md:px-0
      "
    >
      <div
        className="
          max-w-[343px] md:max-w-[1128px] mx-auto
          flex flex-col md:grid md:grid-cols-2
          gap-8 md:gap-12 items-center
        "
      >
        {/* IMAGE: mobile first, then moves to the right */}
        <div
          className="
            w-full max-w-[540px]
            mb-6 md:mb-0
            pt-[76px] md:pt-0
            mx-auto
            order-first md:order-last
          "
        >
          <div className="overflow-hidden rounded-r-[40px]">
            <img
              src="/outsourced-img.svg"
              alt="Médica segurando prancheta"
              width={540}
              height={421}
              className="object-cover w-full h-auto"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>

        {/* TEXT: mobile below image, desktop on left */}
        <div className="order-last md:order-first">
          <h2
            className="
              text-center 
              md:text-left
              text-[32px]
              font-medium text-brand-450
              mb-6
            "
          >
            Gestão de Serviços Terceirizados
          </h2>

          <p
            className="
            text-left
              text-base
              text-neutral-700 leading-relaxed
              mb-4 md:mb-6
            "
          >
            Contratar serviços de outsourcing e terceirização é uma estratégia
            eficiente que reduz custos, garante conformidade legal e permite que
            sua empresa concentre esforços no foco principal da empresa -
            enquanto a segurança e medicina do trabalho ficam por conta da
            EPSSO.
          </p>

          <p
            className="
              text-left text-base
              text-neutral-700 leading-relaxed
              mb-4 md:mb-6
            "
          >
            Nossa equipe é formada por médicos, enfermeiros, psicólogos,
            fisioterapeutas, engenheiros e técnicos em segurança do trabalho que
            garantem uma gestão especializada, promovendo ambientes mais
            seguros, reduzindo riscos e garantindo o cumprimento das normas
            regulamentadoras. Assim, sua empresa otimiza recursos, aumenta a
            eficiência interna e promove o bem-estar dos colaboradores com uma
            equipe experiente.
          </p>

          <p
            className="
              text-left text-base
              text-neutral-700 leading-relaxed
            "
          >
            Com vasta experiência no mercado, a EPSSO oferece soluções
            personalizadas para selecionar, treinar e gerenciar o profissional
            que a sua empresa precisa.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
