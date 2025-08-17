"use client"

import { useDashboardPageState } from "./hooks/useDashboardPageState"
import DashboardHeader from "./components/DashboardHeader"
import DashboardContent from "./components/DashboardContent"
import BottomNavigation from "@/components/bottom-navigation"

export default function DashboardPage() {
  const {
    isLoading,
    environmentalMetrics,
    recentActivity,
    communityUpdates,
    upcomingEvents,
    activeTab,
    setActiveTab,
    navigateToMetricDetails,
    navigateToActivity,
    navigateToCommunityPost,
    navigateToEvent,
    navigateToAllEvents,
    navigateToAllCommunityPosts,
  } = useDashboardPageState()

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F4F1E9] p-6">
        <div className="w-16 h-16 border-4 border-[#688F4E] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-[#4D4D4D] font-roboto">Chargement du tableau de bord...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1E9]">
      <DashboardHeader />
      <main className="flex-1 overflow-auto">
        <DashboardContent
          activeTab={activeTab}
          onTabChange={setActiveTab}
          environmentalMetrics={environmentalMetrics}
          recentActivity={recentActivity}
          communityUpdates={communityUpdates}
          upcomingEvents={upcomingEvents}
          onMetricClick={navigateToMetricDetails}
          onActivityClick={navigateToActivity}
          onCommunityPostClick={navigateToCommunityPost}
          onEventClick={navigateToEvent}
          onViewAllEvents={navigateToAllEvents}
          onViewAllCommunityPosts={navigateToAllCommunityPosts}
        />
      </main>
      <BottomNavigation activeTab="dashboard" />
    </div>
  )
}

