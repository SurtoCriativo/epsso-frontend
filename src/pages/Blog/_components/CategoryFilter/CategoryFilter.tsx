/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (categoryId: number) => {
    // Create a synthetic event to maintain compatibility
    const syntheticEvent = {
      target: { value: categoryId.toString() },
      currentTarget: { value: categoryId.toString() },
    } as React.ChangeEvent<HTMLSelectElement>;

    onChange(syntheticEvent);
    setIsOpen(false);
  };

  const selectedCategory = selectedCategoryId
    ? categories.find((cat) => cat.id === selectedCategoryId)?.name
    : "Todas as categorias";

  return (
    <fieldset className="flex justify-center items-center py-12 gap-4">
      <legend className="sr-only">Filtrar categorias</legend>
      <label
        htmlFor="category-button"
        className="text-lg font-medium text-green-accents-900 whitespace-nowrap"
      >
        Leia sobre:
      </label>

      {/* Custom Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          id="category-button"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="min-w-[220px] px-5 py-1 pr-10 text-lg font-medium text-green-accents-900 bg-white border-2 border-green-soft-300 rounded-full cursor-pointer hover:border-brand-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-opacity-20 transition-all duration-200 text-left"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {selectedCategory}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className={`w-5 h-5 text-green-accents-600 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-green-soft-300 rounded-2xl shadow-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-1 duration-200">
            <ul role="listbox" className="py-2 max-h-64 overflow-y-auto">
              <li>
                <button
                  type="button"
                  onClick={() => handleSelect(0)}
                  className={`w-full px-5 py-3 text-left hover:bg-green-soft-200 transition-colors duration-150 ${
                    selectedCategoryId === null || selectedCategoryId === 0
                      ? "bg-green-soft-300 text-green-accents-900 font-medium"
                      : "text-neutral-700"
                  }`}
                  role="option"
                  aria-selected={
                    selectedCategoryId === null || selectedCategoryId === 0
                  }
                >
                  Todas as categorias
                </button>
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    type="button"
                    onClick={() => handleSelect(category.id)}
                    className={`w-full px-5 py-3 text-left hover:bg-green-soft-200 transition-colors duration-150 ${
                      selectedCategoryId === category.id
                        ? "bg-green-soft-300 text-green-accents-900 font-medium"
                        : "text-neutral-700"
                    }`}
                    role="option"
                    aria-selected={selectedCategoryId === category.id}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Hidden select for form compatibility */}
      <select
        id="category"
        value={selectedCategoryId || 0}
        onChange={onChange}
        className="sr-only"
        aria-hidden="true"
        tabIndex={-1}
      >
        <option value={0}>Todas as categorias</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
