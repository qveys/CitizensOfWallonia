"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wind, Thermometer, Zap, Droplet } from "lucide-react"

interface LayerSelectorProps {
  activeLayer: string
  setActiveLayer: (layer: string) => void
}

export function LayerSelector({ activeLayer, setActiveLayer }: LayerSelectorProps) {
  return (
    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10">
      <Tabs defaultValue="pollution" value={activeLayer} onValueChange={setActiveLayer}>
        <TabsList className="bg-white shadow-md">
          <TabsTrigger value="pollution" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
            <Wind className="w-4 h-4 mr-1" />
            Pollution
          </TabsTrigger>
          <TabsTrigger value="temperature" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
            <Thermometer className="w-4 h-4 mr-1" />
            Chaleur
          </TabsTrigger>
          <TabsTrigger value="energy" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
            <Zap className="w-4 h-4 mr-1" />
            Énergie
          </TabsTrigger>
          <TabsTrigger value="water" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
            <Droplet className="w-4 h-4 mr-1" />
            Eau
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}

