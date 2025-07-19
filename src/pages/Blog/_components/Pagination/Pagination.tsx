export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const maxVisiblePages = 5;
  const pagesToShow = Math.min(totalPages, maxVisiblePages);

  return (
    <div className="flex justify-center gap-1 pt-[72px] pb-[54px]">
      {Array.from({ length: pagesToShow }, (_, i) => i + 1).map(
        (pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`w-8 h-8 cursor-pointer rounded-full flex items-center justify-center text-[12px] font-medium shadow ${
              pageNumber === currentPage
                ? "bg-brand-500 text-white hover:bg-brand-700"
                : "bg-white text-green-accents-600 hover:bg-brand-500 hover:text-white"
            }`}
          >
            {pageNumber}
          </button>
        )
      )}

      {totalPages > maxVisiblePages && (
        <span className="w-8 h-8 flex items-center justify-center text-[12px] font-medium text-green-accents-600">
          ...
        </span>
      )}
    </div>
  );
}
