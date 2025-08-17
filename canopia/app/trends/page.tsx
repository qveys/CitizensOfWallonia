"use client"

import { useTrendsPageState } from "./hooks/useTrendsPageState"
import TrendsContent from "./components/TrendsContent"
import BottomNavigation from "@/components/bottom-navigation"

export default function TrendsPage() {
  const {
    activeMetric,
    setActiveMetric,
    timeRange,
    setTimeRange,
    location,
    setLocation,
    expandedSections,
    toggleSection,
    showInfoDialog,
    setShowInfoDialog,
    selectedInfoMetric,
    showMetricInfo,
    environmentData,
    isLoading,
    navigateToInsights,
  } = useTrendsPageState()

  return (
    <>
      <TrendsContent
        activeMetric={activeMetric}
        setActiveMetric={setActiveMetric}
        timeRange={timeRange}
        setTimeRange={setTimeRange}
        location={location}
        setLocation={setLocation}
        expandedSections={expandedSections}
        toggleSection={toggleSection}
        showInfoDialog={showInfoDialog}
        setShowInfoDialog={setShowInfoDialog}
        selectedInfoMetric={selectedInfoMetric}
        showMetricInfo={showMetricInfo}
        environmentData={environmentData}
        isLoading={isLoading}
        navigateToInsights={navigateToInsights}
      />
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNavigation activeTab="trends" />
      </div>
    </>
  )
}

