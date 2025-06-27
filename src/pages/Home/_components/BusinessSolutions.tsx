import { Link } from "react-router-dom";

export default function SolucoesEmpresariais() {
  return (
    <section
      className="w-full pt-20 px-4 mb-[120px]"
      style={{
        background:
          "linear-gradient(180deg, var(--bg-light, #F1FBF7) 0%, var(--bg-white, #FFF) 100%)",
      }}
      role="region"
      aria-labelledby="solucoes-heading"
    >
      <div className="w-[1208px] mx-auto space-y-[56px]">
        {/* Badge + Título */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#E6F4EC] text-green-700 text-sm px-3 py-1 rounded-full font-medium mb-4">
            <img
              src="/check-solution.svg"
              alt=""
              className="w-4 h-4"
              aria-hidden="true"
            />
            <span className="sr-only">Categoria: Soluções</span>
            Soluções
          </div>
          <h2
            id="solucoes-heading"
            className="text-zinc-900 max-w-[520px] leading-[110%]"
            style={{
              fontSize: "32px",
              fontWeight: 500,
              fontFamily: '"GT Walsheim", sans-serif',
              whiteSpace: "pre-line",
            }}
          >
            Protegemos seu time e seu negócio
            {"\n"}
            com soluções especializadas
          </h2>
        </div>

        {/* Card 1: Segurança */}
        <div
          className="bg-[#F1FBF7] rounded-xl flex items-center justify-between px-6 py-6"
          style={{ width: "1208px", height: "359px" }}
          role="group"
          aria-labelledby="seguranca-heading"
        >
          {/* Texto */}
          <div className="max-w-[552px] flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h3
                id="seguranca-heading"
                className="text-green-800"
                style={{
                  fontSize: "24px",
                  fontWeight: 500, // Atualizado para 500
                  fontFamily: '"GT Walsheim", sans-serif',
                  lineHeight: "120%",
                }}
              >
                Segurança não é só uma norma, é um compromisso com a vida
              </h3>
              <p
                className="text-zinc-700"
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  fontFamily: '"GT Walsheim", sans-serif',
                  lineHeight: "150%",
                }}
              >
                A EPSSO protege sua equipe com soluções completas: assessoria
                especializada, treinamentos e laudos técnicos. Mais do que
                reduzir riscos, ajudamos sua empresa a fazer da segurança um
                valor inegociável.
              </p>
            </div>
            <Link
              to="#"
              className="w-[309px] h-[48px] pr-6 pl-8 text-sm font-medium inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white rounded-full shadow-sm transition"
              aria-label="Garanta a segurança da sua equipe"
            >
              Garanta a segurança da sua equipe
              <img
                src="/crooked-arrow.svg"
                alt=""
                className="w-4 h-4"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Imagem */}
          <div
            className="flex justify-center items-center"
            role="img"
            aria-label="Profissionais se cumprimentando usando Equipamentos de Proteção Individual"
          >
            <img
              src="/compromisso.png"
              alt="Profissionais usando EPI se cumprimentando"
              width={552}
              height={311}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Card 2: Saúde */}
        <div
          className="bg-[#F1FBF7] rounded-xl flex items-center justify-between px-6 py-6"
          style={{ width: "1208px", height: "359px" }}
          role="group"
          aria-labelledby="saude-heading"
        >
          {/* Imagem */}
          <div
            className="flex justify-center items-center"
            role="img"
            aria-label="Profissional da saúde examinando trabalhador"
          >
            <img
              src="/saude.png"
              alt="Profissional da saúde realizando exame ocupacional em trabalhador"
              width={552}
              height={311}
              className="rounded-xl object-cover"
            />
          </div>

          {/* Texto */}
          <div className="max-w-[552px] flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h3
                id="saude-heading"
                className="text-green-800"
                style={{
                  fontSize: "24px",
                  fontWeight: 500, // Atualizado para 500
                  fontFamily: '"GT Walsheim", sans-serif',
                  lineHeight: "120%",
                }}
              >
                Cuidar da saúde da sua equipe é investir no sucesso da sua
                empresa
              </h3>
              <p
                className="text-zinc-700"
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  fontFamily: '"GT Walsheim", sans-serif',
                  lineHeight: "150%",
                }}
              >
                Nossa equipe de Saúde Ocupacional previne riscos, monitora a
                saúde e antecipa diagnósticos, garantindo bem-estar para sua
                equipe e tranquilidade para sua empresa.
              </p>
            </div>
            <Link
              to="#"
              className="w-[272px] h-[48px] pr-6 pl-8 text-sm inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-medium rounded-full shadow-sm transition"
              aria-label="Cuide da saúde da sua equipe"
            >
              Cuide da saúde da sua equipe
              <img
                src="/crooked-arrow.svg"
                alt=""
                className="w-4 h-4"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
