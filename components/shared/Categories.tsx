'use client';

import { cn } from "@/lib/utils";
import { categoryModel } from "@/store/category-model";
import { useUnit } from "effector-react";
import React from "react";

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Комбо" },
  { id: 3, name: "Десерты" },
  { id: 4, name: "Закуски" },
  { id: 5, name: "Коктейли" },
  { id: 6, name: "Кофе" },
  { id: 7, name: "Напитки" },
]

export const Categories: React.FC<Props> = ({ className }) => {
  const { categoryActiveId } = useUnit(categoryModel)

  return (
    <div
      className={cn("inline-flex gap-1 bg-grey-50 p-1 rounded-2x1", className)}
    >
      {cats.map(({ name, id }, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id &&
            "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${name}`}
          key={index}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
