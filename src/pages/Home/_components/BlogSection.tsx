import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const posts = [
  {
    title: "Como reduzir acidentes de trabalho com ações simples",
    description:
      "Dicas práticas para promover segurança no dia a dia da sua empresa",
    image: "/blog/acidentes.jpg",
  },
  {
    title: "Treinamentos obrigatórios para empresas em 2025",
    description:
      "Veja quais cursos sua empresa precisa oferecer aos colaboradores",
    image: "/blog/treinamentos.jpg",
  },
  {
    title: "SST e eSocial: entenda suas obrigações legais",
    description:
      "Entenda como evitar multas e manter tudo em dia com o eSocial",
    image: "/blog/ss-e-esocial.jpg",
  },
  {
    title: "Ergonomia no home office: cuide da sua equipe remota",
    description: "Adote práticas ergonômicas simples no ambiente remoto",
    image: "/blog/ergonomia.jpg",
  },
  {
    title: "Impactos da saúde ocupacional na produtividade",
    description: "Saúde e segurança como parte estratégica da empresa",
    image: "/blog/produtividade.jpg",
  },
  {
    title: "Como preparar sua empresa para fiscalizações trabalhistas",
    description:
      "Checklist de conformidade e boas práticas de gestão documental",
    image: "/blog/fiscalizacao.jpg",
  },
];

const POSTS_PER_PAGE = 4;

export default function BlogSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="bg-[#F1F4F2] py-16 px-4">
      <div className="w-full max-w-7xl mx-auto">
        {/* Título + Paginação */}
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-[32px] font-medium text-green-accents-800">
            Blog
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-green-muted-500">
              {currentPage} de {totalPages}
            </span>
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-neutral-500 hover:bg-gray-300 disabled:opacity-50"
            >
              <FaArrowLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-green-accents-500 text-white hover:bg-green-700 disabled:opacity-50"
            >
              <FaArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg overflow-hidden shadow-sm"
            >
              <img
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="text-green-900 font-semibold text-base leading-snug mb-2">
                  {post.title}
                </h4>
                <p className="text-gray-600 text-sm leading-snug">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
