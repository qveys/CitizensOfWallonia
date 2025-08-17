"use client"

import { Switch } from "@/components/ui/switch"
import type { LucideIcon } from "lucide-react"

interface NotificationTypeItemProps {
  icon: LucideIcon
  iconColor: string
  title: string
  description: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export default function NotificationTypeItem({
  icon: Icon,
  iconColor,
  title,
  description,
  checked,
  onCheckedChange,
}: NotificationTypeItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full ${iconColor} flex items-center justify-center mr-3`}>
          <Icon className="h-4 w-4 text-white" />
        </div>
        <div>
          <div className="text-sm font-medium text-[#2B2B2B]">{title}</div>
          <div className="text-xs text-[#5F5B52]">{description}</div>
        </div>
      </div>
      <Switch checked={checked} onCheckedChange={onCheckedChange} className="data-[state=checked]:bg-[#688F4E]" />
    </div>
  )
}

