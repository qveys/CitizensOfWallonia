"use client"

import { useState } from "react"
import { mockLocationData } from "../data/mock-location-data"

export function useMapState() {
  const [activeLayer, setActiveLayer] = useState("pollution")
  const [selectedLocation, setSelectedLocation] = useState<any>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapError, setMapError] = useState(false)

  const handleMapClick = (event: any) => {
    // In a real app, this would use the coordinates to fetch data
    // For now, we'll just use our mock data
    setSelectedLocation(mockLocationData)
  }

  const handleMapLoad = () => {
    setMapLoaded(true)
  }

  const handleMapError = () => {
    setMapError(true)
  }

  return {
    activeLayer,
    setActiveLayer,
    selectedLocation,
    setSelectedLocation,
    mapLoaded,
    mapError,
    handleMapClick,
    handleMapLoad,
    handleMapError,
  }
}

