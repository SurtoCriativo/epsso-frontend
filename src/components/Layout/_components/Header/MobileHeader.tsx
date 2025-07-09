import { useState } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex lg:hidden items-center justify-between px-4 py-4">
      <Link to="/" className="transition-all duration-300 ease-in-out">
        <img
          src="/logo-epsso.svg"
          alt="Logo da EPSSO"
          width={120}
          height={38}
          loading="eager"
          fetchPriority="high"
        />
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="focus:outline-none"
      >
        <svg
          className="w-6 h-6 text-neutral-900"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 w-full bg-white shadow-lg z-50"
          role="navigation"
          aria-label="Menu Mobile"
        >
          <ul className="flex flex-col p-4 gap-4 text-[14px] font-medium text-neutral-900">
            <li>
              <a href="#" className="hover:text-green-700">
                Sobre a EPSSO
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-700">
                Nossas Soluções
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-700">
                Cursos e Treinamentos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-700">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-700">
                Fale Conosco
              </a>
            </li>
            <li>
              <a
                href="https://sistema.soc.com.br/WebSoc/"
                className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full flex items-center gap-2 justify-center"
                aria-label="Área do Cliente"
              >
                <User size={16} /> Área do Cliente
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
