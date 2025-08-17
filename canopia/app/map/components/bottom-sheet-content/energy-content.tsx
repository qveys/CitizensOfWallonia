"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EnergyContentProps {
  selectedLocation: any
  navigateToZoneDetails: () => void
}

export function EnergyContent({ selectedLocation, navigateToZoneDetails }: EnergyContentProps) {
  return (
    <div className="space-y-4">
      <div className="bg-[#F4F1E9] p-4 rounded-lg">
        <h3 className="text-sm font-medium text-[#2B463C] mb-2">Consommation énergétique</h3>
        <div className="flex items-center">
          <span className="text-3xl font-roboto-mono text-[#2B2B2B]">
            {selectedLocation?.energyConsumption || 0} <span className="text-lg">kWh</span>
          </span>
          <span
            className={cn(
              "ml-2 text-sm",
              selectedLocation?.details?.energy?.trend === "increasing" ? "text-[#C64747]" : "text-[#509555]",
            )}
          >
            {selectedLocation?.details?.energy?.trend === "increasing" ? "↑" : "↓"}
            {Math.abs(
              (((selectedLocation?.energyConsumption || 0) - (selectedLocation?.details?.energy?.average || 0)) /
                (selectedLocation?.details?.energy?.average || 1)) *
                100,
            ).toFixed(1)}
            %
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#F4F1E9] p-3 rounded-lg">
          <div className="text-xs text-[#5F5B52] mb-1">Moyenne</div>
          <div className="text-lg font-roboto-mono text-[#2B2B2B]">
            {selectedLocation?.details?.energy?.average || 0} <span className="text-xs">kWh</span>
          </div>
        </div>
        <div className="bg-[#F4F1E9] p-3 rounded-lg">
          <div className="text-xs text-[#5F5B52] mb-1">Pic</div>
          <div className="text-lg font-roboto-mono text-[#2B2B2B]">
            {selectedLocation?.details?.energy?.peak || 0} <span className="text-xs">kWh</span>
          </div>
        </div>
      </div>

      <Button className="w-full bg-[#688F4E] hover:bg-[#82A768] text-white" onClick={navigateToZoneDetails}>
        Voir plus de détails
      </Button>
    </div>
  )
}

