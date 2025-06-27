import { Link } from "react-router-dom";

export default function ErgonomicsSection() {
  return (
    <section className="w-full bg-white py-[120px] px-4">
      <div className="w-[1208px] mx-auto space-y-[56px]">
        {/* Card 1: Ergonomia */}
        <div
          className="bg-[#F1FBF7] rounded-xl flex items-center justify-between px-6 py-6"
          style={{ height: "359px" }}
        >
          <div className="max-w-[552px] flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h3
                className="text-green-800"
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  fontFamily: "GT Walsheim, sans-serif",
                  lineHeight: "120%",
                }}
              >
                Mais conforto, menos riscos:
                <br />o bem-estar começa com ergonomia
              </h3>
              <p
                className="text-zinc-700"
                style={{
                  fontSize: "14px",
                  fontFamily: "GT Walsheim, sans-serif",
                  fontWeight: 400,
                  lineHeight: "150%",
                }}
              >
                Nossa equipe desenvolve programas personalizados para prevenir
                lesões, melhorar a qualidade de vida e garantir mais conforto e
                segurança. Com fisioterapia ocupacional e soluções ergonômicas
                eficientes, ajudamos sua empresa a cuidar daquilo que mais
                importa: as pessoas.
              </p>
            </div>
            <Link
              to="#"
              className="w-[347px] h-[48px] text-sm pr-6 pl-8 inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-medium rounded-full shadow-sm transition"
              aria-label="Conheça nossos programas de ergonomia"
            >
              Conheça nossos programas de ergonomia
              <img
                src="/crooked-arrow.svg"
                alt=""
                className="w-4 h-4"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div
            className="flex justify-center items-center"
            role="img"
            aria-label="Fisioterapeuta aplicando exercício em paciente com dor no pescoço"
          >
            <img
              src="/conforto.png"
              alt="Fisioterapeuta aplicando exercício em paciente"
              width={552}
              height={311}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Card 2: Terceirizados */}
        <div
          className="bg-[#F1FBF7] rounded-xl flex items-center justify-between px-6 py-6"
          style={{ height: "359px" }}
        >
          <div
            className="flex justify-center items-center"
            role="img"
            aria-label="Equipe discutindo estratégias com notebook"
          >
            <img
              src="/terceirizados.png"
              alt="Grupo de profissionais reunidos em torno de um notebook"
              width={552}
              height={311}
              className="rounded-xl object-cover"
            />
          </div>

          <div className="max-w-[552px] flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h3
                className="text-green-800"
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  fontFamily: "GT Walsheim, sans-serif",
                  lineHeight: "120%",
                }}
              >
                Sua empresa mais segura com
                <br />
                terceirizados qualificados
              </h3>
              <p
                className="text-zinc-700"
                style={{
                  fontSize: "14px",
                  fontFamily: "GT Walsheim, sans-serif",
                  fontWeight: 400,
                  lineHeight: "150%",
                }}
              >
                A EPSSO seleciona, treina e gerencia especialistas como médicos,
                enfermeiros, técnicos, psicólogos, fisioterapeutas e engenheiros
                de segurança. Garantimos suporte especializado para que sua
                empresa opere com eficiência e segurança.
              </p>
            </div>
            <Link
              to="#"
              className="w-[379px] h-[48px] pr-6 pl-8 text-sm inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-medium rounded-full shadow-sm transition"
              aria-label="Saiba mais sobre nossa gestão de terceirizados"
            >
              Saiba mais sobre nossa gestão de terceirizados
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
