import { useEffect, useRef, useState, useCallback, useMemo } from "react";

const CAROUSEL_CONFIG = {
  speed: 0.5,
  gap: 60,
  logoHeight: 56,
  logoWidth: 120,
} as const;

const logoData = [
  { src: "/ClientCarousel/iguatemi-campinas.svg", alt: "Iguatemi Campinas" },
  { src: "/ClientCarousel/kion-group.svg", alt: "Kion Group" },
  { src: "/ClientCarousel/ingredion.svg", alt: "Ingredion" },
  { src: "/ClientCarousel/planit.svg", alt: "Planit" },
  { src: "/ClientCarousel/netwire.svg", alt: "Netwire" },
  { src: "/ClientCarousel/vermeer.svg", alt: "Vermeer" },
  { src: "/ClientCarousel/candido-ferreira.svg", alt: "Cândido Ferreira" },
  { src: "/ClientCarousel/gowan-brasil.svg", alt: "Gowan Brasil" },
  { src: "/ClientCarousel/mcsol.svg", alt: "McSol" },
  { src: "/ClientCarousel/enforce.svg", alt: "Enforce" },
  { src: "/ClientCarousel/agis.svg", alt: "Agis" },
] as const;

export default function LogosCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const scrollAmount = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  // Triple the logos to ensure seamless infinite scroll
  const duplicatedLogos = useMemo(
    () => [...logoData, ...logoData, ...logoData],
    []
  );

  // Preload logo images for better performance
  useEffect(() => {
    const uniqueLogos = Array.from(new Set(logoData.map((logo) => logo.src)));

    const preloadImage = (src: string) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    };

    // Preload all unique logo images
    uniqueLogos.forEach(preloadImage);
  }, []);

  const step = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    if (!isPaused) {
      scrollAmount.current += CAROUSEL_CONFIG.speed;

      // Reset when we've scrolled one full set (1/3 of total width)
      const resetPoint = track.scrollWidth / 3;
      if (scrollAmount.current >= resetPoint) {
        scrollAmount.current = 0;
      }

      track.style.transform = `translateX(-${scrollAmount.current}px)`;
    }
    animationFrameId.current = requestAnimationFrame(step);
  }, [isPaused]);

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [step]);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  return (
    <section
      className="overflow-hidden w-full pt-20 pb-24 bg-transparent"
      aria-label="Client logos carousel"
    >
      <h2 className="text-center mb-[40px] text-[24px] md:text-[32px] text-dark-green-100 font-medium select-none">
        Temos a confiança de marcas líderes de mercado
      </h2>

      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform"
        style={{
          transform: "translateX(0)",
          gap: `${CAROUSEL_CONFIG.gap}px`,
          width: "fit-content",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="marquee"
        aria-label="Scrolling client logos"
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.src}-${index}`}
            className="flex-shrink-0"
            role="img"
            aria-label={logo.alt}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="object-contain select-none"
              style={{
                height: `${CAROUSEL_CONFIG.logoHeight}px`,
                width: "auto",
              }}
              width={CAROUSEL_CONFIG.logoWidth}
              height={CAROUSEL_CONFIG.logoHeight}
              decoding="async"
              draggable={false}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                console.warn(`Failed to load logo: ${logo.src}`);
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
