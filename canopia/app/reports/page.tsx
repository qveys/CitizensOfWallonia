"use client"

import { useReportsPageState } from "./hooks/useReportsPageState"
import ReportsPageContent from "./components/ReportsPageContent"

export default function ReportsPage() {
  const {
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
  } = useReportsPageState()

  return (
    <ReportsPageContent
      filteredReports={filteredReports}
      isLoading={isLoading}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      filter={filter}
      onFilterChange={setFilter}
      showNewReportForm={showNewReportForm}
      onNewReportChange={setShowNewReportForm}
      onNewReport={handleNewReport}
      onViewReport={handleViewReportDetails}
    />
  )
}

