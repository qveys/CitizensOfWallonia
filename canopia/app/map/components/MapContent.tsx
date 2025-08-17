"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import MapComponent from "@/components/map-component"
import { SearchBar } from "./search-bar"
import { LayerSelector } from "./layer-selector"
import { MapControls } from "./map-controls"
import { BottomSheet } from "./bottom-sheet"
import { LayersPanel } from "./layers-panel"
import { initMap } from "../utils/heatmap"

interface MapContentProps {
  activeLayer: string
  setActiveLayer: (layer: string) => void
  selectedLocation: any
  mapError: boolean
  dragConstraintsRef: React.RefObject<HTMLDivElement>
  bottomSheetOpen: boolean
  bottomSheetControls: any
  bottomSheetRef: React.RefObject<HTMLDivElement>
  showDrawTools: boolean
  showMeasureTools: boolean
  showLayersPanel: boolean
  isFullscreen: boolean
  handleMapClick: (event: any) => void
  handleMapLoad: () => void
  handleMapError: () => void
  handleBottomSheetDrag: (_, info: any) => void
  handleBottomSheetDragEnd: (_, info: any) => void
  toggleBottomSheetState: () => void
  navigateToZoneDetails: () => void
  toggleDrawTools: () => void
  toggleMeasureTools: () => void
  toggleLayersPanel: () => void
  toggleFullscreen: () => void
  handleShapeCreated?: (layer: any) => void
  handleShapeEdited?: (layers: any) => void
  handleShapeDeleted?: (layers: any) => void
  handleExportData?: (format: string) => void
  handleImportData?: (data: any) => void
  handleTimelineChange?: (date: Date) => void
  geoJsonData?: any
  timelineData?: any
  compareMode?: boolean
}

export default function MapContent({
  activeLayer,
  setActiveLayer,
  selectedLocation,
  mapError,
  dragConstraintsRef,
  bottomSheetOpen,
  bottomSheetControls,
  bottomSheetRef,
  showDrawTools,
  showMeasureTools,
  showLayersPanel,
  isFullscreen,
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
  handleShapeCreated,
  handleShapeEdited,
  handleShapeDeleted,
  handleExportData,
  handleImportData,
  handleTimelineChange,
  geoJsonData,
  timelineData,
  compareMode,
}: MapContentProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)

  // Initialize map when component mounts
  useEffect(() => {
    // Try to initialize the map with heatmap
    const timer = setTimeout(() => {
      try {
        if (typeof window !== "undefined" && document.getElementById("map")) {
          initMap("map")
          console.log("Map initialized with heatmap")
        }
      } catch (error) {
        console.error("Error initializing map with heatmap:", error)
      }
    }, 1000) // Delay to ensure the map element is ready

    return () => clearTimeout(timer)
  }, [])

  return (
    <div ref={dragConstraintsRef} className="relative w-full h-[calc(100vh-64px)]">
      <div ref={mapContainerRef} className="w-full h-full">
        <MapComponent
          activeLayer={activeLayer}
          onMapClick={handleMapClick}
          onMapLoad={handleMapLoad}
          onMapError={handleMapError}
          showDrawControls={showDrawTools}
          showMeasureTools={showMeasureTools}
          onShapeCreated={handleShapeCreated}
          onShapeEdited={handleShapeEdited}
          onShapeDeleted={handleShapeDeleted}
          geoJsonData={geoJsonData}
          timelineData={timelineData}
          compareMode={compareMode}
        />
      </div>

      <SearchBar
        onSelectLocation={(location) => {
          console.log("Selected location:", location)
          // In a real app, we would pan the map to this location
        }}
      />

      <LayerSelector activeLayer={activeLayer} setActiveLayer={setActiveLayer} />

      <MapControls
        qualityScore={65}
        onToggleDrawTools={toggleDrawTools}
        onToggleMeasureTools={toggleMeasureTools}
        onToggleLayersPanel={toggleLayersPanel}
        onToggleFullscreen={toggleFullscreen}
        onExportData={handleExportData}
        onImportData={handleImportData}
        onTimelineChange={handleTimelineChange}
        showDrawTools={showDrawTools}
        showMeasureTools={showMeasureTools}
        showLayersPanel={showLayersPanel}
        isFullscreen={isFullscreen}
      />

      {showLayersPanel && <LayersPanel onClose={toggleLayersPanel} />}

      <BottomSheet
        open={bottomSheetOpen}
        selectedLocation={selectedLocation}
        activeLayer={activeLayer}
        bottomSheetRef={bottomSheetRef}
        dragConstraintsRef={dragConstraintsRef}
        bottomSheetControls={bottomSheetControls}
        onDrag={handleBottomSheetDrag}
        onDragEnd={handleBottomSheetDragEnd}
        toggleState={toggleBottomSheetState}
        navigateToZoneDetails={navigateToZoneDetails}
      />
    </div>
  )
}

