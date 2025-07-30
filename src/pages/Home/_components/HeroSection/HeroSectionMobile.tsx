import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function HeroSectionMobile() {
  // Preload critical mobile hero image for better LCP
  useEffect(() => {
    const preloadImage = (src: string) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    };

    preloadImage("/hero/hero-mobile.webp");
  }, []);

  const commonStyle = {
    fontFamily: "Lexend, sans-serif",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "110%",
    letterSpacing: "-2px",
  };

  return (
    <section
      className="relative w-full h-[668px] text-white px-4 pt-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0.24) 100%), linear-gradient(180deg, var(--background-green-lighter, #007A2B) 0%, var(--background-green-light, #005B27) 100%)",
      }}
    >
      {/* Container do conteúdo */}
      <div className="w-[328px] h-[120px] m-0 flex flex-col items-start">
        {/* Texto */}
        <h1 style={commonStyle}>
          Protegendo o{" "}
          <span className="font-extrabold text-brand-300" style={commonStyle}>
            hoje
          </span>
          ,<br />
          para construir um <br />
          <span className="font-extrabold text-brand-300" style={commonStyle}>
            amanhã
          </span>{" "}
          melhor.
        </h1>

        {/* Botão com espaçamento de 40px */}
        <div className="mt-10">
          <Link to="/fale-conosco">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-light w-[189px] h-[48px] rounded-full transition hover:opacity-90 cursor-pointer"
              style={{
                fontFamily: '"GT Walsheim", sans-serif',
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "20px",
              }}
            >
              Fale com a gente
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Imagem do mobile fixa no canto inferior esquerdo e com largura total */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src="/hero/hero-mobile.webp"
          alt="Pessoas"
          className="w-full h-auto object-contain"
          // Add dimensions for better performance
          width={390}
          height={400}
          // Remove lazy loading for potential LCP image
          decoding="async"
          // High priority for LCP image
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
