"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, Share2 } from "lucide-react"

interface ReportHeaderProps {
  onBack: () => void
}

export default function ReportHeader({ onBack }: ReportHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
            <ChevronLeft className="h-6 w-6 text-[#2B463C]" />
            <span className="sr-only">Retour</span>
          </Button>
          <h1 className="text-xl font-semibold text-[#2B463C] font-montserrat">Détails du signalement</h1>
        </div>

        <Button variant="ghost" size="icon">
          <Share2 className="h-5 w-5 text-[#5F5B52]" />
          <span className="sr-only">Partager</span>
        </Button>
      </div>
    </header>
  )
}

