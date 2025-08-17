"use client"

import { AlertTriangle } from "lucide-react"
import InsightCard from "./InsightCard"
import type { Insight, Category } from "../hooks/useInsightsPageState"

interface InsightsListProps {
  insights: Insight[]
  categories: Category[]
  isLoading: boolean
  searchQuery: string
  hasFilters: boolean
  onInsightClick: (insightId: string) => void
  onSaveToggle: (insightId: string) => void
}

export default function InsightsList({
  insights,
  categories,
  isLoading,
  searchQuery,
  hasFilters,
  onInsightClick,
  onSaveToggle,
}: InsightsListProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-12 h-12 border-4 border-[#688F4E] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-[#4D4D4D] font-roboto">Chargement des analyses...</p>
      </div>
    )
  }

  if (insights.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-[#F4F1E9] flex items-center justify-center mb-4">
          <AlertTriangle className="h-8 w-8 text-[#A9A295]" />
        </div>
        <h3 className="text-lg font-medium text-[#2B463C] mb-2">Aucune analyse trouvée</h3>
        <p className="text-[#5F5B52] max-w-md">
          {hasFilters
            ? "Aucun résultat ne correspond à vos critères. Essayez de modifier vos filtres."
            : "Il n'y a pas d'analyses disponibles pour le moment."}
        </p>
      </div>
    )
  }

  return (
    <div>
      {insights.map((insight) => (
        <InsightCard
          key={insight.id}
          insight={insight}
          categories={categories}
          onClick={() => onInsightClick(insight.id)}
          onSave={() => onSaveToggle(insight.id)}
        />
      ))}
    </div>
  )
}

