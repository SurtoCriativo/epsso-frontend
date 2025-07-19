import { TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex justify-center h-dvh items-center flex-col gap-4">
      <p className="flex items-center gap-2 text-4xl font-bold text-brand-400">
        <TriangleAlert size={36} className="text-yellow-600" />
        404 - Página não encontrada!
      </p>
      <Link to="/">
        <button
          className="bg-dark-green-300 hover:bg-green-700 text-white px-5 py-2 rounded-full flex items-center transition cursor-pointer"
          aria-label="Página inicial"
        >
          Página inicial
        </button>
      </Link>
    </div>
  );
}
