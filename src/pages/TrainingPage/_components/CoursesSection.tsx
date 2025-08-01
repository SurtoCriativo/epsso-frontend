import { useState } from "react";
import { courseCards } from "../../../contants/courseConstants";
import { motion } from "framer-motion";

const filters = [
  "Todos",
  "Segurança do Trabalho",
  "Medicina do Trabalho",
  "Ergonomia e Qualidade de Vida",
] as const;

export type Filter = (typeof filters)[number];

export default function TrainingSection() {
  const [selected, setSelected] = useState<Filter>("Todos");

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
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full py-[80px] px-4"
    >
      <div className="max-w-[1128px] mx-auto">
        {/* Título */}
        <h2 className="text-[24px] font-medium text-brand-400 mb-3">
          Nossos cursos e treinamentos
        </h2>
        <p className="text-[16px] text-neutral-700  mb-11">
          Quer saber mais sobre um curso? Envie sua mensagem pelo formulário
          abaixo.
        </p>

        {/* Filtros */}
        <div className="flex gap-3 flex-wrap mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-1 text-sm rounded-lg h-[32px] transition-all font-medium shadow-sm ${
                selected === filter
                  ? "bg-green-800 text-white"
                  : "bg-green-light-50 text-neutral-700"
              }`}
              onClick={() => setSelected(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
          {filteredCards.map((item) => {
            if ("heading" in item) {
              return (
                <div
                  key={`heading-${item.heading}`}
                  className="w-full mt-10 mb-2"
                >
                  <h3 className="text-neutral-700 font-medium text-[16px] md:text-[18px]">
                    {item.heading}
                  </h3>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className="w-[326px] h-[322px] md:w-[206px] md:h-[302px] bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-[160px] md:h-[128px] rounded-t-xl"
                />
                <div className="p-4 flex flex-col gap-2">
                  <h4 className="text-[16px] md:text-[14px] font-bold leading-snug text-black">
                    {item.title}
                  </h4>
                  <p className="text-[16px] md:text-[14px] text-neutral-700 leading-normal">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
