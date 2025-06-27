export default function TestimonialsSection() {
  return (
    <section className="bg-[#F1F4F2] py-16 px-4">
      {/* Título principal */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-[32px] md:text-3xl font-medium text-[#1A1A1A]">
          Confiança de quem valoriza a saúde <br /> e a segurança no dia a dia
        </h2>
        <p className="w-[936px] mt-4 text-sm font-normal text-gray-600">
          Empresas que priorizam a saúde e a conformidade contam com a EPSSO
          para proteger seus times e alcançar melhores resultados.
          <br />
          Veja o que dizem nossos clientes.
        </p>
      </div>

      {/* Depoimento em texto */}
      <div className="bg-[#0D2D14] text-white rounded-xl p-6 max-w-7xl mx-auto mb-10">
        <p className="text-2xl mb-4">❝</p>
        <p className="text-sm md:text-base">
          Os trabalhos prestados foram excelentes. Os prazos foram cumpridos e
          os profissionais são atenciosos e prestativos. Além de possuir um
          preço competitivo no mercado, a EPSSO se mostrou uma empresa que
          possui profissionais qualificados para o atendimento em saúde
          ocupacional, o que vejo como uma grande dificuldade em outras
          empresas.
        </p>
        <p className="mt-6 font-semibold">Flávia Secco</p>
        <p className="text-sm">
          Qualidade, Saúde, Segurança e Meio Ambiente da GRAN BIO CELERE
        </p>
        <a
          href="http://granbio.com.br"
          className="text-green-400 text-sm underline"
        >
          http://granbio.com.br/
        </a>
      </div>

      {/* Vídeos de depoimento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto mb-16">
        <div className="overflow-hidden rounded-xl">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="EPSSO | Depoimento Cliente X"
            allowFullScreen
          />
        </div>
        <div className="overflow-hidden rounded-xl">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="EPSSO | Depoimento Cliente Y"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
