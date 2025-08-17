"use client"

import ZoneMetrics from "./zone-metrics"
import ZoneTrends from "./zone-trends"
import ZoneRecommendations from "./zone-recommendations"
import ZoneForecasts from "./zone-forecasts"
import type { ZoneData } from "../types"

interface ZonePageContentProps {
  zoneData: ZoneData
  detailedView: boolean
  expandedSections: {
    trends: boolean
    recommendations: boolean
    forecasts: boolean
  }
  toggleSection: (section: "trends" | "recommendations" | "forecasts") => void
}

export default function ZonePageContent({
  zoneData,
  detailedView,
  expandedSections,
  toggleSection,
}: ZonePageContentProps) {
  return (
    <div className="flex-1 overflow-auto pb-6">
      {/* Metrics Carousel */}
      <ZoneMetrics metrics={zoneData.metrics} />

      {/* Trends Section */}
      <ZoneTrends
        trends={zoneData.trends}
        expanded={expandedSections.trends}
        detailedView={detailedView}
        onToggle={() => toggleSection("trends")}
      />

      {/* Recommendations Section */}
      <ZoneRecommendations
        recommendations={zoneData.recommendations}
        expanded={expandedSections.recommendations}
        onToggle={() => toggleSection("recommendations")}
      />

      {/* Forecasts Section */}
      <ZoneForecasts
        forecasts={zoneData.forecasts}
        expanded={expandedSections.forecasts}
        detailedView={detailedView}
        onToggle={() => toggleSection("forecasts")}
      />
    </div>
  )
}

