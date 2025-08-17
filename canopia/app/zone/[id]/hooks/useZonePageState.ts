"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useZoneData } from "./use-zone-data"

export function useZonePageState(zoneId: string) {
  const router = useRouter()
  const [detailedView, setDetailedView] = useState(true)
  const [expandedSections, setExpandedSections] = useState({
    trends: true,
    recommendations: true,
    forecasts: true,
  })

  const zoneData = useZoneData(zoneId)

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  const handleBack = () => router.back()

  return {
    zoneData,
    detailedView,
    setDetailedView,
    expandedSections,
    toggleSection,
    handleBack,
  }
}

