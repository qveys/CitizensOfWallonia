"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PollutionContentProps {
  selectedLocation: any
  navigateToZoneDetails: () => void
}

export function PollutionContent({ selectedLocation, navigateToZoneDetails }: PollutionContentProps) {
  return (
    <div className="space-y-4">
      <div className="bg-[#F4F1E9] p-4 rounded-lg">
        <h3 className="text-sm font-medium text-[#2B463C] mb-2">Qualité de l'air</h3>
        <div className="flex items-center">
          <div className="w-full bg-[#D8D3CA] rounded-full h-2.5">
            <div
              className={cn(
                "h-2.5 rounded-full",
                selectedLocation?.airQuality >= 80
                  ? "bg-[#509555]"
                  : selectedLocation?.airQuality >= 60
                    ? "bg-[#82A768]"
                    : selectedLocation?.airQuality >= 40
                      ? "bg-[#DFA23C]"
                      : "bg-[#C64747]",
              )}
              style={{ width: `${selectedLocation?.airQuality || 0}%` }}
            ></div>
          </div>
          <span className="ml-2 text-sm font-roboto-mono text-[#2B2B2B]">{selectedLocation?.airQuality || 0}/100</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#F4F1E9] p-3 rounded-lg">
          <div className="text-xs text-[#5F5B52] mb-1">PM2.5</div>
          <div className="text-lg font-roboto-mono text-[#2B2B2B]">
            {selectedLocation?.details?.pollution?.pm25 || 0} <span className="text-xs">µg/m³</span>
          </div>
        </div>
        <div className="bg-[#F4F1E9] p-3 rounded-lg">
          <div className="text-xs text-[#5F5B52] mb-1">PM10</div>
          <div className="text-lg font-roboto-mono text-[#2B2B2B]">
            {selectedLocation?.details?.pollution?.pm10 || 0} <span className="text-xs">µg/m³</span>
          </div>
        </div>
        <div className="bg-[#F4F1E9] p-3 rounded-lg">
          <div className="text-xs text-[#5F5B52] mb-1">NO₂</div>
          <div className="text-lg font-roboto-mono text-[#2B2B2B]">
            {selectedLocation?.details?.pollution?.no2 || 0} <span className="text-xs">µg/m³</span>
          </div>
        </div>
        <div className="bg-[#F4F1E9] p-3 rounded-lg">
          <div className="text-xs text-[#5F5B52] mb-1">O₃</div>
          <div className="text-lg font-roboto-mono text-[#2B2B2B]">
            {selectedLocation?.details?.pollution?.o3 || 0} <span className="text-xs">µg/m³</span>
          </div>
        </div>
      </div>

      <Button className="w-full bg-[#688F4E] hover:bg-[#82A768] text-white" onClick={navigateToZoneDetails}>
        Voir plus de détails
      </Button>
    </div>
  )
}

