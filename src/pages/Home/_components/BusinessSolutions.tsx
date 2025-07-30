import React, { useState, useEffect, useMemo, useCallback } from "react";

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

// --- Tipagem e Dados ---
interface SolutionProps {
  id: number;
  tabTitle: string;
  image: string;
  contentTitle: React.ReactNode;
  contentDescription: string;
  link: string;
  linkText: string;
}

const solutionsData: SolutionProps[] = [
  {
    id: 1,
    tabTitle: "Segurança do Trabalho",
    image: "./OurSolutions/seguranca-do-trabalho.webp",
    contentTitle: (
      <>Segurança não é só uma norma, é um compromisso com a vida</>
    ),
    contentDescription:
      "Soluções completas para proteger sua equipe: treinamentos, laudos técnicos, CIPA, LTCAT, PPRA, PPRPS, NR 15, NR 16, NR 18, NR 33, NR 35, serviço de assessoria, e mais.",
    link: "servicos/seguranca-trabalho",
    linkText: "Proteger minha equipe agora",
  },
  {
    id: 2,
    tabTitle: "Medicina do Trabalho",
    image: "./OurSolutions/medicina-do-trabalho.webp",
    contentTitle: <>Saúde para o trabalhador, tranquilidade para a empresa</>,
    contentDescription:
      "Serviços para prevenção, rastreamento e diagnóstico precoce de doenças relacionadas ao trabalho: PCMSO, PPR, PPP, NR 7, realização de exames clínicos, montagem de ambulatório médico, e mais.",
    link: "servicos/medicina-do-trabalho",
    linkText: "Cuidar da saúde da equipe",
  },
  {
    id: 3,
    tabTitle: "Ergonomia e Fisioterapia",
    image: "./OurSolutions/ergonomia-e-fisioterapia.webp",
    contentTitle: (
      <>Cuidar da ergonomia é garantir bem-estar e melhores resultados</>
    ),
    contentDescription:
      "Programas e atividades de prevenção, proteção e promoção da Saúde Ocupacional: laudos, análise ergonômica do trabalho, assistência em perícias judiciais, treinamentos, NR 17, entre outros.",
    link: "servicos/ergonomia-fisioterapia",
    linkText: "Melhorar a ergonomia",
  },
  {
    id: 4,
    tabTitle: "Gestão de Terceirizados",
    image: "./OurSolutions/gestao-de-terceirizados.webp",
    contentTitle: (
      <>Com a terceirização, sua empresa ganha em qualidade e reduz custos</>
    ),
    contentDescription:
      "Soluções em outsourcing na gestão de ambulatório médico e de enfermagem, NR 4, terceirização de técnicos em segurança do trabalho, e mais.",
    link: "servicos/gestao-de-terceirizados",
    linkText: "Otimizar gestão de terceiros",
  },
  {
    id: 5,
    tabTitle: "Gestão de Informações",
    image: "./OurSolutions/gestao-de-informacoes.webp",
    contentTitle: (
      <>
        Ferramentas para facilitar o gerenciamento das informações estratégicas
      </>
    ),
    contentDescription:
      "Praticidade para administrar dados e sistemas como eSocial, assinatura digital, biometria, emissão de PPP, indicadores de gestão de FAP, relatórios de absenteísmo, entre outros.",
    link: "servicos/gestao-de-informacoes",
    linkText: "Conhecer as ferramentas",
  },
  {
    id: 6,
    tabTitle: "Assessoria Jurídica",
    image: "./OurSolutions/assessoria-juridica.webp",
    contentTitle: <>Orientação jurídica e suporte para questões trabalhistas</>,
    contentDescription:
      "Acompanhamento de processo pericial, assistência técnica em perícias judiciais e extrajudiciais, consultoria preventiva, e mais.",
    link: "servicos/assessoria-juridica",
    linkText: "Consultar um especialista",
  },
];

// --- COMPONENTE ---
export const BusinessSolutions = () => {
  const [selectedId, setSelectedId] = useState(1);

  useEffect(() => {
    solutionsData.forEach((solution) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = solution.image;
      document.head.appendChild(link);
    });
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedId((prevId) => (prevId > 1 ? prevId - 1 : prevId));
  }, []);

  const handleNext = useCallback(() => {
    setSelectedId((prevId) =>
      prevId < solutionsData.length ? prevId + 1 : prevId
    );
  }, []);

  // O cálculo só ocorrerá quando `selectedId` mudar.
  const selectedSolution = useMemo(
    () => solutionsData.find((s) => s.id === selectedId),
    [selectedId]
  );

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1128px] mx-auto px-4 md:px-0">
        <div className="justify-between items-center hidden md:flex">
          <button
            onClick={handlePrev}
            disabled={selectedId === 1}
            aria-label="Ver solução anterior"
            className={`p-3 rounded-full transition-colors ${
              selectedId === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-green-800 text-white cursor-pointer hover:bg-green-700"
            }`}
          >
            <ArrowLeftIcon className="w-5 h-5" aria-hidden="true" />
          </button>

          <h2 className="text-3xl md:text-4xl font-medium text-green-light">
            Nossas Soluções
          </h2>

          <button
            onClick={handleNext}
            disabled={selectedId === solutionsData.length}
            aria-label="Ver próxima solução"
            className={`p-3 rounded-full transition-colors ${
              selectedId === solutionsData.length
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-green-800 text-white cursor-pointer hover:bg-green-700"
            }`}
          >
            <ArrowRightIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="md:hidden text-center mb-6">
          <h2 className="text-3xl font-medium text-green-light">
            Nossas Soluções
          </h2>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full overflow-x-auto scrollbar-hide mt-10 mb-10 pb-4 px-4 md:px-0">
        <div className="max-w-[1128px] mx-auto">
          <div
            role="tablist"
            aria-label="Soluções de negócio"
            className="h-[48px] flex space-x-3 md:space-x-4"
          >
            {solutionsData.map((solution) => (
              <button
                key={solution.id}
                id={`tab-${solution.id}`}
                role="tab"
                aria-selected={selectedId === solution.id}
                aria-controls={`tabpanel-${solution.id}`}
                onClick={() => setSelectedId(solution.id)}
                className={`cursor-pointer text-[14px] w-[211px] py-2 px-5 flex-shrink-0 whitespace-nowrap rounded-full text-sm font-normal transition-all duration-300 ${
                  selectedId === solution.id
                    ? "bg-green-accents-1000 text-white shadow-md"
                    : "bg-green-50 text-green-light hover:bg-green-100"
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
          <div
            key={selectedSolution.id}
            id={`tabpanel-${selectedSolution.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${selectedSolution.id}`}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Image */}
            <div className="w-full md:max-w-[552px] aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-200 mx-auto md:mx-0">
              <img
                src={selectedSolution.image}
                alt={selectedSolution.tabTitle}
                className="w-full h-full object-cover"
                width={552}
                height={311}
                fetchPriority={selectedSolution.id === 1 ? "high" : "auto"}
                decoding="async"
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
                <a
                  href={selectedSolution.link}
                  className="cursor-pointer flex items-center justify-center gap-3 bg-green-accents-600 hover:bg-green-700 text-white font-medium text-[14px] w-full md:w-[309px] h-[48px] rounded-full hover:brightness-95 transition-colors shadow-md"
                >
                  <span>{selectedSolution.linkText}</span>
                  <ArrowRightIcon className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
