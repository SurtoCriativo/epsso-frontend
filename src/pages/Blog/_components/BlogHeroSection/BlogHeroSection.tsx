export default function BlogHeroSection() {
  return (
    <section
      id="cursos"
      role="img"
      aria-label="Banner de Cursos e Treinamentos"
      aria-labelledby="titulo-cursos"
      className="relative w-full h-[440px] text-white"
      style={{
        backgroundImage: `url('/blog-page/hero-blog.webp')`,
        backgroundSize: "cover",
      }}
    >
      {/* Conteúdo */}
      <header className="relative z-20 max-w-[1128px] mx-auto h-full flex items-center px-4 md:px-0">
        <div className="max-w-[480px]">
          <h1
            id="titulo-cursos"
            className="text-[32px] sm:text-[36px] md:text-[40px] font-bold leading-tight mb-4"
          >
            Segurança em
            <br />
            foco: <span className="font-normal">boas práticas</span>
          </h1>
          <p className="text-[32px] sm:text-[36px] md:text-[40px] font-normal leading-snug">
            que salvam vidas.
          </p>
        </div>
      </header>
    </section>
  );
}
