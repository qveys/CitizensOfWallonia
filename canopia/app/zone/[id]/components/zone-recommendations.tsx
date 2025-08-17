"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Bell, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ZoneRecommendation } from "../types"

interface ZoneRecommendationsProps {
  recommendations: ZoneRecommendation[]
  expanded: boolean
  onToggle: () => void
}

export default function ZoneRecommendations({ recommendations, expanded, onToggle }: ZoneRecommendationsProps) {
  return (
    <div className="px-4 py-2">
      <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={onToggle}>
        <h2 className="text-lg font-semibold text-[#2B463C] font-montserrat">Recommandations</h2>
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
          className="space-y-3"
        >
          {recommendations.map((rec) => (
            <div key={rec.id} className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-start">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-3",
                    rec.priority === "high"
                      ? "bg-[#C64747]"
                      : rec.priority === "medium"
                        ? "bg-[#DFA23C]"
                        : "bg-[#688F4E]",
                  )}
                >
                  {rec.type === "health" ? (
                    <Bell className="h-5 w-5 text-white" />
                  ) : (
                    <Zap className="h-5 w-5 text-white" />
                  )}
                </div>
                <div>
                  <h3 className="text-base font-medium text-[#2B2B2B] mb-1">{rec.title}</h3>
                  <p className="text-sm text-[#5F5B52]">{rec.description}</p>

                  <div className="mt-3 flex justify-end">
                    <Button variant="outline" size="sm" className="text-xs h-8 border-[#D8D3CA] text-[#5F5B52] mr-2">
                      Ignorer
                    </Button>
                    <Button size="sm" className="text-xs h-8 bg-[#688F4E] hover:bg-[#82A768] text-white">
                      Agir
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

