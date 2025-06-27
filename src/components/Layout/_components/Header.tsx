import { useRef, useState, useEffect } from "react";
import { ChevronDown, User } from "lucide-react";
import SolutionsDropdown from "../../SolutionsDropdown";
import { Link } from "react-router-dom";

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex lg:hidden items-center justify-between px-4 py-4">
      <img
        src="/logo-epsso.svg"
        alt="Logo da EPSSO"
        width={120}
        height={38}
        loading="eager"
        fetchPriority="high"
        className="transition-all duration-300 ease-in-out"
      />

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

function DesktopHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="hidden lg:flex max-w-7xl mx-auto px-4 py-4 items-center justify-between">
      <div className="mr-8 flex-shrink-0">
        <img
          src="/logo-epsso.svg"
          alt="Logo da EPSSO"
          width={155}
          height={49}
        />
      </div>

      <nav role="navigation" aria-label="Menu Principal" className="flex-grow">
        <ul className="flex items-center justify-end gap-8 text-[14px] font-medium text-neutral-900 tracking-[-0.028em]">
          <li>
            <a
              href="/about"
              className="transition-colors duration-200 hover:text-green-700"
            >
              Sobre a EPSSO
            </a>
          </li>

          <li className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 transition-colors duration-200 hover:text-green-700 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={isOpen}
              aria-controls="solutions-dropdown"
            >
              Nossas Soluções <ChevronDown size={14} />
            </button>

            {isOpen && (
              <div
                id="solutions-dropdown"
                className="absolute left-0 top-full mt-2 z-50"
              >
                <SolutionsDropdown />
              </div>
            )}
          </li>

          <li>
            <a
              href="#"
              className="transition-colors duration-200 hover:text-green-700"
            >
              Cursos e Treinamentos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition-colors duration-200 hover:text-green-700"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition-colors duration-200 hover:text-green-700"
            >
              Fale Conosco
            </a>
          </li>
        </ul>
      </nav>

      <div className="ml-8">
        <Link
          to="https://sistema.soc.com.br/WebSoc/"
          className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full flex items-center gap-2 transition"
          aria-label="Área do Cliente"
        >
          <User size={16} /> Área do Cliente
        </Link>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <header className="bg-white shadow-sm relative z-50" role="banner">
      <MobileHeader />
      <DesktopHeader />
    </header>
  );
}
