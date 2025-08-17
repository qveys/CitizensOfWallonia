"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, ChevronUp, Calendar } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import type { EnvironmentData } from "../types"
import { getMetricIcon, getMetricColor } from "../utils/metric-utils"

interface TrendsDetailsProps {
  environmentData: EnvironmentData
  expanded: boolean
  activeMetric: string
  timeRange: string
  onTimeRangeChange: (value: string) => void
  onToggle: () => void
}

export default function TrendsDetails({
  environmentData,
  expanded,
  activeMetric,
  timeRange,
  onTimeRangeChange,
  onToggle,
}: TrendsDetailsProps) {
  const getTimeRangeData = () => {
    switch (timeRange) {
      case "day":
        return environmentData.daily
      case "week":
        return environmentData.weekly
      case "month":
        return environmentData.monthly
      default:
        return environmentData.weekly
    }
  }

  return (
    <div className="px-4 py-2">
      <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={onToggle}>
        <h2 className="text-lg font-semibold text-[#2B463C] font-montserrat">Tendances détaillées</h2>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          {expanded ? (
            <ChevronUp className="h-5 w-5 text-[#5F5B52]" />
          ) : (
            <ChevronDown className="h-5 w-5 text-[#5F5B52]" />
          )}
        </Button>
      </div>

      {expanded && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-[#5F5B52] mr-2" />
              <span className="text-sm text-[#5F5B52]">Période</span>
            </div>
            <Tabs defaultValue="week" value={timeRange} onValueChange={onTimeRangeChange}>
              <TabsList className="bg-[#F4F1E9]">
                <TabsTrigger
                  value="day"
                  className="text-xs data-[state=active]:bg-[#688F4E] data-[state=active]:text-white"
                >
                  Jour
                </TabsTrigger>
                <TabsTrigger
                  value="week"
                  className="text-xs data-[state=active]:bg-[#688F4E] data-[state=active]:text-white"
                >
                  Semaine
                </TabsTrigger>
                <TabsTrigger
                  value="month"
                  className="text-xs data-[state=active]:bg-[#688F4E] data-[state=active]:text-white"
                >
                  Mois
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center mb-3">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
                style={{ backgroundColor: getMetricColor(activeMetric) }}
              >
                {getMetricIcon(activeMetric)}
              </div>
              <div className="text-sm font-medium text-[#2B2B2B]">
                {activeMetric === "air"
                  ? "Évolution de la qualité de l'air"
                  : activeMetric === "temperature"
                    ? "Évolution de la température"
                    : activeMetric === "energy"
                      ? "Évolution de la consommation énergétique"
                      : "Évolution de la qualité de l'eau"}
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={getTimeRangeData()[activeMetric]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#EAE6DC" />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 10, fill: "#5F5B52" }}
                    tickLine={false}
                    axisLine={{ stroke: "#D8D3CA" }}
                  />
                  <YAxis
                    tick={{ fontSize: 10, fill: "#5F5B52" }}
                    tickLine={false}
                    axisLine={{ stroke: "#D8D3CA" }}
                    domain={
                      activeMetric === "temperature" ? [20, 35] : activeMetric === "energy" ? [300, 600] : [0, 100]
                    }
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#FFFFFF",
                      border: "none",
                      borderRadius: "4px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                    labelStyle={{ color: "#2B2B2B", fontWeight: "bold" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={getMetricColor(activeMetric)}
                    fill={getMetricColor(activeMetric)}
                    fillOpacity={0.2}
                    strokeWidth={2}
                    dot={{ fill: getMetricColor(activeMetric), r: 4 }}
                    activeDot={{
                      fill: getMetricColor(activeMetric),
                      r: 6,
                      stroke: "#FFFFFF",
                      strokeWidth: 2,
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-3 text-xs text-[#5F5B52] italic">
              {activeMetric === "air"
                ? "La qualité de l'air montre une tendance à l'amélioration sur la période."
                : activeMetric === "temperature"
                  ? "Les températures sont en hausse constante, dépassant les moyennes saisonnières."
                  : activeMetric === "energy"
                    ? "La consommation énergétique diminue progressivement, possiblement grâce aux initiatives d'efficacité."
                    : "La qualité de l'eau reste stable avec de légères améliorations."}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

