"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface TutorialsSectionProps {
  onNavigate: (path: string) => void
}

export default function TutorialsSection({ onNavigate }: TutorialsSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-medium text-[#2B463C] font-montserrat mb-3">Tutoriels</h2>

      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full justify-between border-[#D8D3CA] text-[#2B2B2B]"
          onClick={() => onNavigate("/help/tutorials/map")}
        >
          <span>Utiliser la carte interactive</span>
          <ChevronRight className="h-4 w-4 text-[#5F5B52]" />
        </Button>

        <Button
          variant="outline"
          className="w-full justify-between border-[#D8D3CA] text-[#2B2B2B]"
          onClick={() => onNavigate("/help/tutorials/reports")}
        >
          <span>Créer et suivre des signalements</span>
          <ChevronRight className="h-4 w-4 text-[#5F5B52]" />
        </Button>

        <Button
          variant="outline"
          className="w-full justify-between border-[#D8D3CA] text-[#2B2B2B]"
          onClick={() => onNavigate("/help/tutorials/data")}
        >
          <span>Comprendre les données environnementales</span>
          <ChevronRight className="h-4 w-4 text-[#5F5B52]" />
        </Button>
      </div>
    </div>
  )
}

