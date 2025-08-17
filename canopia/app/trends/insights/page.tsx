"use client"

import { useInsightsPageState } from "./hooks/useInsightsPageState"
import InsightsHeader from "./components/InsightsHeader"
import InsightsFilters from "./components/InsightsFilters"
import InsightsList from "./components/InsightsList"
import BottomNavigation from "@/components/bottom-navigation"

export default function InsightsPage() {
  const {
    isLoading,
    filteredInsights,
    categories,
    activeCategory,
    setActiveCategory,
    activeImpact,
    setActiveImpact,
    searchQuery,
    setSearchQuery,
    navigateToInsightDetails,
    navigateBack,
    toggleSaveInsight,
  } = useInsightsPageState()

  const hasFilters = activeCategory !== null || activeImpact !== null || searchQuery !== ""

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8F6]">
      <InsightsHeader onBack={navigateBack} />

      <main className="flex-1 p-4 pb-20">
        <InsightsFilters
          categories={categories}
          activeCategory={activeCategory}
          activeImpact={activeImpact}
          searchQuery={searchQuery}
          onCategoryChange={setActiveCategory}
          onImpactChange={setActiveImpact}
          onSearchChange={setSearchQuery}
        />

        <InsightsList
          insights={filteredInsights}
          categories={categories}
          isLoading={isLoading}
          searchQuery={searchQuery}
          hasFilters={hasFilters}
          onInsightClick={navigateToInsightDetails}
          onSaveToggle={toggleSaveInsight}
        />
      </main>

      <BottomNavigation activeTab="trends" />
    </div>
  )
}

