"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import type { EnvironmentData } from "../types"
import { getMetricColor } from "../utils/metric-utils"

interface TrendsComparisonProps {
  environmentData: EnvironmentData
  expanded: boolean
  activeMetric: string
  onToggle: () => void
}

export default function TrendsComparison({ environmentData, expanded, activeMetric, onToggle }: TrendsComparisonProps) {
  return (
    <div className="px-4 py-2">
      <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={onToggle}>
        <h2 className="text-lg font-semibold text-[#2B463C] font-montserrat">Comparaison par zone</h2>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          {expanded ? (
            <ChevronUp className="h-5 w-5 text-[#5F5B52]" />
          ) : (
            <ChevronDown className="h-5 w-5 text-[#5F5B52]" />
          )}
        </Button>
      </div>

      {expanded && (
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={environmentData.comparison.zones}
                margin={{
                  top: 5,
                  right: 5,
                  left: 5,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#EAE6DC" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 10, fill: "#5F5B52" }}
                  tickLine={false}
                  axisLine={{ stroke: "#D8D3CA" }}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: "#5F5B52" }}
                  tickLine={false}
                  axisLine={{ stroke: "#D8D3CA" }}
                  domain={activeMetric === "temperature" ? [20, 35] : activeMetric === "energy" ? [300, 600] : [0, 100]}
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
                <Bar dataKey={activeMetric} fill={getMetricColor(activeMetric)} radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-3 text-xs text-[#5F5B52] italic">
            {activeMetric === "air"
              ? "Le Quartier Sud présente la meilleure qualité d'air, tandis que le Centre-Ville est le plus pollué."
              : activeMetric === "temperature"
                ? "Le Centre-Ville est le plus chaud, illustrant l'effet d'îlot de chaleur urbain."
                : activeMetric === "energy"
                  ? "Le Quartier Sud consomme le moins d'énergie, possiblement grâce à ses bâtiments plus récents."
                  : "Le Quartier Sud bénéficie de la meilleure qualité d'eau, probablement en raison de sa proximité avec la station d'épuration."}
          </div>
        </div>
      )}
    </div>
  )
}

