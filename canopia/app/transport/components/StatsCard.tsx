"use client"

import { ArrowDown, ArrowUp, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { TransportStat } from "../hooks/useTransportPageState"

interface StatsCardProps {
  stat: TransportStat
}

export default function StatsCard({ stat }: StatsCardProps) {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
          {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <ArrowUp className="h-4 w-4" />
      case "down":
        return <ArrowDown className="h-4 w-4" />
      default:
        return <ArrowRight className="h-4 w-4" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-[#509555]"
      case "down":
        return "text-[#C64747]"
      default:
        return "text-[#5F5B52]"
    }
  }
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-[#F4F1E9] flex items-center justify-center mr-3">
            <span className="text-xl">{stat.icon}</span>
          </div>
          <span className="text-sm font-medium text-[#2B2B2B]">{stat.title}</span>
        </div>
      </div>
      
      <div className="flex items-end justify-between">
        <div className="text-2xl font-bold text-[#2B463C] font-roboto-mono">
          {stat.value}
          <span className="text-sm font-normal ml-1">{stat.unit}</span>
        </div>
        <div className={cn(
          "flex items-center text-sm",
          getTrendColor(stat.trend)
        )}>
          {getTrendIcon(stat.trend)}
          <span className="ml-1">
            {stat.change > 0 ? "+" : ""}
            {stat.change}%
          </span>
        </div>
      </div>
    </div>
  )
}

