"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import type { EnvironmentData } from "../types"
import { getMetricIcon, getMetricColor } from "../utils/metric-utils"

interface TrendsInsightsProps {
  environmentData: EnvironmentData
  expanded: boolean
  activeMetric: string
  onToggle: () => void
  onViewAll: () => void
}

export default function TrendsInsights({
  environmentData,
  expanded,
  activeMetric,
  onToggle,
  onViewAll,
}: TrendsInsightsProps) {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "positive":
        return "bg-[#509555]/10 border-[#509555]/30 text-[#509555]"
      case "negative":
        return "bg-[#C64747]/10 border-[#C64747]/30 text-[#C64747]"
      case "neutral":
        return "bg-[#5F5B52]/10 border-[#5F5B52]/30 text-[#5F5B52]"
      default:
        return "bg-[#5F5B52]/10 border-[#5F5B52]/30 text-[#5F5B52]"
    }
  }

  return (
    <div className="px-4 py-2">
      <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={onToggle}>
        <h2 className="text-lg font-semibold text-[#2B463C] font-montserrat">Analyses et perspectives</h2>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          {expanded ? (
            <ChevronUp className="h-5 w-5 text-[#5F5B52]" />
          ) : (
            <ChevronDown className="h-5 w-5 text-[#5F5B52]" />
          )}
        </Button>
      </div>

      {expanded && (
        <div className="space-y-3">
          {environmentData.insights.map((insight) => (
            <div
              key={insight.id}
              className={cn(
                "border rounded-lg p-3",
                getImpactColor(insight.impact),
                activeMetric === insight.type ? "bg-opacity-20" : "bg-opacity-10",
              )}
            >
              <div className="flex items-start">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1"
                  style={{ backgroundColor: getMetricColor(insight.type) }}
                >
                  {getMetricIcon(insight.type)}
                </div>
                <div>
                  <h3 className="text-base font-medium mb-1">{insight.title}</h3>
                  <p className="text-sm">{insight.description}</p>
                </div>
              </div>
            </div>
          ))}

          <Button variant="outline" className="w-full mt-2 border-[#D8D3CA] text-[#5F5B52]" onClick={onViewAll}>
            Voir toutes les analyses
          </Button>
        </div>
      )}
    </div>
  )
}

