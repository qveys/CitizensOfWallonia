"use client"

import { Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Activity } from "../types"
import { getActivityIcon, getActivityColor, getStatusIcon, getStatusColor } from "../utils/activity-utils"
import { formatDate, formatRelativeTime } from "../utils/format-date"

interface ActivityCardProps {
  activity: Activity
  onClick: () => void
}

export default function ActivityCard({ activity, onClick }: ActivityCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3" onClick={onClick}>
      <div className="flex items-start">
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-3",
            getActivityColor(activity.type),
          )}
        >
          {getActivityIcon(activity.type)}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-base font-medium text-[#2B463C]">{activity.title}</h3>
              <p className="text-sm text-[#5F5B52]">{activity.description}</p>
            </div>
            <span className="text-xs text-[#A9A295]">{formatRelativeTime(activity.date)}</span>
          </div>
          <div className="flex items-center mt-2">
            <Calendar className="h-3 w-3 text-[#A9A295] mr-1" />
            <span className="text-xs text-[#A9A295]">{formatDate(activity.date)}</span>
            {activity.status && (
              <div className="flex items-center ml-3">
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
  )
}

