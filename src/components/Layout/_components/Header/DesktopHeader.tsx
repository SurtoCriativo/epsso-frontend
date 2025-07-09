import { useRef } from "react";
import { ChevronDown, User } from "lucide-react";
import { Link } from "react-router-dom";
import SolutionsDropdown from "../../../SolutionsDropdown";

interface DesktopHeaderProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownPosition: { top: number; left: number };
  setDropdownPosition: React.Dispatch<
    React.SetStateAction<{ top: number; left: number }>
  >;
}

export default function DesktopHeader({
  isOpen,
  setIsOpen,
  dropdownPosition,
  setDropdownPosition,
}: DesktopHeaderProps) {
  const timeoutRef = useRef<number | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom,
        left: rect.left + rect.width / 2,
      });
    }

    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div className="w-[1128px] hidden lg:flex max-w-7xl mx-auto py-4 items-center justify-between">
      {/* Logo */}
      <Link to="/" className="mr-8 flex-shrink-0">
        <img
          src="/logo-epsso.svg"
          alt="Logo da EPSSO"
          width={155}
          height={49}
        />
      </Link>

      {/* Navegação */}
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

          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              ref={buttonRef}
              className="flex items-center gap-1 transition-colors duration-200 hover:text-green-700 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={isOpen}
              aria-controls="solutions-dropdown"
            >
              Nossas Soluções <ChevronDown size={14} />
            </button>
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

      {/* Botão de Área do Cliente */}
      <div className="ml-8">
        <Link
          to="https://sistema.soc.com.br/WebSoc/"
          className="bg-dark-green-300 hover:bg-green-700 text-white px-5 py-2 rounded-full flex items-center gap-2 transition"
          aria-label="Área do Cliente"
        >
          <User size={16} /> Área do Cliente
        </Link>
      </div>

      {isOpen && (
        <SolutionsDropdown
          top={dropdownPosition.top}
          left={dropdownPosition.left}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </div>
  );
}
