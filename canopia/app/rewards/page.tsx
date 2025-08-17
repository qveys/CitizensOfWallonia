"use client"

import { useRewardsPageState } from "./hooks/useRewardsPageState"
import RewardsHeader from "./components/RewardsHeader"
import RewardsTabs from "./components/RewardsTabs"
import RewardsSearch from "./components/RewardsSearch"
import RewardsList from "./components/RewardsList"
import BottomNavigation from "@/components/bottom-navigation"

export default function RewardsPage() {
  const {
    isLoading,
    userPoints,
    filteredItems,
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    navigateToChallengeDetails,
    navigateToRewardDetails,
    joinChallenge,
    redeemReward,
  } = useRewardsPageState()

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8F6]">
      <RewardsHeader userPoints={userPoints} />

      <main className="flex-1 p-4 pb-20">
        <RewardsTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <RewardsSearch searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <RewardsList
          items={filteredItems}
          userPoints={userPoints}
          activeTab={activeTab}
          isLoading={isLoading}
          searchQuery={searchQuery}
          onChallengeClick={navigateToChallengeDetails}
          onRewardClick={navigateToRewardDetails}
          onJoinChallenge={joinChallenge}
          onRedeemReward={redeemReward}
        />
      </main>

      <BottomNavigation activeTab="rewards" />
    </div>
  )
}

