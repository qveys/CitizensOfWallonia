"use client"

import { useZonePageState } from "./hooks/useZonePageState"
import ZoneHeader from "./components/zone-header"
import ZonePageContent from "./components/ZonePageContent"

export default function ZoneDetailsPage({ params }: { params: { id: string } }) {
  const { zoneData, detailedView, setDetailedView, expandedSections, toggleSection, handleBack } = useZonePageState(
    params.id,
  )

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1E9]">
      {/* Fixed Header */}
      <ZoneHeader
        zoneName={zoneData.name}
        score={zoneData.score}
        detailedView={detailedView}
        onDetailedViewChange={setDetailedView}
        onBack={handleBack}
      />

      {/* Scrollable Content */}
      <ZonePageContent
        zoneData={zoneData}
        detailedView={detailedView}
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      />
    </div>
  )
}

