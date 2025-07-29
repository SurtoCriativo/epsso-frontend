import { useCallback, useRef, useState } from "react";
import QuoteSection from "../../../components/_shared/QuoteSection";
import ContactForm from "../../../components/ContactForm";
import { Accordion } from "../../../components/ui/Accordion";
import { Tooltip } from "../../../components/ui/Tooltip/Tooltip";
import { medicineAccordionsContent } from "../../../contants/medicineAccordions";
import SecuritySection from "./_components/SecuritySection";

type PositionProps = "top" | "bottom" | "left" | "right";

const interactivePoints: {
  id: number;
  top: string;
  left: string;
  text: string;
  position: PositionProps;
  accordionIndex?: number;
}[] = [
  {
    id: 1,
    top: "75%",
    left: "7.5%",
    text: "Laudo de Insalubridade (NR15) e Periculosidade (NR16)",
    position: "right",
    accordionIndex: 1, // Maps to index 1 in medicineAccordionsContent
  },
  {
    id: 2,
    top: "51%",
    left: "60%",
    text: "PPRA - Programa de Prevenção de Riscos Ambientais",
    position: "right",
    accordionIndex: 3, // Maps to index 3 in medicineAccordionsContent
  },
  {
    id: 3,
    top: "70%",
    left: "79%",
    text: "CIPA - Comissão Interna de Prevenção de Acidentes",
    position: "right",
    accordionIndex: 5, // Maps to index 5 in medicineAccordionsContent
  },
  {
    id: 4,
    top: "24%",
    left: "7.5%",
    text: "LTCAT - Laudo Técnico das Condições do Ambiente de Trabalho",
    position: "right",
    accordionIndex: 6, // Maps to index 6 in medicineAccordionsContent
  },
  {
    id: 5,
    top: "74%",
    left: "40.5%",
    text: "PCMAT - Programa de Condições e Meio Ambiente de Trabalho na Indústria da Construção",
    position: "right",
    accordionIndex: 9, // Maps to index 9 in medicineAccordionsContent
  },
];

export default function WorkSafety() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [tourId, setTourId] = useState<number | null>(null);
  const hasInteractedRef = useRef(false);

  // Track currently open accordion
  const [currentOpenAccordion, setCurrentOpenAccordion] = useState<
    number | null
  >(null);

  // Create refs for each accordion
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseEnter = useCallback((id: number) => {
    hasInteractedRef.current = true;
    setTourId(null);
    setActiveId(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveId(null);
  }, []);

  // Handle button click to scroll to accordion
  const handleButtonClick = useCallback(
    (point: (typeof interactivePoints)[0]) => {
      if (point.accordionIndex !== undefined) {
        const accordionElement = accordionRefs.current[point.accordionIndex];
        if (accordionElement) {
          const accordionHeading = accordionElement.querySelector(
            '[role="button"]'
          ) as HTMLElement;

          // Check if this accordion is already open
          const isCurrentlyOpen = currentOpenAccordion === point.accordionIndex;

          // Close previously open accordion only if it's different from the current one
          if (
            currentOpenAccordion !== null &&
            currentOpenAccordion !== point.accordionIndex
          ) {
            const previousAccordionElement =
              accordionRefs.current[currentOpenAccordion];
            if (previousAccordionElement) {
              const previousAccordionHeading =
                previousAccordionElement.querySelector(
                  '[role="button"]'
                ) as HTMLElement;
              if (previousAccordionHeading) {
                // Check if accordion is open by looking for aria-expanded attribute
                const isExpanded =
                  previousAccordionHeading.getAttribute("aria-expanded") ===
                  "true";
                if (isExpanded) {
                  previousAccordionHeading.click();
                }
              }
            }
          }

          // Only click to open if it's not already open
          if (!isCurrentlyOpen && accordionHeading) {
            accordionHeading.click();
          }

          // Always scroll to the accordion
          setTimeout(
            () => {
              const updatedAccordionElement =
                accordionRefs.current[point.accordionIndex!];
              if (updatedAccordionElement) {
                const yOffset = -100;
                const y =
                  updatedAccordionElement.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;

                window.scrollTo({
                  top: y,
                  behavior: "smooth",
                });
              }
            },
            isCurrentlyOpen ? 0 : 300
          ); // No delay needed if already open
        }
      }
    },
    [currentOpenAccordion]
  );

  return (
    <main className="min-h-screen">
      {/* Quote no topo */}
      <QuoteSection>
        <p className="text-brand-400 font-medium mx-auto w-[342px] sm:w-[467px] text-[20px] sm:text-[32px]">
          Segurança não é só uma norma.
        </p>
        <p className="text-brand-400 font-medium mx-auto w-[342px] sm:w-[467px] text-[20px] sm:text-[32px]">
          É um compromisso com a vida.
        </p>
      </QuoteSection>
      <SecuritySection />

      <section className="relative w-full max-w-[1128px] mx-auto">
        <h1 className="font-medium text-2xl text-green-accents-400 pb-[40px]">
          Conheça nossas soluções em Segurança do Trabalho:
        </h1>
        <img
          src="/interactive/interactive-work-safety.webp"
          alt="Industrial Safety Overview"
          className="w-full max-h-auto object-cover rounded-3xl pb-[80px]"
        />
        {interactivePoints.map((point) => (
          <div
            key={point.id}
            className="absolute"
            style={{ top: point.top, left: point.left }}
            onMouseEnter={() => handleMouseEnter(point.id)}
            onMouseLeave={handleMouseLeave}
          >
            <Tooltip
              isVisible={activeId === point.id || tourId === point.id}
              text={point.text}
              position={point.position}
            >
              <button
                onClick={() => handleButtonClick(point)}
                className="cursor-pointer w-6 h-6 border-brand-300 border-2 bg-green-accents-400 rounded-full flex items-center justify-center text-white font-bold shadow-md hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              />
            </Tooltip>
          </div>
        ))}
      </section>

      {/* Multiple Accordions */}
      <div className="w-full max-w-[1128px] pb-[80px] mx-auto px-4 sm:px-0">
        <div className="flex flex-col gap-6">
          {medicineAccordionsContent.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                accordionRefs.current[i] = el;
              }}
            >
              <Accordion
                defaultOpen={false}
                onToggle={(isOpen) => {
                  // Track which accordion is open/closed
                  if (isOpen) {
                    setCurrentOpenAccordion(i);
                  } else if (currentOpenAccordion === i) {
                    setCurrentOpenAccordion(null);
                  }
                }}
              >
                {/* pass index+1 into the badge */}
                <Accordion.Heading
                  className="max-h-[36px] sm:max-h-[40px]"
                  index={i + 1}
                >
                  <h3 className="flex-1 font-medium sm:font-semibold">
                    {item.heading}
                  </h3>
                </Accordion.Heading>
                <Accordion.Content>{item.content}</Accordion.Content>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
      <ContactForm />
    </main>
  );
}
