"use client"

import { AlertTriangle } from "lucide-react"
import StatsCard from "./StatsCard"
import type { TransportStat } from "../hooks/useTransportPageState"

interface StatsListProps {
  stats: TransportStat[]
  isLoading: boolean
}

export default function StatsList({ stats, isLoading }: StatsListProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-12 h-12 border-4 border-[#688F4E] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-[#4D4D4D] font-roboto">Chargement des statistiques...</p>
      </div>
    )
  }

  if (stats.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-[#F4F1E9] flex items-center justify-center mb-4">
          <AlertTriangle className="h-8 w-8 text-[#A9A295]" />
        </div>
        <h3 className="text-lg font-medium text-[#2B463C] mb-2">Aucune statistique disponible</h3>
        <p className="text-[#5F5B52] max-w-md">
          Commencez à utiliser l'application pour générer des statistiques sur vos déplacements.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {stats.map((stat) => (
        <StatsCard key={stat.id} stat={stat} />
      ))}
    </div>
  )
}

