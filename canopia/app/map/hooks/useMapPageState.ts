"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { useBottomSheet } from "./use-bottom-sheet"
import { mockLocationData } from "../data/mock-location-data"

export function useMapPageState() {
  const [activeLayer, setActiveLayer] = useState("pollution")
  const [selectedLocation, setSelectedLocation] = useState<any>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapError, setMapError] = useState(false)
  const [showDrawTools, setShowDrawTools] = useState(false)
  const [showMeasureTools, setShowMeasureTools] = useState(false)
  const [showLayersPanel, setShowLayersPanel] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showHeatmap, setShowHeatmap] = useState(false)

  const router = useRouter()
  const dragConstraintsRef = useRef(null)

  // Utiliser le hook useBottomSheet avec selectedLocation
  const {
    isOpen: bottomSheetOpen,
    setIsOpen: setBottomSheetOpen,
    controls: bottomSheetControls,
    bottomSheetRef,
    handleDrag: handleBottomSheetDrag,
    handleDragEnd: handleBottomSheetDragEnd,
    toggleState: toggleBottomSheetState,
  } = useBottomSheet(selectedLocation)

  const handleMapClick = (event: any) => {
    // In a real app, this would use the coordinates to fetch data
    // For now, we'll just use our mock data
    setSelectedLocation(mockLocationData)
    // Le bottomSheet s'ouvrira automatiquement grâce à l'effet dans useBottomSheet
  }

  const handleMapLoad = () => {
    setMapLoaded(true)
  }

  const handleMapError = () => {
    setMapError(true)
  }

  const navigateToZoneDetails = () => {
    router.push(`/zone/${selectedLocation?.id || "default"}`)
  }

  const toggleDrawTools = () => {
    setShowDrawTools(!showDrawTools)
  }

  const toggleMeasureTools = () => {
    setShowMeasureTools(!showMeasureTools)
  }

  const toggleLayersPanel = () => {
    setShowLayersPanel(!showLayersPanel)
  }

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`)
      })
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch((err) => {
          console.error(`Error attempting to exit full-screen mode: ${err.message}`)
        })
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  const toggleHeatmap = () => {
    setShowHeatmap(!showHeatmap)
  }

  const handleShapeCreated = (shape: any) => {
    console.log("Shape created:", shape)
    // In a real app, we would save this shape to a database
  }

  return {
    activeLayer,
    setActiveLayer,
    selectedLocation,
    mapError,
    dragConstraintsRef,
    bottomSheetOpen,
    setBottomSheetOpen,
    bottomSheetControls,
    bottomSheetRef,
    showDrawTools,
    showMeasureTools,
    showLayersPanel,
    isFullscreen,
    showHeatmap,
    handleMapClick,
    handleMapLoad,
    handleMapError,
    handleBottomSheetDrag,
    handleBottomSheetDragEnd,
    toggleBottomSheetState,
    navigateToZoneDetails,
    toggleDrawTools,
    toggleMeasureTools,
    toggleLayersPanel,
    toggleFullscreen,
    toggleHeatmap,
    handleShapeCreated,
  }
}

