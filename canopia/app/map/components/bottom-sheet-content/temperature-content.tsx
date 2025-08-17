"use client"

import { Button } from "@/components/ui/button"

interface TemperatureContentProps {
  selectedLocation: any
  navigateToZoneDetails: () => void
}

export function TemperatureContent({ selectedLocation, navigateToZoneDetails }: TemperatureContentProps) {
  return (
    <div className="space-y-4">
      <div className="bg-[#F4F1E9] p-4 rounded-lg">
        <h3 className="text-sm font-medium text-[#2B463C] mb-2">Température actuelle</h3>
        <div className="flex items-center">
          <span className="text-3xl font-roboto-mono text-[#2B2B2B]">{selectedLocation?.temperature || 0}°C</span>
          <span className="ml-2 text-sm text-[#5F5B52]">
            Ressenti: {selectedLocation?.details?.temperature?.feelsLike || 0}°C
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#F4F1E9] p-3 rounded-lg">
          <div className="text-xs text-[#5F5B52] mb-1">Min</div>
          <div className="text-lg font-roboto-mono text-[#2B2B2B]">
            {selectedLocation?.details?.temperature?.min || 0}°C
          </div>
        </div>
        <div className="bg-[#F4F1E9] p-3 rounded-lg">
          <div className="text-xs text-[#5F5B52] mb-1">Max</div>
          <div className="text-lg font-roboto-mono text-[#2B2B2B]">
            {selectedLocation?.details?.temperature?.max || 0}°C
          </div>
        </div>
      </div>

      <Button className="w-full bg-[#688F4E] hover:bg-[#82A768] text-white" onClick={navigateToZoneDetails}>
        Voir plus de détails
      </Button>
    </div>
  )
}

