"use client"

import { PollutionContent } from "./pollution-content"
import { TemperatureContent } from "./temperature-content"
import { EnergyContent } from "./energy-content"
import { WaterContent } from "./water-content"

interface BottomSheetContentProps {
  activeLayer: string
  selectedLocation: any
  navigateToZoneDetails: () => void
}

export function BottomSheetContent({ activeLayer, selectedLocation, navigateToZoneDetails }: BottomSheetContentProps) {
  switch (activeLayer) {
    case "pollution":
      return <PollutionContent data={selectedLocation} navigateToZoneDetails={navigateToZoneDetails} />
    case "temperature":
      return <TemperatureContent data={selectedLocation} navigateToZoneDetails={navigateToZoneDetails} />
    case "energy":
      return <EnergyContent data={selectedLocation} navigateToZoneDetails={navigateToZoneDetails} />
    case "water":
      return <WaterContent data={selectedLocation} navigateToZoneDetails={navigateToZoneDetails} />
    default:
      return <PollutionContent data={selectedLocation} navigateToZoneDetails={navigateToZoneDetails} />
  }
}

