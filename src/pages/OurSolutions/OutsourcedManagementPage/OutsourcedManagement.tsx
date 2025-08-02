import { useCallback, useRef, useState } from "react";
import QuoteSection from "../../../components/_shared/QuoteSection";
import ContactForm from "../../../components/ContactForm";
import { Accordion } from "../../../components/ui/Accordion";
import { Tooltip } from "../../../components/ui/Tooltip/Tooltip";
import OutsourcedManagementSection from "./_components/OutsourcedManagementSection";
import { outsourcedManagementConstants } from "../../../contants/outsourcedManagementConstants";
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
    top: "67%",
    left: "18%",
    text: "Terceirização de Técnicos em Segurança do Trabalho",
    position: "right",
    accordionIndex: 2, // Maps to index 2 in outsourcedManagementConstants
  },
  {
    id: 2,
    top: "38%",
    left: "43%",
    text: "Para seus Clientes",
    position: "right",
    accordionIndex: 1, // Maps to index 4 in outsourcedManagementConstants
  },
  {
    id: 3,
    top: "52%",
    left: "75%",
    text: "Para seus Colaboradores",
    position: "right",
    accordionIndex: 0, // Maps to index 0 in outsourcedManagementConstants
  },
];

export default function OutsourcedManagement() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [tourId, setTourId] = useState<number | null>(null);
  const hasInteractedRef = useRef(false);

  useHtmlMetaData({
    title: "EPSSO | Gestão de Terceirizados",
    metaDescription:
      "Contratar serviços de outsourcing e terceirização é uma estratégia eficiente que reduz custos, garante conformidade legal e permite que sua empresa concentre esforços no foco principal da empresa - enquanto a segurança e medicina do trabalho ficam por conta da EPSSO.",
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
          Com soluções em outsourcing e terceirização,
        </p>
        <p className="text-brand-400 font-medium mx-auto w-[372px] sm:w-[723px] text-[16px] md:text-[32px]">
          sua empresa ganha em eficiência e economia
        </p>
      </QuoteSection>
      <OutsourcedManagementSection />

      <section className="relative w-full max-w-[1128px] mx-auto">
        <h1 className="mx-auto max-w-[343px] md:pt-0 md:max-w-[1128px] text-center text-[20px] pt-4 md:text-left md:text-[24px] font-medium text-2xl text-green-accents-400">
          Conheça nossas soluções em Gestão de Serviços Terceirizados:
        </h1>
        <p className="text-center md:text-left text-[16px] md:text-[18px] text-neutral-700 pb-[40px]">
          Veja todas nossas soluções abaixo da imagem.
        </p>

        {/* image for desktop with interactive images */}
        <img
          src="/interactive/interactive-outsourced.webp"
          alt="Industrial Safety Overview"
          className="w-full max-h-auto object-cover rounded-3xl pb-[80px]"
        />

        {interactivePoints.map((point) => (
          <div
            key={point.id}
            className="hidden md:block md:absolute"
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
          {outsourcedManagementConstants.map((item, i) => (
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
        preSelectedSolution="gestao-de-terceirizados"
        pageSource="Gestão de Terceirizados"
        successMessage="Obrigado! Um especialista em Gestão de Terceirizados entrará em contato."
      />
    </main>
  );
}
