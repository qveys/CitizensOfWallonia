"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useReportsData } from "./use-reports-data"

export function useReportsPageState() {
  const router = useRouter()
  const { reports, filteredReports, isLoading, filter, setFilter, searchQuery, setSearchQuery } = useReportsData()
  const [showNewReportForm, setShowNewReportForm] = useState(false)

  const handleNewReport = () => setShowNewReportForm(true)
  const handleViewReportDetails = (id: string) => router.push(`/reports/${id}`)

  return {
    reports,
    filteredReports,
    isLoading,
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    showNewReportForm,
    setShowNewReportForm,
    handleNewReport,
    handleViewReportDetails,
  }
}

