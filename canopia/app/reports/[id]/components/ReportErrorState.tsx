"use client"

import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ReportErrorStateProps {
  onReturnToReports: () => void
}

export default function ReportErrorState({ onReturnToReports }: ReportErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F4F1E9] p-6">
      <div className="w-16 h-16 rounded-full bg-[#F4F1E9] flex items-center justify-center mb-4">
        <AlertTriangle className="h-8 w-8 text-[#A9A295]" />
      </div>
      <h3 className="text-lg font-medium text-[#2B463C] mb-2">Signalement introuvable</h3>
      <p className="text-[#5F5B52] max-w-md text-center mb-6">
        Le signalement que vous recherchez n'existe pas ou a été supprimé.
      </p>
      <Button onClick={onReturnToReports} className="bg-[#688F4E] hover:bg-[#82A768] text-white">
        Retour aux signalements
      </Button>
    </div>
  )
}

