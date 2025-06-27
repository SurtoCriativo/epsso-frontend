import { Link } from "react-router-dom";
import { FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const headingStyle = "font-medium text-[20px] leading-[160%] pt-2 pb-6";
  const linkStyle = "hover:text-brand-300 transition-colors duration-200";
  const listStyle = "text-base leading-[2.2] text-white font-normal";

  return (
    <footer className="bg-[#1A1A1A] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Grid alinhado lateralmente com espaçamento controlado */}
        <div className="flex flex-wrap justify-between items-start gap-y-10">
          {/* Coluna 1: Logo + Redes Sociais */}
          <div className="flex flex-col justify-between h-full pt-2 min-w-[180px]">
            <img
              src="/logo-epsso-footer.svg"
              alt="Logo EPSSO"
              width={120}
              height={48}
            />
            <div className="flex gap-4 mt-14">
              <a
                href="https://br.linkedin.com/company/epsso"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#5c6470] text-white transition-all duration-300 hover:bg-[#0077B5]"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="https://www.youtube.com/@epssosaudeempresarialcompl8237"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#5c6470] text-white transition-all duration-300 hover:bg-[#FF0000]"
              >
                <FaYoutube size={16} />
              </a>
              <a
                href="https://www.instagram.com/saudeocupacionalepsso/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#5c6470] text-white transition-all duration-300 hover:bg-gradient-to-t from-yellow-400 via-red-500 to-purple-600"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className={headingStyle}>Institucional</h4>
            <ul className={listStyle}>
              <li>
                <Link to="#" className={linkStyle}>
                  Sobre a EPSSO
                </Link>
              </li>
              <li>
                <Link to="#" className={linkStyle}>
                  Trabalhe Conosco
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className={headingStyle}>Soluções</h4>
            <ul className={listStyle}>
              <li>
                <Link to="#" className={linkStyle}>
                  Nossas Soluções
                </Link>
              </li>
              <li>
                <Link to="#" className={linkStyle}>
                  Cursos e Treinamentos
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className={headingStyle}>Suporte</h4>
            <ul className={listStyle}>
              <li>
                <Link to="#" className={linkStyle}>
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link to="#" className={linkStyle}>
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <Link
              to="#"
              className={`${headingStyle} ${linkStyle} flex text-center gap-1`}
            >
              Blog
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <div className="border-t border-white/10 max-w-7xl mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/70 mt-6">
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
