"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface QuietHoursSectionProps {
  onNavigate: (path: string) => void
}

export default function QuietHoursSection({ onNavigate }: QuietHoursSectionProps) {
  return (
    <div>
      <h3 className="text-sm font-medium text-[#2B463C] mb-2">Périodes silencieuses</h3>
      <p className="text-sm text-[#5F5B52] mb-4">
        Définissez des périodes pendant lesquelles vous ne recevrez pas de notifications push.
      </p>

      <Button
        variant="outline"
        className="w-full justify-between border-[#D8D3CA] text-[#2B2B2B]"
        onClick={() => onNavigate("/settings/notifications/quiet-hours")}
      >
        <span>Configurer les périodes silencieuses</span>
        <ChevronRight className="h-4 w-4 text-[#5F5B52]" />
      </Button>
    </div>
  )
}

