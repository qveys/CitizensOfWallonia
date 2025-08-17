"use client"

import { ArrowDown, ArrowUp, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EnvironmentalMetric {
  id: string
  name: string
  value: number
  unit: string
  change: number
  trend: "up" | "down" | "stable"
  status: "good" | "warning" | "bad"
}

interface EnvironmentalMetricsSectionProps {
  metrics: EnvironmentalMetric[]
  onMetricClick: (metricId: string) => void
}

export default function EnvironmentalMetricsSection({ metrics, onMetricClick }: EnvironmentalMetricsSectionProps) {
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

  const getTrendColor = (trend: string, isPositive: boolean) => {
    if (trend === "stable") return "text-[#5F5B52]"
    if ((trend === "up" && isPositive) || (trend === "down" && !isPositive)) {
      return "text-[#509555]"
    }
    return "text-[#C64747]"
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "bg-[#509555]/10 border-[#509555]/30"
      case "warning":
        return "bg-[#DFA23C]/10 border-[#DFA23C]/30"
      case "bad":
        return "bg-[#C64747]/10 border-[#C64747]/30"
      default:
        return "bg-[#5F5B52]/10 border-[#5F5B52]/30"
    }
  }

  // Déterminer si une tendance est positive en fonction du type de métrique
  const isPositiveTrend = (metricId: string, trend: string) => {
    // Pour la consommation énergétique, une baisse est positive
    if (metricId === "energy") {
      return trend === "down"
    }
    // Pour les autres métriques, une hausse est généralement positive
    return trend === "up"
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-medium text-[#2B463C] font-montserrat">Métriques environnementales</h2>
        <Button
          variant="ghost"
          size="sm"
          className="text-[#688F4E] p-0 h-auto"
          onClick={() => onMetricClick("overview")}
        >
          Voir tout
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className={cn("border rounded-lg p-3 cursor-pointer", getStatusColor(metric.status))}
            onClick={() => onMetricClick(metric.id)}
          >
            <div className="text-sm font-medium text-[#2B2B2B] mb-1">{metric.name}</div>
            <div className="flex items-end justify-between">
              <div className="text-xl font-bold text-[#2B2B2B] font-roboto-mono">
                {metric.value}
                <span className="text-sm font-normal ml-1">{metric.unit}</span>
              </div>
              <div
                className={cn(
                  "flex items-center text-sm",
                  getTrendColor(metric.trend, isPositiveTrend(metric.id, metric.trend)),
                )}
              >
                {getTrendIcon(metric.trend)}
                <span className="ml-1">
                  {metric.change > 0 ? "+" : ""}
                  {metric.change}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

