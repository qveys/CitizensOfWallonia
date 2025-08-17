"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { ZoneMetric } from "../types"

interface ZoneMetricsProps {
  metrics: ZoneMetric[]
}

export default function ZoneMetrics({ metrics }: ZoneMetricsProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "bg-[#509555]"
      case "medium":
        return "bg-[#82A768]"
      case "warning":
        return "bg-[#DFA23C]"
      case "bad":
        return "bg-[#D68C45]"
      case "critical":
        return "bg-[#C64747]"
      default:
        return "bg-[#A9A295]"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "good":
        return "Bon"
      case "medium":
        return "Moyen"
      case "warning":
        return "Attention"
      case "bad":
        return "Mauvais"
      case "critical":
        return "Critique"
      default:
        return "Inconnu"
    }
  }

  return (
    <div className="relative px-4 py-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-[#2B463C] font-montserrat">Métriques clés</h2>
        <div className="flex space-x-1">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-white"
            onClick={() => scrollCarousel("left")}
          >
            <ChevronLeft className="h-4 w-4 text-[#5F5B52]" />
            <span className="sr-only">Précédent</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-white"
            onClick={() => scrollCarousel("right")}
          >
            <ChevronRight className="h-4 w-4 text-[#5F5B52]" />
            <span className="sr-only">Suivant</span>
          </Button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {metrics.map((metric) => (
          <div key={metric.id} className="flex-shrink-0 w-40 bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between mb-2">
              <div className={cn("w-8 h-8 rounded-full flex items-center justify-center", `bg-[${metric.color}]`)}>
                <metric.icon className="h-4 w-4 text-white" />
              </div>
              <div className={cn("px-2 py-0.5 rounded-full text-white text-xs", getStatusColor(metric.status))}>
                {getStatusText(metric.status)}
              </div>
            </div>
            <div className="text-sm text-[#5F5B52]">{metric.name}</div>
            <div className="text-xl font-bold text-[#2B2B2B] font-roboto-mono">
              {metric.value}
              <span className="text-sm font-normal">{metric.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

