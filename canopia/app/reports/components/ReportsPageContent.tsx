"use client"

import ReportsHeader from "./reports-header"
import ReportFilters from "./report-filters"
import ReportsList from "./reports-list"
import NewReportDialog from "./new-report-dialog"
import BottomNavigation from "@/components/bottom-navigation"
import type { Report } from "../types"

interface ReportsPageContentProps {
  filteredReports: Report[]
  isLoading: boolean
  searchQuery: string
  onSearchChange: (value: string) => void
  filter: string
  onFilterChange: (value: string) => void
  showNewReportForm: boolean
  onNewReportChange: (open: boolean) => void
  onNewReport: () => void
  onViewReport: (id: string) => void
}

export default function ReportsPageContent({
  filteredReports,
  isLoading,
  searchQuery,
  onSearchChange,
  filter,
  onFilterChange,
  showNewReportForm,
  onNewReportChange,
  onNewReport,
  onViewReport,
}: ReportsPageContentProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1E9]">
      {/* Header */}
      <ReportsHeader onNewReport={onNewReport} />

      {/* Search and Filter */}
      <ReportFilters
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        filter={filter}
        onFilterChange={onFilterChange}
      />

      {/* Reports List */}
      <ReportsList
        reports={filteredReports}
        isLoading={isLoading}
        searchQuery={searchQuery}
        onReportClick={onViewReport}
      />

      {/* New Report Dialog */}
      <NewReportDialog open={showNewReportForm} onOpenChange={onNewReportChange} />

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNavigation activeTab="reports" />
      </div>
    </div>
  )
}

