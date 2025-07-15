export default function WhoWeAreSection() {
  return (
    <section className="w-full bg-white py-[40px] md:py-[60px]">
      <div className="max-w-[1128px] mx-auto px-4 flex flex-col md:flex-row md:gap-x-[48px] md:items-start">
        {/* Imagem à esquerda (visível só no desktop) */}
        <div className="w-full md:w-[360px] order-2 md:order-1 flex-shrink-0 hidden md:block">
          <img
            src="/about/peoples.svg"
            alt="Equipe EPSSO"
            width={360}
            height={360}
            className="object-contain w-full h-auto"
          />
        </div>

        {/* Texto à direita */}
        <div className="text-left space-y-4 order-1 md:order-2 w-full md:w-[720px]">
          <h2 className="text-[24px] font-medium text-brand-400">
            EPSSO: Especialistas em Medicina e Segurança do Trabalho em Campinas
            desde 2005
          </h2>

          <p className="text-neutral-700 leading-relaxed">
            Desde 2005, a EPSSO é referência em serviços de Medicina e Segurança
            do Trabalho em Campinas, oferecendo soluções personalizadas e
            eficientes para empresas de todos os tamanhos. Com sede na cidade e
            uma ampla rede de unidades credenciadas no território nacional,
            nossa missão é criar ambientes de trabalho mais seguros, saudáveis e
            em conformidade com as normas legais.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            Nossa equipe multidisciplinar atua de forma integrada para entender
            as necessidades específicas de cada cliente, desenvolvendo projetos
            sob medida que fazem a diferença no dia a dia das organizações. Na
            EPSSO, acreditamos que cada empresa é única, e por isso nossas
            soluções são adaptadas às particularidades dos negócios dos
            clientes.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            Oferecemos uma variedade de serviços essenciais, incluindo programas
            de prevenção de riscos, PCMSO, PGR, LTCAT, AET, exames ocupacionais
            e clínicos, além de assessoria jurídica, gestão de serviços
            terceirizados (outsourcing), gestão de informações estatísticas,
            integração com o eSocial e plataformas de treinamento online. Tudo
            isso para garantir praticidade, segurança e suporte completo às
            empresas de Campinas e região.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            Nosso compromisso é elevar a qualidade de vida dos colaboradores e
            contribuir para o sucesso sustentável do seu negócio. Confie na
            EPSSO, sua parceria de confiança em Medicina e Segurança do
            Trabalho!
          </p>
        </div>
      </div>
    </section>
  );
}
