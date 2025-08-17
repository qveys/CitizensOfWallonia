"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, BarChart2 } from "lucide-react"

interface InsightsHeaderProps {
  onBack: () => void
}

export default function InsightsHeader({ onBack }: InsightsHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="flex items-center p-4">
        <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
          <ChevronLeft className="h-6 w-6 text-[#2B463C]" />
          <span className="sr-only">Retour</span>
        </Button>
        <div className="flex items-center">
          <BarChart2 className="h-5 w-5 text-[#2B463C] mr-2" />
          <h1 className="text-xl font-semibold text-[#2B463C] font-montserrat">Analyses et Perspectives</h1>
        </div>
      </div>
    </header>
  )
}

