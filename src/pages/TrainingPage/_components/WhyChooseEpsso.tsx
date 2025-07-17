"use client";

import { useState, useRef, useEffect } from "react";
import { BadgeCheck, RefreshCcw, Laptop, Users } from "lucide-react";
// --- 1. IMPORTE O ARQUIVO CSS ---
import styles from "./WhyChooseEpsso.module.css";

export default function WhyChooseEpsso() {
  const cards = [
    {
      icon: <BadgeCheck className="text-green-700 w-6 h-6 shrink-0" />,
      title: "Certificação digital",
      description: "Certificados válidos e reconhecidos.",
    },
    {
      icon: <RefreshCcw className="text-green-700 w-6 h-6 shrink-0" />,
      title: "Conteúdo atualizado",
      description: "Cursos sempre de acordo com as normas.",
    },
    {
      icon: <Laptop className="text-green-700 w-6 h-6 shrink-0" />,
      title: "Acesso online 24h",
      description: "Estude a qualquer hora e lugar.",
    },
    {
      icon: <Users className="text-green-700 w-6 h-6 shrink-0" />,
      title: "Especialistas em SST",
      description: "Equipe com ampla experiência.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const cardWidth = 280;
      const gap = 16;
      const scrollLeft = scrollContainer.scrollLeft;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(index);
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-white relative">
      <div className="max-w-[1128px] mx-auto py-12 px-4">
        <h2 className="text-green-700 text-lg font-semibold mb-8">
          Por que escolher a EPSSO?
        </h2>

        {/* Mobile Carousel */}
        <div
          ref={scrollContainerRef}
          // --- 2. APLIQUE A CLASSE IMPORTADA AQUI ---
          className={`flex gap-4 overflow-x-auto scroll-smooth pb-2 md:hidden ${styles.noScrollbar}`}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="min-w-[280px] max-w-[280px] flex-shrink-0 border border-zinc-200 rounded-xl p-6 flex flex-col gap-3"
            >
              {card.icon}
              <h3 className="font-semibold text-zinc-900">{card.title}</h3>
              <p className="text-sm text-zinc-600">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Indicador do Carrossel Mobile */}
        <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
          {cards.map((_, idx) => (
            <div
              key={idx}
              className={`transition-all duration-300 ${
                activeIndex === idx
                  ? "w-2 h-2 bg-green-600 rounded-full"
                  : "w-6 h-2 bg-green-100 rounded-full"
              }`}
            />
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="border border-zinc-200 rounded-xl p-6 flex flex-col gap-3"
            >
              {card.icon}
              <h3 className="font-semibold text-zinc-900">{card.title}</h3>
              <p className="text-sm text-zinc-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
