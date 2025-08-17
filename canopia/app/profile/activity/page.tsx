"use client"

import { useRouter } from "next/navigation"
import { useActivityData } from "./hooks/use-activity-data"
import ActivityHeader from "./components/activity-header"
import ActivityFilters from "./components/activity-filters"
import ActivityList from "./components/activity-list"

export default function ActivityPage() {
  const router = useRouter()
  const {
    activities,
    filteredActivities,
    isLoading,
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
  } = useActivityData()

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1E9]">
      {/* Header */}
      <ActivityHeader onBack={() => router.back()} />

      {/* Search and Filter */}
      <ActivityFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filter={filter}
        onFilterChange={setFilter}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* Activity List */}
      <ActivityList activities={filteredActivities} isLoading={isLoading} searchQuery={searchQuery} />
    </div>
  )
}

