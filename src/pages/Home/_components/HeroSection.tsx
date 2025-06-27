export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#007A2B] to-[#005B27] text-white overflow-hidden">
      {/* SVG decorativo de fundo */}
      <div className="absolute right-0 top-0 z-0 hidden md:block">
        <img
          src="/hero/hero-background.svg"
          alt="Fundo decorativo"
          width={700}
          height={700}
          className="object-contain pointer-events-none select-none"
        />
      </div>

      {/* Container principal */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:grid md:grid-cols-2 md:items-center md:gap-8 lg:px-8">
        {/* Texto à esquerda */}
        <div className="space-y-8 text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug">
            Protegendo o{" "}
            <span className="text-[#899E3C] font-extrabold">hoje</span>,
            <br />
            para construir um <br />
            <span className="text-[#69BF64] font-extrabold">amanhã</span>{" "}
            melhor.
          </h1>

          <button className="inline-flex items-center px-6 py-3 bg-white text-[#005B27] font-medium rounded-full hover:opacity-90 transition">
            Fale com a gente
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Imagem à direita */}
        <div className="relative z-10 mt-12 md:mt-0">
          <img
            src="/hero/hero-img-peoples.png"
            alt="Pessoas"
            width={650}
            height={600}
            className="ml-auto"
            // priority
          />
        </div>
      </div>
    </section>
  );
}
