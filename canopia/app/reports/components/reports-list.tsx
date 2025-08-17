"use client"

import { useRouter } from "next/navigation"
import { AlertTriangle } from "lucide-react"
import type { Report } from "../types"
import ReportCard from "./report-card"

interface ReportsListProps {
  reports: Report[]
  isLoading: boolean
  searchQuery: string
}

export default function ReportsList({ reports, isLoading, searchQuery }: ReportsListProps) {
  const router = useRouter()

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-12 h-12 border-4 border-[#688F4E] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-[#4D4D4D] font-roboto">Chargement des signalements...</p>
      </div>
    )
  }

  if (reports.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-[#F4F1E9] flex items-center justify-center mb-4">
          <AlertTriangle className="h-8 w-8 text-[#A9A295]" />
        </div>
        <h3 className="text-lg font-medium text-[#2B463C] mb-2">Aucun signalement trouvé</h3>
        <p className="text-[#5F5B52] max-w-md">
          {searchQuery
            ? "Aucun résultat ne correspond à votre recherche. Essayez d'autres termes."
            : "Vous n'avez pas encore créé de signalement. Cliquez sur 'Nouveau' pour commencer."}
        </p>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-auto pb-20">
      <div className="px-4 py-2 space-y-3">
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} onClick={() => router.push(`/reports/${report.id}`)} />
        ))}
      </div>
    </div>
  )
}

