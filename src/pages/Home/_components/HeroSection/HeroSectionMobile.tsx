import { useEffect } from "react";

export default function HeroSectionMobile() {
  useEffect(() => {
    const preloadImage = (src: string) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    };

    preloadImage("/hero/imagem-header-profissionais-mobile.webp");
  }, []);

  const commonStyle = {
    fontFamily: "Lexend, sans-serif",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "110%",
    letterSpacing: "-2px",
  };

  // Função para scroll suave com múltiplas tentativas
  const scrollToForm = () => {
    const tryScroll = (attempt = 1) => {
      const el = document.getElementById("formulario-contato");

      if (el) {
        // Verifica se o elemento está visível
        const rect = el.getBoundingClientRect();
        const isVisible = rect.height > 0 && rect.width > 0;

        if (isVisible) {
          // Scroll com offset para não ficar colado no topo
          const yOffset = -80;
          const y = rect.top + window.pageYOffset + yOffset;

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
          return;
        }
      }

      // Se não encontrou ou não está visível, tenta novamente
      if (attempt < 5) {
        setTimeout(() => tryScroll(attempt + 1), 300);
      }
    };

    tryScroll();
  };

  return (
    <section
      className="relative w-full h-[668px] text-white px-4 pt-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0.24) 100%), linear-gradient(180deg, var(--background-green-lighter, #007A2B) 0%, var(--background-green-light, #005B27) 100%)",
        isolation: "isolate", // ADICIONADO: Cria contexto de empilhamento isolado
      }}
    >
      {/* Container do conteúdo */}
      <div className="w-[328px] h-[120px] m-0 flex flex-col items-start">
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

        {/* Botão com scroll suave */}
        <div className="mt-10">
          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2 bg-white text-green-light w-[189px] h-[48px] rounded-full transition hover:opacity-90 cursor-pointer relative z-[1]" // ALTERADO: z-50 para z-[1] + isolation resolve o problema
            style={{
              fontFamily: '"GT Walsheim", sans-serif',
              fontSize: "14px",
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
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <img
          src="/hero/imagem-header-profissionais-mobile.webp"
          alt="Pessoas"
          className="w-full h-auto object-contain"
          width={390}
          height={400}
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
