"use client"

import { MapPin, Clock, ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Route, TransportMode } from "../hooks/useTransportPageState"

interface RouteCardProps {
  route: Route
  transportModes: TransportMode[]
  onClick: () => void
  onFavoriteToggle: () => void
}

export default function RouteCard({ route, transportModes, onClick, onFavoriteToggle }: RouteCardProps) {
  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`
  }

  const getModeIcon = (modeId: string) => {
    const mode = transportModes.find((m) => m.id === modeId)
    return mode ? mode.icon : "🚶"
  }

  const getRouteColor = () => {
    // Déterminer la couleur en fonction de l'impact CO2
    if (route.co2 === 0) return "bg-[#509555]/10 border-[#509555]/30"
    if (route.co2 < 100) return "bg-[#688F4E]/10 border-[#688F4E]/30"
    if (route.co2 < 300) return "bg-[#DFA23C]/10 border-[#DFA23C]/30"
    return "bg-[#D68C45]/10 border-[#D68C45]/30"
  }

  return (
    <div className={cn("border rounded-lg p-4 mb-4 cursor-pointer", getRouteColor())} onClick={onClick}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="flex items-center text-[#2B463C] font-medium">
            <span>{route.from}</span>
            <ArrowRight className="h-4 w-4 mx-1" />
            <span>{route.to}</span>
          </div>
          <div className="flex items-center text-xs text-[#5F5B52] mt-1">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{route.distance.toFixed(1)} km</span>
            <Clock className="h-3 w-3 ml-3 mr-1" />
            <span>{formatDuration(route.duration)}</span>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className={cn("h-8 w-8 p-0", route.isFavorite ? "text-[#C64747]" : "text-[#5F5B52]")}
          onClick={(e) => {
            e.stopPropagation()
            onFavoriteToggle()
          }}
        >
          <Heart className={cn("h-5 w-5", route.isFavorite && "fill-[#C64747]")} />
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          {route.modes.map((mode, index) => (
            <div
              key={index}
              className="flex items-center bg-white px-2 py-1 rounded-full text-xs border border-[#D8D3CA]"
            >
              <span className="mr-1">{getModeIcon(mode)}</span>
              <span>{transportModes.find((m) => m.id === mode)?.name || mode}</span>
            </div>
          ))}
        </div>

        <div className="text-xs">
          {route.co2 === 0 ? (
            <span className="text-[#509555]">0 CO₂</span>
          ) : (
            <span className="text-[#5F5B52]">{route.co2.toFixed(1)} g CO₂</span>
          )}
        </div>
      </div>
    </div>
  )
}

