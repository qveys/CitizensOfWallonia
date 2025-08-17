import { Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Activity } from "../types"
import { getActivityIcon, getActivityColor, getStatusColor } from "../utils/activity-utils"
import { formatRelativeTime } from "../utils/format-date"

interface ActivityCardProps {
  activity: Activity
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <div className="bg-[#F4F1E9] rounded-lg p-3">
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
            <Clock className="h-3 w-3 text-[#A9A295] mr-1" />
            <span className="text-xs text-[#A9A295] mr-2">{formatRelativeTime(activity.date)}</span>
            <span className={cn("text-xs font-medium", getStatusColor(activity.status))}>
              {activity.status === "completed" ? "Terminé" : "En cours"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

