"use client"

import { cn } from "@/lib/utils"

interface QualityIndicatorProps {
  score: number // 0-100
}

function QualityIndicator({ score }: QualityIndicatorProps) {
  // Determine color based on score
  const getColor = () => {
    if (score >= 80) return "bg-[#509555]"
    if (score >= 60) return "bg-[#82A768]"
    if (score >= 40) return "bg-[#DFA23C]"
    if (score >= 20) return "bg-[#D68C45]"
    return "bg-[#C64747]"
  }

  // Determine label based on score
  const getLabel = () => {
    if (score >= 80) return "Excellent"
    if (score >= 60) return "Bon"
    if (score >= 40) return "Moyen"
    if (score >= 20) return "Mauvais"
    return "Critique"
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        "bg-white rounded-lg shadow-md p-2",
        "cursor-pointer hover:shadow-lg transition-shadow",
      )}
      onClick={() => {
        /* Navigate to details page */
      }}
    >
      <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-1", getColor())}>
        <span className="text-white font-bold text-lg">{score}</span>
      </div>
      <span className="text-xs font-medium text-[#2B2B2B]">{getLabel()}</span>
    </div>
  )
}

export default QualityIndicator
export { QualityIndicator }

