import { testimonials } from "../../../contants/testimonials";

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export default function TeamVoicesSection() {
  return (
    <section className="w-full bg-transparent">
      {/* Container branco com sombra */}
      <div
        className="w-full"
        style={{
          borderRadius: "0px 0px 24px 24px",
          background: "var(--background-pure-white, #FFF)",
          boxShadow: "0px 16px 32px 8px rgba(0, 0, 0, 0.04)",
        }}
      >
        {/* Conteúdo interno com padding */}
        <div className="max-w-[1128px] mx-auto text-center pt-[120px] pb-[120px]">
          <h2 className="text-brand-400 text-[24px] font-bold mb-12">
            Aqui, construímos juntos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="w-[264px] p-8 bg-white border border-black/10 rounded-[16px] shadow-[0px_4px_8px_rgba(0,0,0,0.02),_0px_6px_12px_rgba(0,0,0,0.03)] text-left flex flex-col gap-4 self-start relative"
              >
                <img
                  src="/about/icon-quotation-marks.svg"
                  alt="Aspas"
                  width={48}
                  height={32}
                  className="absolute top-6 right-6"
                />
                <div className="flex items-center gap-3">
                  <div className="w-[32px] h-[32px] rounded-[8px] overflow-hidden">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="w-[152px]">
                    <p className="text-black text-[16px] font-medium not-italic leading-tight mb-1">
                      {item.name}
                    </p>
                    <p className="text-gray-400 text-[14px] font-normal not-italic leading-tight">
                      {item.role}
                    </p>
                  </div>
                </div>
                <p className="text-neutral-900 text-[16px] font-normal not-italic leading-relaxed">
                  {item.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
