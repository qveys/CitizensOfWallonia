"use client"

import { useFoodPageState } from "./hooks/useFoodPageState"
import FoodHeader from "./components/FoodHeader"
import FoodTabs from "./components/FoodTabs"
import SeasonalFoodCard from "./components/SeasonalFoodCard"
import EcoTipsCard from "./components/EcoTipsCard"
import BottomNavigation from "@/components/bottom-navigation"

export default function FoodPage() {
  const { activeTab, setActiveTab, displayedFoods, ecoTips, showAllFoods, handleShowMore } = useFoodPageState()

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1E9]">
      {/* Header */}
      <FoodHeader activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <main className="flex-1 p-4 pb-20">
        {/* Tabs */}
        <FoodTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Tab Content */}
        <div className="space-y-4">
          {activeTab === "seasonal" && (
            <>
              <SeasonalFoodCard foods={displayedFoods} showAllFoods={showAllFoods} onShowMore={handleShowMore} />
              <EcoTipsCard tips={ecoTips} />
            </>
          )}

          {/* Other tabs content would go here */}
          {activeTab !== "seasonal" && (
            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-[#5F5B52]">Contenu en cours de développement</p>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="food" />
    </div>
  )
}

