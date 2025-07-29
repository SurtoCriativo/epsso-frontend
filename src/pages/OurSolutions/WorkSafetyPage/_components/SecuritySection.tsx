import { motion } from "framer-motion";

export default function SecuritySection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white py-[120px]"
    >
      <div className="max-w-[1128px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto à esquerda */}
        <div className="text-left">
          {/* Título */}
          <h2 className="text-[32px] font-medium text-brand-450 mb-6">
            Segurança do trabalho
          </h2>

          {/* Parágrafo 1 */}
          <p className="text-neutral-700 leading-relaxed mb-4 max-w-[600px]">
            Na EPSSO, acreditamos que a segurança no ambiente de trabalho é uma
            responsabilidade compartilhada, mas o papel da sua empresa é
            fundamental para criar condições ideais que promovam uma prática
            segura e eficiente. Nosso compromisso é oferecer soluções
            personalizadas, alinhadas às normas regulamentadoras, garantindo um
            ambiente mais seguro para todos.
          </p>

          {/* Parágrafo 2 */}
          <p className="text-neutral-700 leading-relaxed max-w-[600px]">
            Com uma equipe de especialistas capacitados, fornecemos assessoria
            completa em Segurança do Trabalho, desenvolvendo programas sob
            medida, treinamentos inovadores e laudos técnicos precisos. Nosso
            objetivo é proteger a integridade física dos seus colaboradores e
            promover uma cultura de prevenção e confiança, refletindo a
            qualidade e o conhecimento técnico que você merece. Conte conosco
            para transformar a segurança do seu ambiente de trabalho em uma
            vantagem competitiva!
          </p>
        </div>

        {/* Imagem à direita */}
        <div className="relative w-full max-w-[540px] ml-auto">
          <div className="overflow-hidden rounded-r-[40px]">
            <img
              src="/public/security-img.svg"
              alt="Menino com capacete brincando com blocos"
              width={540}
              height={421}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
