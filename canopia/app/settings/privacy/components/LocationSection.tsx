"use client"

import { Switch } from "@/components/ui/switch"
import { MapPin } from "lucide-react"

interface LocationSectionProps {
  locationTracking: boolean
  onLocationChange: (value: boolean) => void
  preciseLocation: boolean
  onPreciseLocationChange: (value: boolean) => void
}

export default function LocationSection({
  locationTracking,
  onLocationChange,
  preciseLocation,
  onPreciseLocationChange,
}: LocationSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center mb-4">
        <MapPin className="h-5 w-5 text-[#2B463C] mr-2" />
        <h2 className="text-lg font-medium text-[#2B463C] font-montserrat">Localisation</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-[#2B2B2B]">Suivi de position</div>
            <div className="text-xs text-[#5F5B52]">Autoriser l'application à accéder à votre position</div>
          </div>
          <Switch
            checked={locationTracking}
            onCheckedChange={onLocationChange}
            className="data-[state=checked]:bg-[#688F4E]"
          />
        </div>

        {locationTracking && (
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-[#2B2B2B]">Position précise</div>
              <div className="text-xs text-[#5F5B52]">Utiliser la position GPS précise</div>
            </div>
            <Switch
              checked={preciseLocation}
              onCheckedChange={onPreciseLocationChange}
              className="data-[state=checked]:bg-[#688F4E]"
            />
          </div>
        )}
      </div>
    </div>
  )
}

