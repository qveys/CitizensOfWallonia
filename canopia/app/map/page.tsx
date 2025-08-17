"use client"

import { useMapPageState } from "./hooks/useMapPageState"
import MapContent from "./components/MapContent"
import BottomNavigation from "@/components/bottom-navigation"

export default function MapScreen() {
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
    geoJsonData,
    timelineData,
    compareMode,
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
  } = useMapPageState()

  return (
    <>
      <MapContent
        activeLayer={activeLayer}
        setActiveLayer={setActiveLayer}
        selectedLocation={selectedLocation}
        mapError={mapError}
        dragConstraintsRef={dragConstraintsRef}
        bottomSheetOpen={bottomSheetOpen}
        bottomSheetControls={bottomSheetControls}
        bottomSheetRef={bottomSheetRef}
        showDrawTools={showDrawTools}
        showMeasureTools={showMeasureTools}
        showLayersPanel={showLayersPanel}
        isFullscreen={isFullscreen}
        handleMapClick={handleMapClick}
        handleMapLoad={handleMapLoad}
        handleMapError={handleMapError}
        handleBottomSheetDrag={handleBottomSheetDrag}
        handleBottomSheetDragEnd={handleBottomSheetDragEnd}
        toggleBottomSheetState={toggleBottomSheetState}
        navigateToZoneDetails={navigateToZoneDetails}
        toggleDrawTools={toggleDrawTools}
        toggleMeasureTools={toggleMeasureTools}
        toggleLayersPanel={toggleLayersPanel}
        toggleFullscreen={toggleFullscreen}
        handleShapeCreated={handleShapeCreated}
        handleShapeEdited={handleShapeEdited}
        handleShapeDeleted={handleShapeDeleted}
        handleExportData={handleExportData}
        handleImportData={handleImportData}
        handleTimelineChange={handleTimelineChange}
        geoJsonData={geoJsonData}
        timelineData={timelineData}
        compareMode={compareMode}
      />
      <BottomNavigation activeTab="map" />
    </>
  )
}

