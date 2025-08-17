"use client"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import type { Category } from "../hooks/useInsightsPageState"

interface InsightsFiltersProps {
  categories: Category[]
  activeCategory: string | null
  activeImpact: string | null
  searchQuery: string
  onCategoryChange: (categoryId: string | null) => void
  onImpactChange: (impact: string | null) => void
  onSearchChange: (value: string) => void
}

export default function InsightsFilters({
  categories,
  activeCategory,
  activeImpact,
  searchQuery,
  onCategoryChange,
  onImpactChange,
  onSearchChange,
}: InsightsFiltersProps) {
  return (
    <div className="space-y-3 mb-4">
      <div className="relative">
        <Input
          placeholder="Rechercher..."
          className="pl-10 pr-4 py-2 bg-white border-[#D8D3CA] rounded-lg text-[#2B2B2B]"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5F5B52] w-5 h-5" />
      </div>

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-2 p-1">
          <Button
            variant="outline"
            className={cn(
              "rounded-full border-[#D8D3CA]",
              !activeCategory && "bg-[#688F4E] text-white border-[#688F4E]",
            )}
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

      <div className="flex space-x-2">
        <Button
          variant="outline"
          className={cn("rounded-full border-[#D8D3CA]", !activeImpact && "bg-[#688F4E] text-white border-[#688F4E]")}
          onClick={() => onImpactChange(null)}
        >
          Tous
        </Button>

        <Button
          variant="outline"
          className={cn(
            "rounded-full border-[#D8D3CA]",
            activeImpact === "positive" && "bg-[#509555] text-white border-[#509555]",
          )}
          onClick={() => onImpactChange("positive")}
        >
          Positif
        </Button>

        <Button
          variant="outline"
          className={cn(
            "rounded-full border-[#D8D3CA]",
            activeImpact === "negative" && "bg-[#C64747] text-white border-[#C64747]",
          )}
          onClick={() => onImpactChange("negative")}
        >
          Négatif
        </Button>

        <Button
          variant="outline"
          className={cn(
            "rounded-full border-[#D8D3CA]",
            activeImpact === "neutral" && "bg-[#5F5B52] text-white border-[#5F5B52]",
          )}
          onClick={() => onImpactChange("neutral")}
        >
          Neutre
        </Button>
      </div>
    </div>
  )
}

