import React, { useState, useEffect } from "react";

// Ícones personalizados
const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

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

const testimonials = [
  {
    avatar: "about/avatar-1.svg",
    name: "Bruna Lacerda",
    company: "CBO Análises Laboratoriais",
    comment:
      "A EPSSO acaba sendo uma extensão da CBO na parte de segurança do trabalho.",
  },
  {
    avatar: "about/avatar-2.svg",
    name: "Lécio Mauro Silva",
    company: "Promac Equipamentos",
    comment:
      "Temos o cuidado de contratar uma empresa que nos atendesse com perfeição, orientando da melhor forma sobre saúde e qualidade de vida dos colaboradores.",
  },
  {
    avatar: "about/avatar-3.svg",
    name: "Juliana Costa",
    company: "Empresa XPTO",
    comment:
      "Estamos muito satisfeitos com o serviço e o atendimento recebido pela nossa equipe.",
  },
  {
    avatar: "about/avatar-4.svg",
    name: "Carlos Souza",
    company: "Indústria ABC",
    comment:
      "A parceria tem nos ajudado a reduzir riscos e manter a conformidade.",
  },
];

const TestimonialsDesktop: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / 2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 15000); // 15 segundos
    return () => clearInterval(interval);
  }, [totalPages]);

  const prev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const next = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <div className="max-w-[1128px] mx-auto pt-28">
      <h2 className="text-3xl text-dark-green-100 font-medium text-center mb-4 w-full">
        Clientes que escolheram nossa qualidade e compromisso
      </h2>
      <p className="font-[16px] text-center mb-8 text-gray-500 w-full max-w-[960px] mx-auto">
        Empresas que priorizam a saúde e a conformidade contam com a EPSSO para
        proteger seus times e alcançar melhores resultados. Veja o que dizem
        nossos clientes.
      </p>

      <div className="relative flex items-center w-full">
        <button
          onClick={prev}
          aria-label="Voltar"
          className="w-12 h-12 p-3 bg-green-800 rounded-full flex items-center justify-center hover:brightness-110 transition-colors cursor-pointer"
        >
          <ArrowLeftIcon className="text-white" />
        </button>

        <div className="overflow-hidden flex-1 mx-6">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="flex min-w-full justify-center space-x-6"
              >
                {testimonials
                  .slice(pageIndex * 2, pageIndex * 2 + 2)
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="w-[468px] h-[268px] p-8 flex flex-col"
                      style={{
                        borderRadius: "16px",
                        border: "1px solid rgba(0, 0, 0, 0.10)",
                        background: "#FFF",
                        boxShadow:
                          "0px 4px 8px 0px rgba(0, 0, 0, 0.02), 0px 6px 12px 0px rgba(0, 0, 0, 0.03)",
                      }}
                    >
                      <div className="flex items-center mb-4">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-12 h-12 mr-3"
                        />
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-gray-500 text-sm">
                            {item.company}
                          </p>
                        </div>
                        <img
                          src="/about/icon-quotation-marks.svg"
                          alt="Aspas decorativas"
                          className="ml-auto"
                          style={{ width: "48px", height: "32px" }}
                        />
                      </div>
                      <p className="text-[18px] text-gray-700 mt-6">
                        "{item.comment}"
                      </p>
                    </div>
                  ))}
                {testimonials.slice(pageIndex * 2, pageIndex * 2 + 2).length <
                  2 && <div className="w-[468px]" />}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          aria-label="Avançar"
          className="w-12 h-12 p-3 bg-[#005B27] rounded-full flex items-center justify-center hover:brightness-110 transition-colors cursor-pointer"
        >
          <ArrowRightIcon className="text-white" />
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            className={`transition-all duration-300 ${
              i === currentPage
                ? "w-2 h-2 rounded-full bg-green-600"
                : "w-10 h-2 rounded-full bg-green-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsDesktop;
