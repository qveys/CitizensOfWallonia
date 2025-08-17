"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Shield, Trash2 } from "lucide-react"

interface AdditionalSectionsProps {
  onNavigate: (path: string) => void
}

export default function AdditionalSections({ onNavigate }: AdditionalSectionsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center mb-4">
        <Shield className="h-5 w-5 text-[#2B463C] mr-2" />
        <h2 className="text-lg font-medium text-[#2B463C] font-montserrat">Options avancées</h2>
      </div>

      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full justify-between border-[#D8D3CA] text-[#2B2B2B]"
          onClick={() => onNavigate("/settings/privacy/cookies")}
        >
          <span>Préférences de cookies</span>
          <ChevronRight className="h-4 w-4 text-[#5F5B52]" />
        </Button>

        <Button
          variant="outline"
          className="w-full justify-between border-[#D8D3CA] text-[#2B2B2B]"
          onClick={() => onNavigate("/settings/privacy/data-export")}
        >
          <span>Exporter mes données</span>
          <ChevronRight className="h-4 w-4 text-[#5F5B52]" />
        </Button>

        <Button
          variant="outline"
          className="w-full justify-start border-[#D8D3CA] text-[#C64747]"
          onClick={() => onNavigate("/settings/privacy/delete-account")}
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Supprimer mon compte
        </Button>
      </div>
    </div>
  )
}

