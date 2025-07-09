export default function PurposeSection() {
  return (
    <section className="w-full bg-white py-[120px]">
      <div className="max-w-[1128px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto à esquerda */}
        <div className="text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 mb-4">
            <img
              src="/about/message-square.svg" // Ajuste aqui se o caminho do ícone mudar
              alt="Ícone"
              width={16}
              height={16}
            />
            <span>SOMOS A EPSSO</span>
          </div>

          {/* Título */}
          <h2 className="text-[24px] font-medium text-brand-400 mb-6">
            Nosso Propósito
          </h2>

          {/* Parágrafo 1 */}
          <p className="text-neutral-700 leading-relaxed mb-4 max-w-[600px]">
            Na EPSSO, nosso propósito é claro e inspirador: proteger o hoje das
            empresas e de seus colaboradores para construir um amanhã mais
            seguro, saudável e sustentável.
          </p>

          {/* Parágrafo 2 */}
          <p className="text-neutral-700 leading-relaxed max-w-[600px]">
            Como uma consultoria especializada em Medicina e Segurança do
            Trabalho, acreditamos que investir na saúde e na segurança no
            presente é fundamental para garantir o crescimento e o sucesso
            duradouro das organizações. Esta é, na nossa visão, a forma mais
            sólida de construir um futuro promissor para todos.
          </p>
        </div>

        {/* Imagem à direita */}
        <div className="relative w-full max-w-[540px] ml-auto">
          <div className="overflow-hidden rounded-r-[40px]">
            <img
              src="/about/child.svg"
              alt="Menino com capacete brincando com blocos"
              width={540}
              height={421}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
