"use client"

import { Calendar, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { formatDate } from "@/app/profile/utils/format-date"
import Image from "next/image"
import type { Insight, Category } from "../hooks/useInsightsPageState"

interface InsightCardProps {
  insight: Insight
  categories: Category[]
  onClick: () => void
  onSave: () => void
}

export default function InsightCard({ insight, categories, onClick, onSave }: InsightCardProps) {
  const category = categories.find((c) => c.id === insight.category)

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "positive":
        return "bg-[#509555]/10 border-[#509555]/30 text-[#509555]"
      case "negative":
        return "bg-[#C64747]/10 border-[#C64747]/30 text-[#C64747]"
      case "neutral":
        return "bg-[#5F5B52]/10 border-[#5F5B52]/30 text-[#5F5B52]"
      default:
        return "bg-[#5F5B52]/10 border-[#5F5B52]/30 text-[#5F5B52]"
    }
  }

  return (
    <div className={cn("border rounded-lg overflow-hidden mb-4", getImpactColor(insight.impact))}>
      {insight.image && (
        <div className="relative h-40 w-full cursor-pointer" onClick={onClick}>
          <Image src={insight.image || "/placeholder.svg"} alt={insight.title} fill className="object-cover" />
        </div>
      )}

      <div className="p-4">
        <h3 className="text-lg font-medium mb-2 cursor-pointer" onClick={onClick}>
          {insight.title}
        </h3>

        <p className="text-sm line-clamp-3 mb-3">{insight.description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          {category && (
            <Badge variant="outline" className="bg-white/50 border-current">
              {category.icon} {category.name}
            </Badge>
          )}

          <div className="flex items-center text-xs bg-white/50 px-2 py-1 rounded-full">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{formatDate(insight.date)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          {insight.source && <div className="text-xs">Source: {insight.source}</div>}

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className={cn("p-0 h-auto", insight.isSaved ? "text-[#DFA23C]" : "")}
              onClick={(e) => {
                e.stopPropagation()
                onSave()
              }}
            >
              <Bookmark className={cn("h-4 w-4 mr-1", insight.isSaved && "fill-[#DFA23C]")} />
              <span>{insight.isSaved ? "Enregistré" : "Enregistrer"}</span>
            </Button>

            <Button className="bg-white hover:bg-white/90" onClick={onClick}>
              Lire plus
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

