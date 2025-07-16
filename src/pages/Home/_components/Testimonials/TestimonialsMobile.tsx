import React, { useState, useEffect } from "react";

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

const TestimonialsMobile: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = testimonials.length;

  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 9000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 50) {
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    } else if (deltaX < -50) {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }
  };

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h2 className="text-[24px] font-medium text-center w-full mb-4">
        Clientes que escolheram nossa qualidade e compromisso
      </h2>

      <p className="text-[16px] font-medium text-center text-gray-500 max-w-[328px] mx-auto mb-10">
        Empresas que priorizam a saúde e a conformidade contam com a EPSSO para
        proteger seus times e alcançar melhores resultados. Veja o que dizem
        nossos clientes.
      </p>

      <div
        className="overflow-hidden w-[328px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${totalPages * 328}px`,
            transform: `translateX(-${currentPage * 328}px)`,
          }}
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[328px] h-[260px] p-8 flex flex-col flex-shrink-0"
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
                  <p className="text-gray-500 text-sm">{item.company}</p>
                </div>
                <img
                  src="/about/icon-quotation-marks.svg"
                  alt="Aspas decorativas"
                  className="ml-auto"
                  style={{ width: "48px", height: "32px" }}
                />
              </div>
              <p className="text-gray-700 italic mt-auto">"{item.comment}"</p>
            </div>
          ))}
        </div>
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

export default TestimonialsMobile;
