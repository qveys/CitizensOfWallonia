"use client"

import { X, Layers, Eye, EyeOff, Sliders } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

interface LayersPanelProps {
  onClose: () => void
}

export function LayersPanel({ onClose }: LayersPanelProps) {
  const [layers, setLayers] = useState([
    { id: "pollution", name: "Pollution de l'air", visible: true, opacity: 80 },
    { id: "temperature", name: "Îlots de chaleur", visible: true, opacity: 70 },
    { id: "energy", name: "Consommation d'énergie", visible: false, opacity: 60 },
    { id: "water", name: "Qualité de l'eau", visible: false, opacity: 70 },
    { id: "vegetation", name: "Couverture végétale", visible: true, opacity: 80 },
    { id: "noise", name: "Pollution sonore", visible: false, opacity: 60 },
    { id: "transport", name: "Réseau de transport", visible: true, opacity: 90 },
    { id: "buildings", name: "Bâtiments", visible: true, opacity: 100 },
  ])

  const toggleLayerVisibility = (id: string) => {
    setLayers(layers.map((layer) => (layer.id === id ? { ...layer, visible: !layer.visible } : layer)))
  }

  const updateLayerOpacity = (id: string, opacity: number) => {
    setLayers(layers.map((layer) => (layer.id === id ? { ...layer, opacity } : layer)))
  }

  return (
    <Card className="absolute top-20 right-4 w-80 max-h-[calc(100vh-160px)] overflow-y-auto z-10 shadow-lg bg-white/90 backdrop-blur-sm">
      <CardHeader className="py-3 px-4 flex flex-row items-center justify-between">
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <Layers className="h-5 w-5" />
          Gestion des couches
        </CardTitle>
        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent className="py-2 px-4 space-y-3">
        {layers.map((layer) => (
          <div key={layer.id} className="space-y-2 pb-3 border-b border-gray-200 last:border-0">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{layer.name}</span>
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => toggleLayerVisibility(layer.id)}>
                {layer.visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4 text-gray-400" />}
              </Button>
            </div>
            {layer.visible && (
              <div className="flex items-center gap-3">
                <Sliders className="h-4 w-4 text-gray-500" />
                <Slider
                  value={[layer.opacity]}
                  min={0}
                  max={100}
                  step={10}
                  className="flex-1"
                  onValueChange={(value) => updateLayerOpacity(layer.id, value[0])}
                />
                <span className="text-xs w-8 text-right">{layer.opacity}%</span>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

