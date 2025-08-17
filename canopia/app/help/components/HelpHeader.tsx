"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

interface HelpHeaderProps {
  onBack: () => void
}

export default function HelpHeader({ onBack }: HelpHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="flex items-center p-4">
        <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
          <ChevronLeft className="h-6 w-6 text-[#2B463C]" />
          <span className="sr-only">Retour</span>
        </Button>
        <h1 className="text-xl font-semibold text-[#2B463C] font-montserrat">Aide et support</h1>
      </div>
    </header>
  )
}

