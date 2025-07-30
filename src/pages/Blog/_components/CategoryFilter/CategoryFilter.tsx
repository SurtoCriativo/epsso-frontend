/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

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
    <fieldset className="flex justify-center items-center pt-8 pb-12">
      <legend className="sr-only">Filtrar categorias</legend>
      <label
        htmlFor="category"
        className="block text-[20px] font-medium leading-7 mr-4"
      >
        Leia sobre:
      </label>
      <select
        id="category"
        value={selectedCategoryId || 0}
        onChange={onChange}
        className="w-[218px] px-2 py-1 text-[20px] underline cursor-pointer text-green-accents-400 font-medium leading-7 hover:bg-neutral-light rounded-4xl"
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
    </fieldset>
  );
}
