import { ourValues } from "../../../contants/ourValues";

export default function ValuesSection() {
  return (
    <section className="w-full">
      {/* Imagem de topo responsiva com foco central no mobile */}
      <div className="w-full overflow-hidden">
        <img
          src="/about/value-peoples.svg"
          alt="Equipe de trabalho"
          width={1920}
          height={320}
          className="w-full object-cover object-center h-[250px] md:h-auto"
        />
      </div>

      {/* Bloco verde com gradiente + border radius */}
      <div
        className="w-full w-full py-[80px] md:py-[120px] text-white"
        style={{
          borderRadius: "0px 0px 16px 16px",
          background:
            "linear-gradient(213deg, var(--bg-accent, #007A2B) 39.27%, var(--accent-green-dark, #005B27) 100%)",
        }}
      >
        <div className="max-w-[740px] mx-auto px-4">
          {/* Título */}
          <div className="mb-12">
            <div className="h-[2px] w-10 bg-brand-300 mb-2" />
            <h2 className="text-[24px] font-medium">Nossos Valores</h2>
          </div>

          {/* Grid de valores */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[100px] md:gap-y-[100px]">
            {ourValues.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col space-y-4 ${
                  index > 0 ? "mt-[40px]" : ""
                } md:mt-0`}
              >
                {/* Ícone */}
                <div className="w-[48px] h-[48px] p-[12px] bg-brand-300 rounded flex items-center justify-center">
                  {item.icon}
                </div>

                {/* Título */}
                <h3 className="text-white text-[20px] font-medium">
                  {item.title}
                </h3>

                {/* Texto */}
                <p className="text-white text-[14px] font-normal not-italic leading-relaxed w-[328px] md:w-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
