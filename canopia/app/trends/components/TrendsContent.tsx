"use client"

import TrendsHeader from "./trends-header"
import TrendsOverview from "./trends-overview"
import TrendsDetails from "./trends-details"
import TrendsComparison from "./trends-comparison"
import TrendsInsights from "./trends-insights"
import MetricInfoDialog from "./metric-info-dialog"
import type { EnvironmentData } from "../types"

interface TrendsContentProps {
  activeMetric: string
  setActiveMetric: (metric: string) => void
  timeRange: string
  setTimeRange: (range: string) => void
  location: string
  setLocation: (location: string) => void
  expandedSections: {
    overview: boolean
    details: boolean
    comparison: boolean
    insights: boolean
  }
  toggleSection: (section: keyof typeof expandedSections) => void
  showInfoDialog: boolean
  setShowInfoDialog: (show: boolean) => void
  selectedInfoMetric: string
  showMetricInfo: (metric: string) => void
  environmentData: EnvironmentData
  isLoading: boolean
  navigateToInsights: () => void
}

export default function TrendsContent({
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
}: TrendsContentProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1E9]">
      {/* Header */}
      <TrendsHeader
        activeMetric={activeMetric}
        onMetricChange={setActiveMetric}
        location={location}
        onLocationChange={setLocation}
      />

      {/* Content */}
      {isLoading ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-[#688F4E] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-[#4D4D4D] font-roboto">Chargement des données...</p>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-auto pb-20">
          {/* Overview Section */}
          <TrendsOverview
            environmentData={environmentData}
            expanded={expandedSections.overview}
            activeMetric={activeMetric}
            onMetricChange={setActiveMetric}
            onToggle={() => toggleSection("overview")}
            onInfoClick={showMetricInfo}
          />

          {/* Detailed Trends Section */}
          <TrendsDetails
            environmentData={environmentData}
            expanded={expandedSections.details}
            activeMetric={activeMetric}
            timeRange={timeRange}
            onTimeRangeChange={setTimeRange}
            onToggle={() => toggleSection("details")}
          />

          {/* Comparison Section */}
          <TrendsComparison
            environmentData={environmentData}
            expanded={expandedSections.comparison}
            activeMetric={activeMetric}
            onToggle={() => toggleSection("comparison")}
          />

          {/* Insights Section */}
          <TrendsInsights
            environmentData={environmentData}
            expanded={expandedSections.insights}
            activeMetric={activeMetric}
            onToggle={() => toggleSection("insights")}
            onViewAll={navigateToInsights}
          />
        </div>
      )}

      {/* Metric Info Dialog */}
      <MetricInfoDialog
        open={showInfoDialog}
        onOpenChange={setShowInfoDialog}
        selectedMetric={selectedInfoMetric}
        metricInfo={environmentData.metricInfo}
      />
    </div>
  )
}

