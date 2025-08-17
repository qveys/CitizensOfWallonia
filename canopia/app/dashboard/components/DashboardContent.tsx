"use client"

import DashboardTabs from "./DashboardTabs"
import EnvironmentalMetricsSection from "./EnvironmentalMetricsSection"
import RecentActivitySection from "./RecentActivitySection"
import CommunityUpdatesSection from "./CommunityUpdatesSection"
import UpcomingEventsSection from "./UpcomingEventsSection"

interface EnvironmentalMetric {
  id: string
  name: string
  value: number
  unit: string
  change: number
  trend: "up" | "down" | "stable"
  status: "good" | "warning" | "bad"
}

interface RecentActivity {
  id: string
  type: "report" | "event" | "challenge" | "community"
  title: string
  date: string
  status?: string
}

interface CommunityUpdate {
  id: string
  title: string
  description: string
  author: string
  date: string
  likes: number
  comments: number
  image?: string
}

interface UpcomingEvent {
  id: string
  title: string
  date: string
  location: string
  participants: number
}

interface DashboardContentProps {
  activeTab: string
  onTabChange: (value: string) => void
  environmentalMetrics: EnvironmentalMetric[]
  recentActivity: RecentActivity[]
  communityUpdates: CommunityUpdate[]
  upcomingEvents: UpcomingEvent[]
  onMetricClick: (metricId: string) => void
  onActivityClick: (activityId: string, type: string) => void
  onCommunityPostClick: (postId: string) => void
  onEventClick: (eventId: string) => void
  onViewAllEvents: () => void
  onViewAllCommunityPosts: () => void
}

export default function DashboardContent({
  activeTab,
  onTabChange,
  environmentalMetrics,
  recentActivity,
  communityUpdates,
  upcomingEvents,
  onMetricClick,
  onActivityClick,
  onCommunityPostClick,
  onEventClick,
  onViewAllEvents,
  onViewAllCommunityPosts,
}: DashboardContentProps) {
  return (
    <div className="p-4 pb-20">
      <DashboardTabs activeTab={activeTab} onTabChange={onTabChange} />

      {activeTab === "overview" && (
        <>
          <EnvironmentalMetricsSection metrics={environmentalMetrics} onMetricClick={onMetricClick} />
          <RecentActivitySection
            activities={recentActivity.slice(0, 2)}
            onActivityClick={onActivityClick}
            onViewAllClick={() => onTabChange("activity")}
          />
          <UpcomingEventsSection
            events={upcomingEvents.slice(0, 2)}
            onEventClick={onEventClick}
            onViewAllClick={onViewAllEvents}
          />
        </>
      )}

      {activeTab === "activity" && (
        <RecentActivitySection
          activities={recentActivity}
          onActivityClick={onActivityClick}
          onViewAllClick={() => onActivityClick("", "profile")}
        />
      )}

      {activeTab === "community" && (
        <>
          <CommunityUpdatesSection
            updates={communityUpdates}
            onUpdateClick={onCommunityPostClick}
            onViewAllClick={onViewAllCommunityPosts}
          />
          <UpcomingEventsSection events={upcomingEvents} onEventClick={onEventClick} onViewAllClick={onViewAllEvents} />
        </>
      )}
    </div>
  )
}

