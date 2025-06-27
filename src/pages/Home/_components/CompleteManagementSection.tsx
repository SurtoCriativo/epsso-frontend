import { managementFeatures } from "../../../contants/managementFeatures";

export default function CompleteManagementSection() {
  return (
    <section
      className="bg-gradient-to-b from-[#037b3f] to-[#026b39] pt-[80px] pb-[80px] px-[76px] text-white"
      role="region"
      aria-labelledby="complete-management-heading"
    >
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2
          id="complete-management-heading"
          className="text-white leading-snug"
          style={{
            fontSize: "28px",
            fontWeight: 500,
            fontStyle: "normal",
            fontFamily: '"GT Walsheim", sans-serif',
          }}
        >
          Gestão completa para cuidar
          <br />
          da saúde e segurança do seu negócio
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {managementFeatures.map((item, index) => (
          <article
            key={index}
            className="w-[360px] h-[137px] bg-white/5 rounded-xl pt-4 pr-4 pb-6 pl-4 flex flex-col justify-between mx-auto"
            role="group"
            aria-labelledby={`feature-title-${index}`}
          >
            <div className="bg-white/10 p-3 rounded-lg w-fit">
              <img
                src={item.icon}
                alt=""
                aria-hidden="true"
                className="w-5 h-5"
              />
            </div>
            <h3
              id={`feature-title-${index}`}
              className="text-[#90e994] font-bold text-lg"
            >
              {item.title}
            </h3>
            <p className="text-white/80 text-sm leading-snug">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
