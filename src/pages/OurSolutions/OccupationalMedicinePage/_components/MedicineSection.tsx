import { motion } from "framer-motion";

export default function MedicineSection() {
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
              src="/public/medicine-img.svg"
              alt="Menino com capacete brincando com blocos"
              width={540}
              height={421}
              className="object-cover w-full h-auto"
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
            Medicina do Trabalho
          </h2>

          <p
            className="
            text-left
              text-base
              text-neutral-700 leading-relaxed
              mb-4 md:mb-6
            "
          >
            A saúde dos seus colaboradores é fundamental para o bem estar da
            equipe e também para o sucesso do seu negócio. Na EPSSO, nosso
            objetivo é oferecer soluções de Medicina do Trabalho que atendam às
            necessidades específicas da sua empresa, sempre seguindo as normas
            regulamentadoras.
          </p>

          <p
            className="
              text-left text-base
              text-neutral-700 leading-relaxed
              mb-4 md:mb-6
            "
          >
            Contamos com uma equipe de profissionais especializados que realizam
            exames admissionais, periódicos e demissionais, além de desenvolver
            programas de controle de riscos e orientações de saúde. Nosso foco é
            garantir o bem-estar físico e mental dos seus funcionários,
            promovendo uma cultura de prevenção e cuidado contínuo.
          </p>
          <p
            className="
              text-left text-base
              text-neutral-700 leading-relaxed
            "
          >
            Confie na EPSSO para cuidar da saúde ocupacional da sua equipe,
            ajudando a criar um ambiente mais saudável, produtivo e preparado
            para os desafios do mercado.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
