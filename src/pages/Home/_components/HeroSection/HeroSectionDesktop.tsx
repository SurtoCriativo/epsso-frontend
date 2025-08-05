// Ícone reutilizado
const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[668px] text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0.24) 100%), linear-gradient(180deg, var(--background-green-lighter, #007A2B) 0%, var(--background-green-light, #005B27) 100%)",
      }}
      aria-label="Seção principal do site com chamada para ação"
    >
      {/* SVG decorativo de fundo */}
      <div
        className="absolute right-0 top-0 z-0 hidden md:block"
        aria-hidden="true"
      >
        <img
          src="/hero/background.webp"
          alt=""
          width={556}
          height={668}
          className="object-contain pointer-events-none select-none"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>

      {/* Container principal alinhado */}
      <div className="relative z-10 mx-auto max-w-[1128px] h-full grid md:grid-cols-2 md:items-center px-4 md:px-0">
        {/* Texto à esquerda */}
        <div className="space-y-8 text-left">
          <div className="w-full max-w-[648px] h-[210px]">
            <h1
              className="font-lexend text-[64px] font-medium leading-[110%] tracking-[-0.03em]"
              style={{ fontFamily: "Lexend, sans-serif" }}
            >
              Protegendo o <span className="text-brand-300">hoje</span>,
              <br />
              para construir um <br />
              <span className="text-brand-300">amanhã</span> melhor.
            </h1>
          </div>

          {/* 🚀 Botão ajustado para scroll suave */}
          <a href="#formulario-contato">
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
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </a>
        </div>

        {/* Wrapper da imagem */}
        <div
          className="relative mt-12 md:mt-0"
          style={{ width: 690, height: 668 }}
        >
          <img
            src="/hero/imagem-profissionais-hero.webp"
            alt="Pessoas"
            width={690}
            height={604}
            className="absolute bottom-0 right-0 select-none pointer-events-none"
            decoding="async"
            draggable={false}
            style={{ width: 690, height: 604 }}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
