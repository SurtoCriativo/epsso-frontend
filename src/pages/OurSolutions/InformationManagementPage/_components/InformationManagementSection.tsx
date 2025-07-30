import { motion } from "framer-motion";

export default function InformationManagementSection() {
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
              src="/information-management-image.svg"
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
            Gestão de Informações
          </h2>

          <p
            className="
            text-left
              text-base
              text-neutral-700 leading-relaxed
              mb-4 md:mb-6
            "
          >
            A gestão eficiente da saúde ocupacional é essencial para o sucesso
            do seu negócio e para o bem-estar dos seus colaboradores. Na EPSSO,
            oferecemos um software 100% online que centraliza e automatiza
            informações estratégicas, tornando o gerenciamento mais prático,
            ágil e preciso.
          </p>

          <p
            className="
              text-left text-base
              text-neutral-700 leading-relaxed
              mb-4 md:mb-6
            "
          >
            Nosso sistema otimiza processos como convocação para exames,
            agendamento de treinamentos, controle de afastamentos, entrega de
            EPIs, biometria e assinatura digital, além de gerar relatórios,
            incluindo análises de absenteísmo. Com integração ao eSocial, sua
            empresa mantém-se alinhada às obrigações legais, evitando multas e
            penalidades.
          </p>

          <p
            className="
              text-left text-base
              text-neutral-700 leading-relaxed
            "
          >
            Ao usar nossa plataforma, sua equipe consegue planejar ações,
            realizar agendamentos eficientes, monitorar indicadores e tomar
            decisões com dados confiáveis. Assim, promovemos uma cultura de
            prevenção e cuidado contínuo, contribuindo para um ambiente de
            trabalho mais saudável, produtivo e preparado para os desafios do
            mercado.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
