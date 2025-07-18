import { Link } from "react-router-dom";

export default function HeroSectionMobile() {
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
      className="relative w-full h-[668px] text-white px-4 py-10 overflow-hidden"
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
          <span
            className="font-extrabold"
            style={{ ...commonStyle, color: "#899E3C" }}
          >
            hoje
          </span>
          ,
          <br />
          para construir um <br />
          <span
            className="font-extrabold"
            style={{ ...commonStyle, color: "#69BF64" }}
          >
            amanhã
          </span>{" "}
          melhor.
        </h1>

        {/* Botão com espaçamento de 40px */}
        <div className="mt-10">
          <Link to="/fale-conosco">
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
          </Link>
        </div>
      </div>

      {/* Imagem do mobile fixa no canto inferior esquerdo e com largura total */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src="/hero/hero-mobile.svg"
          alt="Pessoas"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
