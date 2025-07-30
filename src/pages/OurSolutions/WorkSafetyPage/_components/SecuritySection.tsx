import { motion } from "framer-motion";

export default function SecuritySection() {
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
              src="/seguranca.webp"
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
            Segurança do trabalho
          </h2>
          <p className="text-left text-base text-neutral-700 leading-relaxed mb-4 md:mb-6">
            Na EPSSO, acreditamos que a segurança no ambiente de trabalho é uma
            responsabilidade compartilhada, mas o papel da sua empresa é
            fundamental para criar condições ideais que promovam uma prática
            segura e eficiente. Nosso compromisso é oferecer soluções
            personalizadas, alinhadas às normas regulamentadoras, garantindo um
            ambiente mais seguro para todos.
          </p>
          <p className="text-left text-base text-neutral-700 leading-relaxed max-w-[600px]">
            Com uma equipe de especialistas capacitados, fornecemos assessoria
            completa em Segurança do Trabalho, desenvolvendo programas sob
            medida, treinamentos inovadores e laudos técnicos precisos. Nosso
            objetivo é proteger a integridade física dos seus colaboradores e
            promover uma cultura de prevenção e confiança, refletindo a -
            qualidade e o conhecimento técnico que você merece. Conte conosco
            para transformar a segurança do seu ambiente de trabalho em uma
            vantagem competitiva!
          </p>
        </div>
      </div>
    </motion.section>
  );
}
