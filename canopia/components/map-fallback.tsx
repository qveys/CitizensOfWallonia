"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Search, Layers, ZoomIn, ZoomOut, MapPin } from "lucide-react"

interface MapFallbackProps {
  activeLayer: string
  onLayerChange: (layer: string) => void
  onMapClick: (event: React.MouseEvent) => void
}

export default function MapFallback({ activeLayer, onLayerChange, onMapClick }: MapFallbackProps) {
  const [zoom, setZoom] = useState(1)

  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 0.2, 2))
  }

  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 0.2, 0.5))
  }

  return (
    <div className="relative w-full h-full bg-[#F4F1E9] overflow-hidden">
      {/* Notification de mode démo */}
      <div className="absolute top-0 left-0 right-0 bg-amber-500 text-white text-center py-1 z-50">
        Mode démonstration - Clé API Google Maps non configurée
      </div>

      {/* Carte de secours */}
      <div
        className="w-full h-full bg-[#E8E6E1] relative overflow-hidden"
        onClick={onMapClick}
        style={{
          backgroundImage: "url('/placeholder.svg?height=1000&width=1000')",
          backgroundSize: `${zoom * 100}%`,
          backgroundPosition: "center",
        }}
      >
        {/* Grille de la carte */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-gray-300/20"></div>
          ))}
        </div>

        {/* Points d'intérêt */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ transform: `translate(-50%, -50%) scale(${zoom})` }}
        >
          {/* Centre-ville */}
          <div className="absolute" style={{ top: 0, left: 0 }}>
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
                activeLayer === "pollution"
                  ? "bg-yellow-500/70"
                  : activeLayer === "temperature"
                    ? "bg-orange-500/70"
                    : activeLayer === "energy"
                      ? "bg-green-500/70"
                      : "bg-blue-500/70",
              )}
            >
              <MapPin className="text-white" size={20} />
            </div>
            <div className="text-xs font-medium mt-1 text-center">Centre-Ville</div>
          </div>

          {/* Quartier Nord */}
          <div className="absolute" style={{ top: "-80px", left: "-60px" }}>
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
                activeLayer === "pollution"
                  ? "bg-red-500/70"
                  : activeLayer === "temperature"
                    ? "bg-red-500/70"
                    : activeLayer === "energy"
                      ? "bg-yellow-500/70"
                      : "bg-yellow-500/70",
              )}
            >
              <MapPin className="text-white" size={20} />
            </div>
            <div className="text-xs font-medium mt-1 text-center">Quartier Nord</div>
          </div>

          {/* Parc Sud */}
          <div className="absolute" style={{ top: "80px", left: "60px" }}>
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
                activeLayer === "pollution"
                  ? "bg-green-500/70"
                  : activeLayer === "temperature"
                    ? "bg-blue-500/70"
                    : activeLayer === "energy"
                      ? "bg-green-500/70"
                      : "bg-blue-500/70",
              )}
            >
              <MapPin className="text-white" size={20} />
            </div>
            <div className="text-xs font-medium mt-1 text-center">Parc Sud</div>
          </div>

          {/* Zone Industrielle */}
          <div className="absolute" style={{ top: "40px", left: "-100px" }}>
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
                activeLayer === "pollution"
                  ? "bg-red-500/70"
                  : activeLayer === "temperature"
                    ? "bg-red-500/70"
                    : activeLayer === "energy"
                      ? "bg-red-500/70"
                      : "bg-red-500/70",
              )}
            >
              <MapPin className="text-white" size={20} />
            </div>
            <div className="text-xs font-medium mt-1 text-center">Zone Industrielle</div>
          </div>

          {/* Quartier Est */}
          <div className="absolute" style={{ top: "-30px", left: "90px" }}>
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
                activeLayer === "pollution"
                  ? "bg-yellow-500/70"
                  : activeLayer === "temperature"
                    ? "bg-yellow-500/70"
                    : activeLayer === "energy"
                      ? "bg-yellow-500/70"
                      : "bg-yellow-500/70",
              )}
            >
              <MapPin className="text-white" size={20} />
            </div>
            <div className="text-xs font-medium mt-1 text-center">Quartier Est</div>
          </div>
        </div>
      </div>

      {/* Barre de recherche */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4 z-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher un lieu..."
            className="w-full h-10 px-10 rounded-full bg-white shadow-md text-sm"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
        </div>
      </div>

      {/* Sélecteur de couches */}
      <div className="absolute top-28 right-4 bg-white rounded-md shadow-md z-10">
        <div className="p-2">
          <button className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100">
            <Layers size={20} className="text-gray-700" />
          </button>
        </div>
        <div className="px-2 pb-2 space-y-1">
          <button
            className={cn(
              "w-full px-3 py-1 text-xs font-medium rounded-md",
              activeLayer === "pollution" ? "bg-[#688F4E] text-white" : "bg-gray-100 text-gray-700",
            )}
            onClick={() => onLayerChange("pollution")}
          >
            Pollution
          </button>
          <button
            className={cn(
              "w-full px-3 py-1 text-xs font-medium rounded-md",
              activeLayer === "temperature" ? "bg-[#688F4E] text-white" : "bg-gray-100 text-gray-700",
            )}
            onClick={() => onLayerChange("temperature")}
          >
            Température
          </button>
          <button
            className={cn(
              "w-full px-3 py-1 text-xs font-medium rounded-md",
              activeLayer === "energy" ? "bg-[#688F4E] text-white" : "bg-gray-100 text-gray-700",
            )}
            onClick={() => onLayerChange("energy")}
          >
            Énergie
          </button>
          <button
            className={cn(
              "w-full px-3 py-1 text-xs font-medium rounded-md",
              activeLayer === "water" ? "bg-[#688F4E] text-white" : "bg-gray-100 text-gray-700",
            )}
            onClick={() => onLayerChange("water")}
          >
            Eau
          </button>
        </div>
      </div>

      {/* Contrôles de zoom */}
      <div className="absolute bottom-28 right-4 bg-white rounded-md shadow-md z-10">
        <div className="p-1 space-y-1">
          <button
            className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100"
            onClick={handleZoomIn}
          >
            <ZoomIn size={20} className="text-gray-700" />
          </button>
          <button
            className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100"
            onClick={handleZoomOut}
          >
            <ZoomOut size={20} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Légende */}
      <div className="absolute bottom-28 left-4 bg-white rounded-md shadow-md z-10 p-2">
        <div className="text-xs font-medium mb-1">Légende</div>
        <div className="space-y-1">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span className="text-xs">Faible</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <span className="text-xs">Moyen</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <span className="text-xs">Élevé</span>
          </div>
        </div>
      </div>
    </div>
  )
}

