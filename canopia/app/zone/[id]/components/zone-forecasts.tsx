"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Wind, Thermometer, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ZoneForecasts as ZoneForecastsType } from "../types"

interface ZoneForecastsProps {
  forecasts: ZoneForecastsType
  expanded: boolean
  detailedView: boolean
  onToggle: () => void
}

export default function ZoneForecasts({ forecasts, expanded, detailedView, onToggle }: ZoneForecastsProps) {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "improving":
        return "↑"
      case "worsening":
        return "↓"
      case "stable":
        return "→"
      default:
        return ""
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "improving":
        return "text-[#509555]"
      case "worsening":
        return "text-[#C64747]"
      case "stable":
        return "text-[#5F5B52]"
      default:
        return ""
    }
  }

  return (
    <div className="px-4 py-2">
      <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={onToggle}>
        <h2 className="text-lg font-semibold text-[#2B463C] font-montserrat">Prévisions</h2>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          {expanded ? (
            <ChevronUp className="h-5 w-5 text-[#5F5B52]" />
          ) : (
            <ChevronDown className="h-5 w-5 text-[#5F5B52]" />
          )}
        </Button>
      </div>

      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-4 py-3 bg-[#F4F1E9]">
              <div className="flex items-center">
                <Wind className="h-5 w-5 text-[#688F4E] mr-2" />
                <span className="text-sm font-medium text-[#2B2B2B]">Qualité de l'air</span>
              </div>
            </div>

            <div className="divide-y divide-[#EAE6DC]">
              {forecasts.air.map((forecast, index) => (
                <div key={index} className="px-4 py-3 flex items-center justify-between">
                  <div className="text-sm text-[#2B2B2B]">{forecast.day}</div>
                  <div className="flex items-center">
                    <div
                      className={cn(
                        "px-2 py-0.5 rounded-full text-white text-xs mr-2",
                        forecast.value >= 80
                          ? "bg-[#509555]"
                          : forecast.value >= 60
                            ? "bg-[#82A768]"
                            : forecast.value >= 40
                              ? "bg-[#DFA23C]"
                              : forecast.value >= 20
                                ? "bg-[#D68C45]"
                                : "bg-[#C64747]",
                      )}
                    >
                      {forecast.value}
                    </div>
                    <span className={cn("text-sm font-medium", getTrendColor(forecast.trend))}>
                      {getTrendIcon(forecast.trend)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {detailedView && (
            <>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="px-4 py-3 bg-[#F4F1E9]">
                  <div className="flex items-center">
                    <Thermometer className="h-5 w-5 text-[#D68C45] mr-2" />
                    <span className="text-sm font-medium text-[#2B2B2B]">Température</span>
                  </div>
                </div>

                <div className="divide-y divide-[#EAE6DC]">
                  {forecasts.temperature.map((forecast, index) => (
                    <div key={index} className="px-4 py-3 flex items-center justify-between">
                      <div className="text-sm text-[#2B2B2B]">{forecast.day}</div>
                      <div className="flex items-center">
                        <div className="text-lg font-roboto-mono text-[#2B2B2B] mr-2">{forecast.value}°C</div>
                        <span className={cn("text-sm font-medium", getTrendColor(forecast.trend))}>
                          {getTrendIcon(forecast.trend)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="px-4 py-3 bg-[#F4F1E9]">
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-[#DFA23C] mr-2" />
                    <span className="text-sm font-medium text-[#2B2B2B]">Consommation énergétique</span>
                  </div>
                </div>

                <div className="divide-y divide-[#EAE6DC]">
                  {forecasts.energy.map((forecast, index) => (
                    <div key={index} className="px-4 py-3 flex items-center justify-between">
                      <div className="text-sm text-[#2B2B2B]">{forecast.day}</div>
                      <div className="flex items-center">
                        <div className="text-lg font-roboto-mono text-[#2B2B2B] mr-2">
                          {forecast.value} <span className="text-sm">kWh</span>
                        </div>
                        <span className={cn("text-sm font-medium", getTrendColor(forecast.trend))}>
                          {getTrendIcon(forecast.trend)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </motion.div>
      )}
    </div>
  )
}

