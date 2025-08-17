"use client"

import { Users, Star, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Image from "next/image"
import type { Action, ActionCategory } from "../hooks/useActionsPageState"

interface ActionCardProps {
  action: Action
  categories: ActionCategory[]
  onClick: () => void
  onJoinToggle: () => void
}

export default function ActionCard({ action, categories, onClick, onJoinToggle }: ActionCardProps) {
  const category = categories.find((c) => c.id === action.category)

  const getDifficultyLabel = (level: number) => {
    switch (level) {
      case 1:
        return "Très facile"
      case 2:
        return "Facile"
      case 3:
        return "Moyen"
      case 4:
        return "Difficile"
      case 5:
        return "Très difficile"
      default:
        return "Moyen"
    }
  }

  const getDurationLabel = (duration: string) => {
    switch (duration) {
      case "one-time":
        return "Action ponctuelle"
      case "seasonal":
        return "Action saisonnière"
      case "permanent":
        return "Habitude permanente"
      default:
        return "Action ponctuelle"
    }
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#D8D3CA] mb-4">
      {action.image && (
        <div className="relative h-40 w-full">
          <Image src={action.image || "/placeholder.svg"} alt={action.title} fill className="object-cover" />
          {category && (
            <Badge className="absolute top-2 right-2" style={{ backgroundColor: category.color }}>
              {category.icon} {category.name}
            </Badge>
          )}
        </div>
      )}

      <div className="p-4">
        <h3 className="text-lg font-medium text-[#2B463C] mb-2 cursor-pointer" onClick={onClick}>
          {action.title}
        </h3>

        <p className="text-sm text-[#5F5B52] line-clamp-2 mb-3">{action.description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          <div className="flex items-center text-xs bg-[#F4F1E9] px-2 py-1 rounded-full">
            <BarChart className="h-3 w-3 mr-1 text-[#688F4E]" />
            <span>Impact: {Array(action.impact).fill("★").join("")}</span>
          </div>

          <div className="flex items-center text-xs bg-[#F4F1E9] px-2 py-1 rounded-full">
            <Star className="h-3 w-3 mr-1 text-[#DFA23C]" />
            <span>{getDifficultyLabel(action.difficulty)}</span>
          </div>

          <div className="flex items-center text-xs bg-[#F4F1E9] px-2 py-1 rounded-full">
            <span>{getDurationLabel(action.duration)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-[#5F5B52]">
            <Users className="h-4 w-4 mr-1" />
            <span>{action.participants} participants</span>
          </div>

          <Button
            className={cn(
              "text-white",
              action.isJoined ? "bg-[#509555] hover:bg-[#509555]/90" : "bg-[#688F4E] hover:bg-[#82A768]",
            )}
            onClick={(e) => {
              e.stopPropagation()
              onJoinToggle()
            }}
          >
            {action.isJoined ? "Rejoint ✓" : "Rejoindre"}
          </Button>
        </div>
      </div>
    </div>
  )
}

