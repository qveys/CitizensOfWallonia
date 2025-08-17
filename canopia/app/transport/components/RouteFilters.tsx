"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MapPin } from "lucide-react"
import type { TransportMode } from "../hooks/useTransportPageState"

interface RouteFiltersProps {
  transportModes: TransportMode[]
  selectedModes: string[]
  fromLocation: string
  toLocation: string
  onFromLocationChange: (value: string) => void
  onToLocationChange: (value: string) => void
  onModeToggle: (modeId: string) => void
}

export default function RouteFilters({
  transportModes,
  selectedModes,
  fromLocation,
  toLocation,
  onFromLocationChange,
  onToLocationChange,
  onModeToggle,
}: RouteFiltersProps) {
  return (
    <div className="space-y-3 mb-4">
      <div className="flex space-x-2">
        <div className="relative flex-1">
          <Input
            placeholder="Départ"
            className="pl-10 pr-4 py-2 bg-white border-[#D8D3CA] rounded-lg text-[#2B2B2B]"
            value={fromLocation}
            onChange={(e) => onFromLocationChange(e.target.value)}
          />
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5F5B52] w-5 h-5" />
        </div>

        <div className="relative flex-1">
          <Input
            placeholder="Arrivée"
            className="pl-10 pr-4 py-2 bg-white border-[#D8D3CA] rounded-lg text-[#2B2B2B]"
            value={toLocation}
            onChange={(e) => onToLocationChange(e.target.value)}
          />
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5F5B52] w-5 h-5" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {transportModes.map((mode) => (
          <Button
            key={mode.id}
            variant="outline"
            className={cn(
              "rounded-full border-[#D8D3CA]",
              selectedModes.includes(mode.id) && `bg-[${mode.color}] text-white border-[${mode.color}]`,
            )}
            onClick={() => onModeToggle(mode.id)}
          >
            <span className="mr-1">{mode.icon}</span>
            {mode.name}
          </Button>
        ))}
      </div>
    </div>
  )
}

