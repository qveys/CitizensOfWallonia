"use client"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { ChevronLeft, Share2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface ZoneHeaderProps {
  zoneName: string
  score: number
  detailedView: boolean
  onDetailedViewChange: (value: boolean) => void
  onBack: () => void
}

export default function ZoneHeader({ zoneName, score, detailedView, onDetailedViewChange, onBack }: ZoneHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
            <ChevronLeft className="h-6 w-6 text-[#2B463C]" />
            <span className="sr-only">Retour</span>
          </Button>
          <h1 className="text-xl font-semibold text-[#2B463C] font-montserrat">{zoneName}</h1>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-sm text-[#5F5B52] mr-2">Vue détaillée</span>
            <Switch
              checked={detailedView}
              onCheckedChange={onDetailedViewChange}
              className="data-[state=checked]:bg-[#688F4E]"
            />
          </div>

          <Button variant="ghost" size="icon">
            <Share2 className="h-5 w-5 text-[#5F5B52]" />
            <span className="sr-only">Partager</span>
          </Button>
        </div>
      </div>

      <div className="px-4 py-3 bg-[#F4F1E9] flex items-center justify-between">
        <div>
          <div className="text-sm text-[#5F5B52]">Score environnemental</div>
          <div className="text-2xl font-bold text-[#2B463C] font-montserrat">
            {score}
            <span className="text-base font-normal text-[#5F5B52]">/100</span>
          </div>
        </div>

        <div
          className={cn(
            "px-3 py-1 rounded-full text-white text-sm font-medium",
            score >= 80
              ? "bg-[#509555]"
              : score >= 60
                ? "bg-[#82A768]"
                : score >= 40
                  ? "bg-[#DFA23C]"
                  : score >= 20
                    ? "bg-[#D68C45]"
                    : "bg-[#C64747]",
          )}
        >
          {score >= 80
            ? "Excellent"
            : score >= 60
              ? "Bon"
              : score >= 40
                ? "Moyen"
                : score >= 20
                  ? "Mauvais"
                  : "Critique"}
        </div>
      </div>
    </header>
  )
}

