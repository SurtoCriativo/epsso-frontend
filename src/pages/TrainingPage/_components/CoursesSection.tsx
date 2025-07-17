import { useState } from "react";

const filters = ["Todos", "NRs", "PPCI", "PPR", "RCP"] as const;

type Filter = (typeof filters)[number];

interface CourseCard {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  category: Filter;
}

const courseCards: CourseCard[] = [
  // NRs
  {
    id: "nr-17",
    image: "/trainingpage/ergonomia.svg",
    title: "NR-17 Ergonomia",
    subtitle: "Curso completo sobre ergonomia no ambiente de trabalho.",
    category: "NRs",
  },
  {
    id: "nr-35",
    image: "/trainingpage/trabalho-altura.svg",
    title: "NR-35 Trabalho em Altura",
    subtitle: "Treinamento essencial para trabalhos em altura.",
    category: "NRs",
  },
  {
    id: "nr-33",
    image: "/trainingpage/espacos-confinados.svg",
    title: "NR-33 Espaços Confinados",
    subtitle: "Capacitação para trabalhos em espaços confinados.",
    category: "NRs",
  },
  {
    id: "nr-10",
    image: "/trainingpage/seguranca-instalacoes-eletrecidade.svg",
    title: "NR-10 Instalações Elétricas",
    subtitle: "Curso de segurança para serviços com eletricidade.",
    category: "NRs",
  },
  {
    id: "nr-06",
    image: "/trainingpage/equipamento-protecao.svg",
    title: "NR-06 Equipamento de Proteção",
    subtitle: "Tudo sobre o uso correto de EPIs.",
    category: "NRs",
  },
  {
    id: "nr-12",
    image: "/trainingpage/seguranca-maquinas.svg",
    title: "NR-12 Segurança no Trabalho em Máquinas e Equipamentos",
    subtitle: "Segurança em máquinas e equipamentos.",
    category: "NRs",
  },

  // PPCI
  {
    id: "ppci-01",
    image: "/trainingpage/ppci01.jpg",
    title: "PPCI – Combate a Incêndio",
    subtitle: "Capacitação em prevenção e combate a incêndios.",
    category: "PPCI",
  },
  {
    id: "ppci-02",
    image: "/trainingpage/ppci02.jpg",
    title: "PPCI – Primeira Resposta",
    subtitle: "Treinamento para ações de emergência.",
    category: "PPCI",
  },
  // PPR
  {
    id: "ppr-01",
    image: "/trainingpage/ppr01.jpg",
    title: "PPR – Programa de Proteção Respiratória",
    subtitle: "Medidas para ambientes com contaminantes.",
    category: "PPR",
  },
  {
    id: "ppr-02",
    image: "/trainingpage/ppr02.jpg",
    title: "PPR – Equipamentos de Respiração",
    subtitle: "Uso correto de respiradores.",
    category: "PPR",
  },
  // RCP
  {
    id: "rcp-01",
    image: "/trainingpage/rcp01.jpg",
    title: "RCP – Suporte Básico de Vida",
    subtitle: "Treinamento em reanimação cardiopulmonar.",
    category: "RCP",
  },
  {
    id: "rcp-02",
    image: "/trainingpage/rcp02.jpg",
    title: "RCP – Atendimento de Emergência",
    subtitle: "Primeiros socorros em situações críticas.",
    category: "RCP",
  },
];

export default function TrainingSection() {
  const [selected, setSelected] = useState<Filter>("NRs");

  const filteredCards =
    selected === "Todos"
      ? filters
          .filter((f) => f !== "Todos")
          .flatMap((filter) => [
            { heading: filter },
            ...courseCards.filter((card) => card.category === filter),
          ])
      : courseCards.filter((card) => card.category === selected);

  return (
    <section className="w-full py-[80px] px-4">
      <div className="max-w-[1128px] mx-auto">
        {/* Título */}
        <h2 className="text-[20px] md:text-[24px] font-medium text-green-800 mb-8">
          Nossos cursos e treinamentos
        </h2>

        {/* Filtros */}
        <div className="flex gap-3 flex-wrap mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-1 text-sm rounded-full transition-all font-medium shadow-sm ${
                selected === filter
                  ? "bg-green-800 text-white"
                  : "bg-gray-100 text-green-800 hover:bg-green-200"
              }`}
              onClick={() => setSelected(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {filteredCards.map((item) => {
            if ("heading" in item) {
              return (
                <div
                  key={`heading-${item.heading}`}
                  className="w-full mt-10 mb-2"
                >
                  <h3 className="text-green-700 font-semibold text-[18px]">
                    {item.heading}
                  </h3>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className="w-[326px] h-[322px] md:w-[207px] md:h-[288px] bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-[128px]"
                />
                <div className="p-4 flex flex-col gap-2">
                  <h4 className="text-[12px] font-bold leading-snug text-black">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-green-700 leading-normal">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
