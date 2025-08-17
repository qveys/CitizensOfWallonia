"use client"

import { useState } from "react"
import { useMapPageState } from "./map/hooks/useMapPageState"
import BottomNavigation from "@/components/bottom-navigation"
import GoogleMapComponent from "@/components/google-map-component"
import { SearchBar } from "./map/components/search-bar"
import { LayerSelector } from "./map/components/layer-selector"
import { MapControls } from "./map/components/map-controls"
import { BottomSheet } from "./map/components/bottom-sheet"
import { BottomSheetContent } from "./map/components/bottom-sheet-content"

// Clé API Google Maps
const GOOGLE_MAPS_API_KEY = "AIzaSyAD3k7Ub8zEgLD6cobCBZ07pXSFS06C9NY"

export default function HomePage() {
  const [apiKeyAvailable, setApiKeyAvailable] = useState<boolean>(true)

  const {
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
  } = useMapPageState()

  return (
    <div className="relative h-screen w-full bg-[#F4F1E9] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <GoogleMapComponent
          activeLayer={activeLayer}
          onMapClick={handleMapClick}
          onMapLoad={handleMapLoad}
          onMapError={handleMapError}
          onShapeCreated={handleShapeCreated}
          showDrawControls={showDrawTools}
          showHeatmap={showHeatmap}
        />
      </div>

      <SearchBar />
      <LayerSelector activeLayer={activeLayer} onLayerChange={setActiveLayer} />
      <MapControls
        showDrawTools={showDrawTools}
        showMeasureTools={showMeasureTools}
        showLayersPanel={showLayersPanel}
        isFullscreen={isFullscreen}
        showHeatmap={showHeatmap}
        onToggleDrawTools={toggleDrawTools}
        onToggleMeasureTools={toggleMeasureTools}
        onToggleLayersPanel={toggleLayersPanel}
        onToggleFullscreen={toggleFullscreen}
        onToggleHeatmap={toggleHeatmap}
      />

      {bottomSheetOpen && selectedLocation && (
        <BottomSheet
          ref={bottomSheetRef}
          controls={bottomSheetControls}
          onDrag={handleBottomSheetDrag}
          onDragEnd={handleBottomSheetDragEnd}
          dragConstraints={dragConstraintsRef}
          onToggle={toggleBottomSheetState}
        >
          <BottomSheetContent
            activeLayer={activeLayer}
            location={selectedLocation}
            onViewDetails={navigateToZoneDetails}
          />
        </BottomSheet>
      )}

      <BottomNavigation activeTab="map" />
    </div>
  )
}

