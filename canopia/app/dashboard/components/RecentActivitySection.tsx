"use client"

import { ChevronRight, AlertTriangle, Trophy, Calendar, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { formatRelativeTime } from "@/app/profile/utils/format-date"

interface RecentActivity {
  id: string
  type: "report" | "event" | "challenge" | "community"
  title: string
  date: string
  status?: string
}

interface RecentActivitySectionProps {
  activities: RecentActivity[]
  onActivityClick: (activityId: string, type: string) => void
  onViewAllClick: () => void
}

export default function RecentActivitySection({
  activities,
  onActivityClick,
  onViewAllClick,
}: RecentActivitySectionProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "report":
        return <AlertTriangle className="h-5 w-5" />
      case "challenge":
        return <Trophy className="h-5 w-5" />
      case "event":
        return <Calendar className="h-5 w-5" />
      default:
        return <AlertTriangle className="h-5 w-5" />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case "report":
        return "bg-[#D68C45]"
      case "challenge":
        return "bg-[#DFA23C]"
      case "event":
        return "bg-[#3C7D80]"
      default:
        return "bg-[#688F4E]"
    }
  }

  const getStatusIcon = (status?: string) => {
    if (!status) return null
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-[#509555]" />
      case "pending":
        return <Clock className="h-4 w-4 text-[#DFA23C]" />
      default:
        return null
    }
  }

  const getStatusColor = (status?: string) => {
    if (!status) return ""
    switch (status) {
      case "completed":
        return "text-[#509555]"
      case "pending":
        return "text-[#DFA23C]"
      default:
        return "text-[#5F5B52]"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-medium text-[#2B463C] font-montserrat">Activité récente</h2>
        <Button variant="ghost" size="sm" className="text-[#688F4E] p-0 h-auto" onClick={onViewAllClick}>
          Voir tout
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-[#F4F1E9] rounded-lg p-3 cursor-pointer"
            onClick={() => onActivityClick(activity.id, activity.type)}
          >
            <div className="flex items-start">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3",
                  getActivityColor(activity.type),
                )}
              >
                {getActivityIcon(activity.type)}
              </div>
              <div>
                <div className="text-sm font-medium text-[#2B2B2B]">{activity.title}</div>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-[#A9A295] mr-2">{formatRelativeTime(activity.date)}</span>
                  {activity.status && (
                    <div className="flex items-center">
                      {getStatusIcon(activity.status)}
                      <span className={cn("text-xs ml-1", getStatusColor(activity.status))}>
                        {activity.status === "completed" ? "Terminé" : "En cours"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

