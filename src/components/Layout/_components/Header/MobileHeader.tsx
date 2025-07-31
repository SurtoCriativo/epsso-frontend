import { useState } from "react";
import { Link } from "react-router-dom";
import { UserRound, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const solutions = [
    {
      label: "Segurança do Trabalho",
      icon: "/icons/work-security.svg",
      href: "/servicos/seguranca-do-trabalho",
    },
    {
      label: "Medicina do Trabalho",
      icon: "/icons/work-medicine.svg",
      href: "/servicos/medicina-do-trabalho",
    },
    {
      label: "Ergonomia e Fisioterapia",
      icon: "/icons/physiotherapy.svg",
      href: "/servicos/ergonomia-e-fisioterapia",
    },
    {
      label: "Gestão de Terceirizados",
      icon: "/icons/outsource-management.svg",
      href: "/servicos/gestao-de-terceirizados",
    },
    {
      label: "Gestão de Informações",
      icon: "/icons/data-management.svg",
      href: "/servicos/gestao-de-informacoes",
    },
    {
      label: "Assessoria Jurídica",
      icon: "/icons/legal-compliance.svg",
      href: "/servicos/assessoria-juridica",
    },
  ];

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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="absolute top-full left-0 w-full bg-white shadow-lg z-50"
            role="navigation"
            aria-label="Menu Mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ul className="flex flex-col p-4 gap-10 text-[14px] font-medium text-neutral-900">
              <li>
                <a
                  href="/sobre-a-epsso"
                  className="text-dark-green-100 hover:text-green-700"
                >
                  Sobre a EPSSO
                </a>
              </li>

              <li>
                <button
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className="w-full flex items-center gap-2 text-left text-dark-green-100 hover:text-green-700"
                >
                  Nossas Soluções
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      solutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.ul
                      className="mt-3 mb-3 flex flex-col gap-4 pl-3 border-l border-gray-200"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      {solutions.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            className="flex items-center gap-3 mb-3 text-[13px] text-dark-green-100 hover:text-green-700"
                          >
                            <div className="w-7 h-7 bg-brand-300 rounded flex items-center justify-center">
                              <img
                                src={item.icon}
                                alt="icon"
                                className="w-4 h-4"
                              />
                            </div>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <a
                  href="/cursos-e-treinamentos"
                  className="text-dark-green-100 hover:text-green-700"
                >
                  Cursos e Treinamentos
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-dark-green-100 hover:text-green-700"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/fale-conosco"
                  className="text-dark-green-100 hover:text-green-700"
                >
                  Fale Conosco
                </a>
              </li>
              <li>
                <a
                  href="https://sistema.soc.com.br/WebSoc/"
                  className="bg-green-700 hover:bg-green-800 text-white rounded-full flex items-center justify-center gap-2 w-[178px] h-[48px] mx-auto cursor-pointer"
                  aria-label="Área do Cliente"
                >
                  <UserRound size={16} /> Área do Cliente
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
