"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface MapLegendProps {
  activeLayer: string
  onClose: () => void
}

export function MapLegend({ activeLayer, onClose }: MapLegendProps) {
  const getLegendItems = () => {
    switch (activeLayer) {
      case "pollution":
        return [
          { color: "#4CAF50", label: "Faible (< 50)" },
          { color: "#FFC107", label: "Modérée (50-70)" },
          { color: "#E91E63", label: "Élevée (> 70)" },
        ]
      case "temperature":
        return [
          { color: "#03A9F4", label: "Fraîche (< 22°C)" },
          { color: "#FFC107", label: "Modérée (22-25°C)" },
          { color: "#E91E63", label: "Chaude (> 25°C)" },
        ]
      case "energy":
        return [
          { color: "#8BC34A", label: "Faible (< 40)" },
          { color: "#FFC107", label: "Modérée (40-60)" },
          { color: "#E91E63", label: "Élevée (> 60)" },
        ]
      case "water":
        return [
          { color: "#03A9F4", label: "Faible (< 40)" },
          { color: "#FFC107", label: "Modérée (40-60)" },
          { color: "#E91E63", label: "Élevée (> 60)" },
        ]
      default:
        return [
          { color: "#4CAF50", label: "Faible" },
          { color: "#FFC107", label: "Modérée" },
          { color: "#E91E63", label: "Élevée" },
        ]
    }
  }

  const getLegendTitle = () => {
    switch (activeLayer) {
      case "pollution":
        return "Pollution de l'air"
      case "temperature":
        return "Température"
      case "energy":
        return "Consommation d'énergie"
      case "water":
        return "Qualité de l'eau"
      default:
        return "Légende"
    }
  }

  return (
    <Card className="absolute bottom-24 right-4 w-64 z-10 shadow-lg bg-white/90 backdrop-blur-sm">
      <CardHeader className="py-2 px-4 flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">{getLegendTitle()}</CardTitle>
        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="py-2 px-4">
        <div className="space-y-2">
          {getLegendItems().map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: item.color }} />
              <span className="text-xs">{item.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

