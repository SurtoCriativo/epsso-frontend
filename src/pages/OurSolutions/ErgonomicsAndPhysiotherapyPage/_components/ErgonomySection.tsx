import { motion } from "framer-motion";

export default function ErgonomySection() {
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
            Ergonomia e Qualidade de Vida
          </h2>

          <p
            className="
            text-left
              text-base
              text-neutral-700 leading-relaxed
              mb-4 md:mb-6
            "
          >
            A qualidade de vida e o bem-estar dos seus colaboradores são
            essenciais para um ambiente de trabalho saudável, produtivo e
            sustentável. Por isso, destacamos a ergonomia e a qualidade de vida
            como aspectos cruciais na esfera profissional. Contando com um
            departamento exclusivo de Fisioterapia do Trabalho, nosso time de
            profissionais desenvolve programas de prevenção, proteção e promoção
            da saúde, focados em melhorar as condições ergonômicas e prevenir
            doenças relacionadas ao esforço físico, postura e estresse.
          </p>

          <p
            className="
              text-left text-base
              text-neutral-700 leading-relaxed
            "
          >
            Com avaliações ergonômicas, orientações de postura, treinamentos e
            atividades, buscamos aumentar o bem-estar físico e mental dos
            funcionários, promovendo uma cultura de cuidado contínuo. Confie na
            EPSSO para criar um espaço de trabalho mais saudável, confortável e
            preparado para os desafios do mercado.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
