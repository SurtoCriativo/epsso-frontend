import { Link } from "react-router-dom";

export default function Footer() {
  const headingStyle =
    "font-medium text-[20px] leading-[160%] pt-2 text-center md:text-left";
  const linkStyle = "hover:text-brand-300 transition-colors duration-200";
  const listStyle =
    "text-base leading-[2.2] text-white font-normal text-center md:text-left mt-[24px]";

  return (
    <footer className="bg-neutral text-white py-10 px-6">
      <div className="max-w-[1128px] mx-auto">
        {/* Grid responsivo: empilha no mobile */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center md:items-start gap-y-12 md:gap-y-28 text-center md:text-left">
          {/* Coluna 1: Logo + Redes Sociais */}
          <div className="flex flex-col items-center md:items-center justify-center pt-2 min-w-[128px]">
            {" "}
            <img
              src="/logo-epsso-footer.svg"
              alt="Logo EPSSO"
              width={144}
              height={44}
            />{" "}
            <div className="flex gap-4 mt-4 md:mt-4">
              {" "}
              <a
                href="https://br.linkedin.com/company/epsso"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#5c6470] text-white transition-all duration-300 hover:bg-[#0077B5]"
              >
                {" "}
                <img
                  src="/footer/linkedin-in.svg"
                  alt="LinkedIn"
                  className="w-7 h-7"
                />{" "}
              </a>{" "}
              <a
                href="https://www.youtube.com/@epssosaudeempresarialcompl8237"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#5c6470] text-white transition-all duration-300 hover:bg-[#FF0000]"
              >
                {" "}
                <img
                  src="/footer/youtube-brands.svg"
                  alt="YouTube"
                  className="w-7 h-7"
                />{" "}
              </a>{" "}
              <a
                href="https://www.instagram.com/saudeocupacionalepsso/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#5c6470] text-white transition-all duration-300 hover:bg-gradient-to-t from-yellow-400 via-red-500 to-purple-600"
              >
                {" "}
                <img
                  src="/footer/instagram-brands.svg"
                  alt="Instagram"
                  className="w-7 h-7"
                />{" "}
              </a>{" "}
            </div>
          </div>

          {/* Coluna 2: Institucional */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className={headingStyle}>Institucional</h4>
            <ul className={listStyle}>
              <li>
                <Link to="/sobre-a-epsso" className={linkStyle}>
                  Sobre a EPSSO
                </Link>
              </li>
              <li>
                <Link to="/trabalhe-conosco" className={linkStyle}>
                  Trabalhe Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Soluções */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className={headingStyle}>Soluções</h4>
            <ul className={listStyle}>
              <li>
                <Link
                  to="/servicos/seguranca-do-trabalho"
                  className={linkStyle}
                >
                  Segurança do Trabalho
                </Link>
              </li>
              <li>
                <Link to="/servicos/medicina-do-trabalho" className={linkStyle}>
                  Medicina do Trabalho
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos/ergonomia-e-fisioterapia"
                  className={linkStyle}
                >
                  Ergonomia e Fisioterapia
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos/gestao-de-terceirizados"
                  className={linkStyle}
                >
                  Gestão de Terceirizados
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos/gestao-de-informacoes"
                  className={linkStyle}
                >
                  Gestão de Informações
                </Link>
              </li>
              <li>
                <Link to="/servicos/assessoria-juridica" className={linkStyle}>
                  Asessoria Jurídica
                </Link>
              </li>
              <li>
                <Link to="/cursos-e-treinamentos" className={linkStyle}>
                  Cursos e Treinamentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Suporte */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className={headingStyle}>Suporte</h4>
            <ul className={listStyle}>
              {/* "Central de Ajuda": hidden because its going to be included in near future */}
              <li className="hidden">
                <Link to="#" className={linkStyle}>
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link to="/fale-conosco" className={linkStyle}>
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="mt-10">
          <div className="border-b border-[#374151]" />
        </div>

        {/* Direitos autorais */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white mt-6 gap-4">
          <p>
            © {new Date().getFullYear()} EPSSO. Todos os direitos reservados.
          </p>
          <img
            src="/logo-surtocriativo.svg"
            alt="Surto Criativo"
            width={92}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
}
