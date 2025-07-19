/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CategoryFilterProps {
  categories: any[];
  selectedCategoryId: number | null;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategoryId,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex justify-center items-center pt-8 pb-12">
      <label
        htmlFor="category"
        className="block text-[20px] font-medium leading-7"
      >
        Leia sobre:
      </label>
      <select
        id="category"
        value={selectedCategoryId || 0}
        onChange={onChange}
        className="px-2 py-1 text-[20px] underline cursor-pointer text-green-accents-400 font-medium leading-7 hover:bg-neutral-light rounded-4xl"
      >
        <option value={0} className="text-neutral-800 bg-white">
          Todas as categorias
        </option>
        {categories.map((category) => (
          <option
            key={category.id}
            value={category.id}
            className="text-neutral-800 bg-white"
          >
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
