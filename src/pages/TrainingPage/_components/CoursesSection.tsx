import { useState } from "react";
import { courseCards } from "../../../contants/courseConstants";
import { motion } from "framer-motion";

const filters = ["Todos", "NRs", "PPCI", "PPR", "RCP"] as const;

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
        <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
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
                className="w-[326px] h-[322px] md:w-[206px] md:h-[288px] bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm"
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
    </motion.section>
  );
}
