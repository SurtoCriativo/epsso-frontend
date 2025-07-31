import { useCallback, useRef, useState } from "react";
import QuoteSection from "../../../components/_shared/QuoteSection";
import ContactForm from "../../../components/ContactForm";
import { Accordion } from "../../../components/ui/Accordion";
import { Tooltip } from "../../../components/ui/Tooltip/Tooltip";
import MedicineSection from "./_components/MedicineSection";
import { medicineConstants } from "../../../contants/medicineConstants";
import useHtmlMetaData from "../../../hooks/useHtmlMetaData";

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
    top: "53.5%",
    left: "29.5%",
    text: "PCMSO (Programa de Controle Médico de Saúde Ocupacional)",
    position: "right",
    accordionIndex: 4, // Maps to index 4 in medicineConstants
  },
  {
    id: 2,
    top: "66%",
    left: "41.5%",
    text: "Montagem de ambulatório médico",
    position: "right",
    accordionIndex: 6, // Maps to index 6 in medicineConstants
  },
  {
    id: 3,
    top: "43%",
    left: "57%",
    text: "Exames clínicos e complementares (NR-7)",
    position: "right",
    accordionIndex: 5, // Maps to index 5 in medicineConstants
  },
  {
    id: 4,
    top: "25%",
    left: "73.5%",
    text: "Software de Gestão de Saúde Ocupacional",
    position: "right",
    accordionIndex: 0, // Maps to index 0 in medicineConstants
  },
  {
    id: 5,
    top: "61%",
    left: "79%",
    text: "Campanhas de vacinação",
    position: "right",
    accordionIndex: 8, // Maps to index 8 in medicineConstants
  },
];

export default function OccupationalMedicine() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [tourId, setTourId] = useState<number | null>(null);
  const hasInteractedRef = useRef(false);

  useHtmlMetaData({
    title: "EPSSO | Medicina do Trabalho",
    metaDescription:
      "A saúde dos seus colaboradores é fundamental para o bem estar da equipe e também para o sucesso do seu negócio. Na EPSSO, nosso objetivo é oferecer soluções de Medicina do Trabalho que atendam às necessidades específicas da sua empresa, sempre seguindo as normas regulamentadoras.",
  });

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
                const yOffset = -97;
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
    <main className="px-0 w-full mx-auto">
      {/* Quote no topo */}
      <QuoteSection>
        <p className="text-brand-400 font-medium mx-auto w-[372px] sm:w-[723px] text-[16px] md:text-[32px]">
          Quando a saúde da sua equipe está em equilíbrio,
        </p>
        <p className="text-brand-400 font-medium mx-auto w-[372px] sm:w-[723px] text-[16px] md:text-[32px]">
          o sucesso da sua empresa também aumenta.
        </p>
      </QuoteSection>
      <MedicineSection />
      {/* image for mobile without interactive points */}
      <img
        src="/interactive/interactive-occupational-medicine.webp"
        alt="Industrial Safety Overview"
        className="block sm:hidden w-full h-auto object-cover rounded-2xl mt-[80px] pb-[80px]"
      />

      <section className="relative w-full max-w-[1128px] mx-auto">
        <h1 className="mx-auto py-6 max-w-[343px] md:pt-0 md:max-w-[1128px] text-center text-[20px] md:text-left md:text-[24px] font-medium text-2xl text-green-accents-400 pb-[40px]">
          Conheça nossas soluções em Medicina do Trabalho:
        </h1>

        {/* image for desktop with interactive images */}
        <div className="hidden sm:block">
          <img
            src="/interactive/interactive-occupational-medicine.webp"
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
        </div>
      </section>

      {/* Multiple Accordions */}
      <div className="w-full max-w-[1128px] pb-[80px] mx-auto px-4 sm:px-0">
        <div className="flex flex-col gap-6">
          {medicineConstants.map((item, i) => (
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
                <Accordion.Content className="whitespace-pre-line">
                  {item.content}
                </Accordion.Content>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
      <ContactForm
        preSelectedSolution="medicina-do-trabalho"
        pageSource="Medicina do Trabalho"
        successMessage="Obrigado! Um especialista em Medicina do Trabalho entrará em contato."
      />
    </main>
  );
}
