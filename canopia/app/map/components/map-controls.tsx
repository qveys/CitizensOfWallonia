"use client"

import { Button } from "@/components/ui/button"
import { Pencil, Ruler, Layers, Maximize, Minimize, WavesIcon as HeatWaves } from "lucide-react"
import { cn } from "@/lib/utils"

interface MapControlsProps {
  showDrawTools: boolean
  showMeasureTools: boolean
  showLayersPanel: boolean
  isFullscreen: boolean
  showHeatmap: boolean
  onToggleDrawTools: () => void
  onToggleMeasureTools: () => void
  onToggleLayersPanel: () => void
  onToggleFullscreen: () => void
  onToggleHeatmap: () => void
}

export function MapControls({
  showDrawTools,
  showMeasureTools,
  showLayersPanel,
  isFullscreen,
  showHeatmap,
  onToggleDrawTools,
  onToggleMeasureTools,
  onToggleLayersPanel,
  onToggleFullscreen,
  onToggleHeatmap,
}: MapControlsProps) {
  return (
    <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
      <Button
        variant="outline"
        size="icon"
        className={cn("bg-white shadow-md hover:bg-gray-100", showDrawTools && "bg-gray-200 hover:bg-gray-200")}
        onClick={onToggleDrawTools}
        title="Outils de dessin"
      >
        <Pencil className="h-5 w-5 text-[#4D4D4D]" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className={cn("bg-white shadow-md hover:bg-gray-100", showMeasureTools && "bg-gray-200 hover:bg-gray-200")}
        onClick={onToggleMeasureTools}
        title="Outils de mesure"
      >
        <Ruler className="h-5 w-5 text-[#4D4D4D]" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className={cn("bg-white shadow-md hover:bg-gray-100", showLayersPanel && "bg-gray-200 hover:bg-gray-200")}
        onClick={onToggleLayersPanel}
        title="Gestion des couches"
      >
        <Layers className="h-5 w-5 text-[#4D4D4D]" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className={cn("bg-white shadow-md hover:bg-gray-100", showHeatmap && "bg-gray-200 hover:bg-gray-200")}
        onClick={onToggleHeatmap}
        title="Carte de chaleur"
      >
        <HeatWaves className="h-5 w-5 text-[#4D4D4D]" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="bg-white shadow-md hover:bg-gray-100"
        onClick={onToggleFullscreen}
        title={isFullscreen ? "Quitter le plein écran" : "Plein écran"}
      >
        {isFullscreen ? (
          <Minimize className="h-5 w-5 text-[#4D4D4D]" />
        ) : (
          <Maximize className="h-5 w-5 text-[#4D4D4D]" />
        )}
      </Button>
    </div>
  )
}

