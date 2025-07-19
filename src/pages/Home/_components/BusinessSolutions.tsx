import React, { useState } from "react";

// --- ÍCONES ---
const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// Tipagem
interface SolutionProps {
  id: number;
  tabTitle: string;
  image: string;
  contentTitle: React.ReactNode;
  contentDescription: string;
}

const solutionsData: SolutionProps[] = [
  {
    id: 1,
    tabTitle: "Segurança do Trabalho",
    image: "./OurSolutions/image.svg",
    contentTitle: (
      <>Segurança não é só uma norma, é um compromisso com a vida</>
    ),
    contentDescription:
      "Soluções completas para proteger sua equipe: treinamentos, laudos técnicos, CIPA, LTCAT, PPRA, PPRPS, NR 15, NR 16, NR 18, NR 33, NR 35, serviço de assessoria, e mais.",
  },
  {
    id: 2,
    tabTitle: "Medicina do Trabalho",
    image: "./OurSolutions/image-1.svg",
    contentTitle: <>Saúde para o trabalhador, tranquilidade para a empresa</>,
    contentDescription:
      "Serviços para prevenção, rastreamento e diagnóstico precoce de doenças relacionadas ao trabalho: PCMSO, PPR, PPP, NR 7, realização de exames clínicos, montagem de ambulatório médico, software de gestão de saúde ocupacional, e mais.",
  },
  {
    id: 3,
    tabTitle: "Ergonomia e Fisioterapia",
    image: "./OurSolutions/image-2.svg",
    contentTitle: (
      <>
        Cuidar da ergonomia é garantir bem-estar e melhores resultados no
        trabalho
      </>
    ),
    contentDescription:
      "Programas e atividades de prevenção, proteção e promoção da Saúde Ocupacional: laudos, análise ergonômica do trabalho, assistência em perícias judiciais, treinamentos, NR 17, entre outros.",
  },
  {
    id: 4,
    tabTitle: "Gestão de Terceirizados",
    image: "./OurSolutions/image-3.svg",
    contentTitle: (
      <>Com a terceirização, sua empresa ganha em qualidade e reduz custos</>
    ),
    contentDescription:
      "Soluções em outsourcing na gestão de ambulatório médico e de enfermagem, NR 4, terceirização de técnicos em segurança do trabalho, e mais.",
  },
  {
    id: 5,
    tabTitle: "Gestão de Informações",
    image: "./OurSolutions/image-4.svg",
    contentTitle: (
      <>
        Ferramentas para facilitar o gerenciamento das informações estratégicas
        relacionadas à Saúde Ocupacional
      </>
    ),
    contentDescription:
      "Praticidade para administrar dados e sistemas como eSocial, assinatura digital, biometria, emissão de PPP, indicadores de gestão de FAP, relatórios de absenteísmo, entre outros.",
  },
  {
    id: 6,
    tabTitle: "Assessoria Jurídica",
    image: "./OurSolutions/image-5.svg",
    contentTitle: (
      <>
        Orientação jurídica e suporte especializado para questões relacionadas à
        legislação trabalhista
      </>
    ),
    contentDescription:
      "Acompanhamento de processo pericial, assistência técnica em perícias judiciais e extrajudiciais, consultoria preventiva, e mais.",
  },
];

export const BusinessSolutions = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [activeButton, setActiveButton] = useState<"prev" | "next">("prev");

  const handlePrev = () => {
    setSelectedId((prevId) =>
      prevId === 1 ? solutionsData.length : prevId - 1
    );
    setActiveButton("prev");
  };

  const handleNext = () => {
    setSelectedId((prevId) =>
      prevId === solutionsData.length ? 1 : prevId + 1
    );
    setActiveButton("next");
  };

  const selectedSolution = solutionsData.find((s) => s.id === selectedId);

  return (
    <section className="bg-white py-12 md:py-20">
      {/* Header */}
      <div className="max-w-[1128px] mx-auto px-4 md:px-0">
        <div className="justify-between items-center hidden md:flex">
          <button
            onClick={handlePrev}
            className={`p-2 rounded-full transition-colors ${
              activeButton === "prev"
                ? "bg-green-800 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>

          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            Nossas Soluções
          </h2>

          <button
            onClick={handleNext}
            className={`p-2 rounded-full transition-colors ${
              activeButton === "next"
                ? "bg-green-800 text-white"
                : "bg-green-800/20 text-white"
            }`}
          >
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Título */}
        <div className="md:hidden text-center mb-6">
          <h2 className="text-2xl font-bold text-green-800">Nossas Soluções</h2>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full overflow-x-auto scrollbar-hide mt-10 mb-10 pb-4 px-4 md:px-0">
        <div className="max-w-[1128px] mx-auto">
          <div className="h-[48px] flex space-x-3 md:space-x-4">
            {solutionsData.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setSelectedId(solution.id)}
                className={`py-2 px-5 flex-shrink-0 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedId === solution.id
                    ? "bg-green-800 text-white shadow-md"
                    : "bg-green-50 text-green-800 hover:bg-green-100"
                }`}
              >
                {solution.tabTitle}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1128px] mx-auto px-4 md:px-0">
        {selectedSolution && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="w-full md:max-w-[552px] aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-200 mx-auto md:mx-0">
              <img
                src={selectedSolution.image}
                alt={selectedSolution.tabTitle}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 w-[320px] md:w-full mx-auto md:mx-0">
              <h3 className="text-[20px] md:text-[24px] font-medium text-dark-green leading-tight">
                {selectedSolution.contentTitle}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[14px] md:text-base">
                {selectedSolution.contentDescription}
              </p>
              <div className="mt-4">
                <button className="flex items-center justify-center gap-3 bg-green-accents-600 hover:bg-green-700 text-white font-medium text-[14px] w-full md:w-[309px] h-[48px] rounded-full hover:brightness-95 transition-colors shadow-md">
                  <span>Garanta a segurança da sua equipe</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
