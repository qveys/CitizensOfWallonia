"use client"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Category } from "../hooks/useEducationPageState"

interface CategoryFilterProps {
  categories: Category[]
  activeCategory: string | null
  onCategoryChange: (categoryId: string | null) => void
}

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <ScrollArea className="w-full whitespace-nowrap mb-4">
      <div className="flex space-x-2 p-1">
        <Button
          variant="outline"
          className={cn("rounded-full border-[#D8D3CA]", !activeCategory && "bg-[#688F4E] text-white border-[#688F4E]")}
          onClick={() => onCategoryChange(null)}
        >
          Toutes
        </Button>

        {categories.map((category) => (
          <Button
            key={category.id}
            variant="outline"
            className={cn(
              "rounded-full border-[#D8D3CA]",
              activeCategory === category.id && `bg-[${category.color}] text-white border-[${category.color}]`,
            )}
            onClick={() => onCategoryChange(category.id)}
          >
            <span className="mr-1">{category.icon}</span>
            {category.name}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

