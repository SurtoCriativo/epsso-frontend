import { Link } from "react-router-dom";

export default function CourseSection() {
  return (
    <section className="relative w-full h-[460px] md:h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 h-[360px]">
        <img
          src="./cursos.png" // salve a imagem com esse nome na pasta /public/images
          alt="Bombeiros combatendo incêndio"
          className="w-full h-full object-cover object-center"
          height={360}
        />
        {/* Sobreposição escura para contraste do texto */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 px-4 max-w-2xl">
        <h2 className="text-lg md:text-xl font-medium leading-snug">
          Proteja vidas e o seu negócio com treinamentos personalizados.
          <br />
          Capacite sua equipe para agir com segurança.
        </h2>

        <div className="mt-6 flex justify-center">
          <Link
            to="/cursos"
            className="w-[243px] h-[48px] pr-6 pl-8 text-sm inline-flex items-center justify-center gap-2 bg-white text-green-accents-500 font-medium rounded-full shadow hover:bg-gray-100 transition"
          >
            Conheça nossos cursos
            <img
              src="/crooked-green-arrow.svg"
              alt=""
              className="w-4 h-4"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
