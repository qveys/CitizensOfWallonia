"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import type { Activity } from "../types"
import ActivityCard from "./activity-card"

interface ProfileActivityProps {
  recentActivity: Activity[]
  onViewAll: () => void
}

export default function ProfileActivity({ recentActivity, onViewAll }: ProfileActivityProps) {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-[#2B463C]">Activité récente</h3>
        <Button variant="link" className="text-[#688F4E] p-0 h-auto" onClick={onViewAll}>
          Voir tout
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      <div className="space-y-3">
        {recentActivity.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
      <Button variant="outline" className="w-full mt-3 border-[#D8D3CA] text-[#5F5B52]" onClick={onViewAll}>
        Voir toute l'activité
      </Button>
    </div>
  )
}

