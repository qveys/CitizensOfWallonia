"use client"

import { useRouter } from "next/navigation"
import { Calendar } from "lucide-react"
import type { Activity } from "../types"
import ActivityCard from "./activity-card"

interface ActivityListProps {
  activities: Activity[]
  isLoading: boolean
  searchQuery: string
}

export default function ActivityList({ activities, isLoading, searchQuery }: ActivityListProps) {
  const router = useRouter()

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-12 h-12 border-4 border-[#688F4E] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-[#4D4D4D] font-roboto">Chargement de l'activité...</p>
      </div>
    )
  }

  if (activities.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-[#F4F1E9] flex items-center justify-center mb-4">
          <Calendar className="h-8 w-8 text-[#A9A295]" />
        </div>
        <h3 className="text-lg font-medium text-[#2B463C] mb-2">Aucune activité trouvée</h3>
        <p className="text-[#5F5B52] max-w-md">
          {searchQuery
            ? "Aucun résultat ne correspond à votre recherche. Essayez d'autres termes."
            : "Vous n'avez pas encore d'activité enregistrée."}
        </p>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-auto pb-6">
      <div className="px-4 py-2 space-y-3">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} onClick={() => router.push(activity.url)} />
        ))}
      </div>
    </div>
  )
}

