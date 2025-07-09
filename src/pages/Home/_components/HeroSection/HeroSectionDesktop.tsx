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
          src="/hero/hero-background.svg"
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
              style={{ fontFamily: "Lexend, sans-serif" }} // caso não tenha configurado no Tailwind
            >
              Protegendo o <span className="text-[#899E3C]">hoje</span>,
              <br />
              para construir um <br />
              <span className="text-[#69BF64]">amanhã</span> melhor.
            </h1>
          </div>

          <button
            type="button"
            className="inline-flex items-center px-6 py-3 bg-white text-[#005B27] font-medium rounded-full hover:opacity-90 transition"
          >
            Fale com a gente
            <svg
              aria-hidden="true"
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Wrapper da imagem */}
        <div
          className="relative mt-12 md:mt-0"
          style={{ width: 690, height: 668 }}
        >
          <img
            src="/hero/hero-people.svg"
            alt="Pessoas"
            width={690}
            height={604}
            className="absolute bottom-0 right-0 select-none pointer-events-none"
            loading="lazy"
            decoding="async"
            draggable={false}
            style={{ width: 690, height: 604 }}
          />
        </div>
      </div>
    </section>
  );
}
