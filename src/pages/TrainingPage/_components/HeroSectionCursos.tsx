export default function HeroSectionCursos() {
  return (
    <section
      id="cursos"
      role="img"
      aria-label="Banner de Cursos e Treinamentos"
      aria-labelledby="titulo-cursos"
      className="relative w-full h-[440px] md:h-[668px] text-white"
      style={{
        backgroundImage: `url('/trainingpage/hero-cursos.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Conteúdo */}
      <header className="relative z-20 max-w-[1128px] mx-auto h-full flex items-center px-4 md:px-0">
        <div className="max-w-[480px]">
          <h1
            id="titulo-cursos"
            className="text-[32px] sm:text-[36px] md:text-[40px] font-bold leading-tight mb-4"
          >
            Cursos
            <br />e Treinamentos:
          </h1>
          <p className="text-[32px] sm:text-[36px] md:text-[40px] font-normal leading-snug">
            Capacite sua equipe
            <br />
            com certificações
            <br />
            atualizadas.
          </p>
        </div>
      </header>
    </section>
  );
}
