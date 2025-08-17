"use client"

import { useActionsPageState } from "./hooks/useActionsPageState"
import ActionsHeader from "./components/ActionsHeader"
import CategoryFilter from "./components/CategoryFilter"
import ActionsSearch from "./components/ActionsSearch"
import ActionsList from "./components/ActionsList"
import BottomNavigation from "@/components/bottom-navigation"

export default function ActionsPage() {
  const {
    isLoading,
    filteredActions,
    categories,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    navigateToActionDetails,
    navigateToCreateAction,
    toggleJoinAction,
  } = useActionsPageState()

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8F6]">
      <ActionsHeader onCreateAction={navigateToCreateAction} />

      <main className="flex-1 p-4 pb-20">
        <CategoryFilter categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <ActionsSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <ActionsList
          actions={filteredActions}
          categories={categories}
          isLoading={isLoading}
          searchQuery={searchQuery}
          onActionClick={navigateToActionDetails}
          onJoinToggle={toggleJoinAction}
        />
      </main>

      <BottomNavigation activeTab="actions" />
    </div>
  )
}

