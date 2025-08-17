"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useTrendsData } from "./use-trends-data"

export function useTrendsPageState() {
  const router = useRouter()
  const [activeMetric, setActiveMetric] = useState("air")
  const [timeRange, setTimeRange] = useState("week")
  const [location, setLocation] = useState("all")
  const [expandedSections, setExpandedSections] = useState({
    overview: true,
    details: true,
    comparison: true,
    insights: true,
  })
  const [showInfoDialog, setShowInfoDialog] = useState(false)
  const [selectedInfoMetric, setSelectedInfoMetric] = useState("")

  const { environmentData, isLoading } = useTrendsData()

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  const showMetricInfo = (metric: string) => {
    setSelectedInfoMetric(metric)
    setShowInfoDialog(true)
  }

  const navigateToInsights = () => router.push("/trends/insights")

  return {
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
  }
}

