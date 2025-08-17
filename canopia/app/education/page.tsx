"use client"

import { useEducationPageState } from "./hooks/useEducationPageState"
import EducationHeader from "./components/EducationHeader"
import EducationTabs from "./components/EducationTabs"
import CategoryFilter from "./components/CategoryFilter"
import EducationSearch from "./components/EducationSearch"
import EducationList from "./components/EducationList"
import BottomNavigation from "@/components/bottom-navigation"

export default function EducationPage() {
  const {
    isLoading,
    filteredItems,
    categories,
    activeTab,
    setActiveTab,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    navigateToCourseDetails,
    navigateToResource,
    enrollCourse,
    saveResource,
  } = useEducationPageState()

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8F6]">
      <EducationHeader />

      <main className="flex-1 p-4 pb-20">
        <EducationTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <CategoryFilter categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <EducationSearch searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        <EducationList
          items={filteredItems}
          categories={categories}
          activeTab={activeTab}
          isLoading={isLoading}
          searchQuery={searchQuery}
          onCourseClick={navigateToCourseDetails}
          onResourceClick={navigateToResource}
          onEnrollCourse={enrollCourse}
          onSaveResource={saveResource}
        />
      </main>

      <BottomNavigation activeTab="education" />
    </div>
  )
}

