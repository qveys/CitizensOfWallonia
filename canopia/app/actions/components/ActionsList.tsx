"use client"

import { AlertTriangle } from "lucide-react"
import ActionCard from "./ActionCard"
import type { Action, ActionCategory } from "../hooks/useActionsPageState"

interface ActionsListProps {
  actions: Action[]
  categories: ActionCategory[]
  isLoading: boolean
  searchQuery: string
  onActionClick: (actionId: string) => void
  onJoinToggle: (actionId: string) => void
}

export default function ActionsList({
  actions,
  categories,
  isLoading,
  searchQuery,
  onActionClick,
  onJoinToggle,
}: ActionsListProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-12 h-12 border-4 border-[#688F4E] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-[#4D4D4D] font-roboto">Chargement des actions...</p>
      </div>
    )
  }

  if (actions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-[#F4F1E9] flex items-center justify-center mb-4">
          <AlertTriangle className="h-8 w-8 text-[#A9A295]" />
        </div>
        <h3 className="text-lg font-medium text-[#2B463C] mb-2">Aucune action trouvée</h3>
        <p className="text-[#5F5B52] max-w-md">
          {searchQuery
            ? "Aucun résultat ne correspond à votre recherche. Essayez d'autres termes."
            : "Il n'y a pas d'actions disponibles pour le moment."}
        </p>
      </div>
    )
  }

  return (
    <div>
      {actions.map((action) => (
        <ActionCard
          key={action.id}
          action={action}
          categories={categories}
          onClick={() => onActionClick(action.id)}
          onJoinToggle={() => onJoinToggle(action.id)}
        />
      ))}
    </div>
  )
}

