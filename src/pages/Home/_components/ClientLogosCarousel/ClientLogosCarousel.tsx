import { useEffect, useRef, useState } from "react";

const logos = [
  "/ClientCarousel/vermeer.svg",
  "/ClientCarousel/iguatemi-campinas.svg",
  "/ClientCarousel/kion-hroup.svg",
  "/ClientCarousel/Ingredion.svg",
  "/ClientCarousel/planit.svg",
  "/ClientCarousel/netwire.svg",
  "/ClientCarousel/vermeer.svg",
  "/ClientCarousel/iguatemi-campinas.svg",
  "/ClientCarousel/kion-hroup.svg",
  "/ClientCarousel/Ingredion.svg",
  "/ClientCarousel/planit.svg",
  "/ClientCarousel/netwire.svg",
];

export default function LogosCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const scrollAmount = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5;

    function step() {
      if (!track) return;
      if (!isPaused) {
        scrollAmount.current += speed;
        if (scrollAmount.current >= track.scrollWidth / 2) {
          scrollAmount.current = 0;
        }
        track.style.transform = `translateX(-${scrollAmount.current}px)`;
      }
      animationFrameId.current = requestAnimationFrame(step);
    }

    animationFrameId.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, [isPaused]);

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="overflow-hidden w-full pt-20 pb-30 bg-transparent">
      <h2 className="text-center mb-[40px] text-[32px] text-dark-green-100 font-medium select-none">
        Temos a confiança de marcas líderes de mercado
      </h2>

      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform gap-[60px]"
        style={{ transform: "translateX(0)" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedLogos.map((logo, i) => (
          <div key={i} className="flex-shrink-0">
            <img
              src={logo}
              alt={`Logo ${i + 1}`}
              className="object-contain h-[56px] w-auto"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
