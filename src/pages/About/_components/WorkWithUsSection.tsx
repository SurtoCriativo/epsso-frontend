import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function WorkWithUsSection() {
  return (
    <section className="w-full bg-neutral-100 py-[120px]">
      <div className="max-w-[1128px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Imagem à esquerda */}
        <div className="relative w-full h-auto flex justify-center">
          <img
            src="/purpose/group-people.svg"
            alt="Equipe EPSSO"
            width={361}
            height={376}
            className="object-contain"
          />
        </div>

        {/* Texto + Botão */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-[8px] px-[12px] py-[8px] w-max rounded-[16px]"
            style={{
              background: "#E2F8EE",
            }}
          >
            <img
              src="/purpose/message-square.svg"
              alt="Mensagem"
              width={16}
              height={16}
            />
            <span
              className="font-medium"
              style={{
                color: "#087C33",
                fontSize: "10px",
                fontStyle: "normal",
                fontWeight: 500,
              }}
            >
              VENHA FAZER A DIFERENÇA
            </span>
          </div>

          {/* Título */}
          <h2 className="text-[28px] font-semibold text-brand-400">
            Trabalhe conosco
          </h2>

          {/* Parágrafo */}
          <p className="text-neutral-700 text-[16px] leading-relaxed">
            Quer fazer a diferença com a gente? Venha impactar vidas e
            impulsionar o amanhã! Envie seu currículo agora mesmo.
          </p>

          {/* Botão com Link e Seta */}
          <Link
            to="/carreiras" // <-- Atualize o destino depois
            className="mt-2 inline-flex items-center justify-center gap-2 w-[248px] h-[48px] rounded-full bg-brand-500 text-white text-[14px] font-medium hover:bg-brand-700 transition"
          >
            Veja nossas vagas abertas
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
