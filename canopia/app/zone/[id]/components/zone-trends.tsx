"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Wind, Thermometer, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"
import type { ZoneTrends as ZoneTrendsType } from "../types"

interface ZoneTrendsProps {
  trends: ZoneTrendsType
  expanded: boolean
  detailedView: boolean
  onToggle: () => void
}

export default function ZoneTrends({ trends, expanded, detailedView, onToggle }: ZoneTrendsProps) {
  return (
    <div className="px-4 py-2">
      <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={onToggle}>
        <h2 className="text-lg font-semibold text-[#2B463C] font-montserrat">Tendances</h2>
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
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Wind className="h-5 w-5 text-[#688F4E] mr-2" />
                <span className="text-sm font-medium text-[#2B2B2B]">Qualité de l'air (24h)</span>
              </div>
              <div className="text-xs text-[#5F5B52]">Indice</div>
            </div>

            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trends.air}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#EAE6DC" />
                  <XAxis
                    dataKey="time"
                    tick={{ fontSize: 10, fill: "#5F5B52" }}
                    tickLine={false}
                    axisLine={{ stroke: "#D8D3CA" }}
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fontSize: 10, fill: "#5F5B52" }}
                    tickLine={false}
                    axisLine={{ stroke: "#D8D3CA" }}
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
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#688F4E"
                    strokeWidth={2}
                    dot={{ fill: "#688F4E", r: 4 }}
                    activeDot={{ fill: "#2B463C", r: 6, stroke: "#FFFFFF", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-2 text-xs text-[#5F5B52] italic">
              Tendance: En baisse sur la journée, amélioration en soirée
            </div>
          </div>

          {detailedView && (
            <>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Thermometer className="h-5 w-5 text-[#D68C45] mr-2" />
                    <span className="text-sm font-medium text-[#2B2B2B]">Température (24h)</span>
                  </div>
                  <div className="text-xs text-[#5F5B52]">°C</div>
                </div>

                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trends.temperature}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#EAE6DC" />
                      <XAxis
                        dataKey="time"
                        tick={{ fontSize: 10, fill: "#5F5B52" }}
                        tickLine={false}
                        axisLine={{ stroke: "#D8D3CA" }}
                      />
                      <YAxis
                        domain={[15, 35]}
                        tick={{ fontSize: 10, fill: "#5F5B52" }}
                        tickLine={false}
                        axisLine={{ stroke: "#D8D3CA" }}
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
                        stroke="#D68C45"
                        fill="#D68C45"
                        fillOpacity={0.2}
                        strokeWidth={2}
                        dot={{ fill: "#D68C45", r: 4 }}
                        activeDot={{ fill: "#D68C45", r: 6, stroke: "#FFFFFF", strokeWidth: 2 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-2 text-xs text-[#5F5B52] italic">
                  Tendance: Pic de chaleur en après-midi, +2°C vs normale saisonnière
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-[#DFA23C] mr-2" />
                    <span className="text-sm font-medium text-[#2B2B2B]">Consommation énergétique (24h)</span>
                  </div>
                  <div className="text-xs text-[#5F5B52]">kWh</div>
                </div>

                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trends.energy}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#EAE6DC" />
                      <XAxis
                        dataKey="time"
                        tick={{ fontSize: 10, fill: "#5F5B52" }}
                        tickLine={false}
                        axisLine={{ stroke: "#D8D3CA" }}
                      />
                      <YAxis
                        domain={[200, 600]}
                        tick={{ fontSize: 10, fill: "#5F5B52" }}
                        tickLine={false}
                        axisLine={{ stroke: "#D8D3CA" }}
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
                        stroke="#DFA23C"
                        fill="#DFA23C"
                        fillOpacity={0.2}
                        strokeWidth={2}
                        dot={{ fill: "#DFA23C", r: 4 }}
                        activeDot={{ fill: "#DFA23C", r: 6, stroke: "#FFFFFF", strokeWidth: 2 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-2 text-xs text-[#5F5B52] italic">
                  Tendance: Consommation élevée en journée, +15% vs moyenne
                </div>
              </div>
            </>
          )}
        </motion.div>
      )}
    </div>
  )
}

