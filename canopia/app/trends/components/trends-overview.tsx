"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import type { EnvironmentData } from "../types"
import { getMetricIcon, getMetricColor, getTrendIcon } from "../utils/metric-utils"

interface TrendsOverviewProps {
  environmentData: EnvironmentData
  expanded: boolean
  activeMetric: string
  onMetricChange: (value: string) => void
  onToggle: () => void
  onInfoClick: (metric: string) => void
}

export default function TrendsOverview({
  environmentData,
  expanded,
  activeMetric,
  onMetricChange,
  onToggle,
  onInfoClick,
}: TrendsOverviewProps) {
  return (
    <div className="px-4 py-2">
      <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={onToggle}>
        <h2 className="text-lg font-semibold text-[#2B463C] font-montserrat">Aperçu</h2>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          {expanded ? (
            <ChevronUp className="h-5 w-5 text-[#5F5B52]" />
          ) : (
            <ChevronDown className="h-5 w-5 text-[#5F5B52]" />
          )}
        </Button>
      </div>

      {expanded && (
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(environmentData.summary).map(([key, data]) => (
            <div
              key={key}
              className={cn("bg-white rounded-lg p-3 shadow-sm", activeMetric === key ? "ring-2 ring-[#688F4E]" : "")}
              onClick={() => onMetricChange(key)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-2"
                    style={{ backgroundColor: getMetricColor(key) }}
                  >
                    {getMetricIcon(key)}
                  </div>
                  <div className="text-sm font-medium text-[#2B2B2B]">
                    {key === "air"
                      ? "Qualité de l'air"
                      : key === "temperature"
                        ? "Température"
                        : key === "energy"
                          ? "Énergie"
                          : "Qualité de l'eau"}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={(e) => {
                    e.stopPropagation()
                    onInfoClick(key)
                  }}
                >
                  <Info className="h-4 w-4 text-[#5F5B52]" />
                </Button>
              </div>

              <div className="flex items-end justify-between">
                <div className="text-2xl font-bold text-[#2B2B2B] font-roboto-mono">
                  {data.value}
                  <span className="text-sm font-normal ml-1">
                    {key === "temperature" ? "°C" : key === "energy" ? "kWh" : "/100"}
                  </span>
                </div>
                <div className="flex items-center">
                  {getTrendIcon(data.trend)}
                  <span
                    className={cn(
                      "text-sm ml-1",
                      data.trend === "improving"
                        ? "text-[#509555]"
                        : data.trend === "worsening"
                          ? "text-[#C64747]"
                          : "text-[#5F5B52]",
                    )}
                  >
                    {data.change > 0 ? "+" : ""}
                    {data.change}
                    {key === "temperature" ? "°C" : "%"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

