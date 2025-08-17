"use client"

import { useEventsPageState } from "./hooks/useEventsPageState"
import EventsHeader from "./components/EventsHeader"
import EventsTabs from "./components/EventsTabs"
import EventsSearch from "./components/EventsSearch"
import EventsList from "./components/EventsList"
import BottomNavigation from "@/components/bottom-navigation"

export default function EventsPage() {
  const {
    isLoading,
    filteredEvents,
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    navigateToEventDetails,
    navigateToCreateEvent,
  } = useEventsPageState()

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8F6]">
      <EventsHeader onCreateEvent={navigateToCreateEvent} />

      <main className="flex-1 p-4 pb-20">
        <EventsTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <EventsSearch searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <EventsList
          events={filteredEvents}
          isLoading={isLoading}
          searchQuery={searchQuery}
          onEventClick={navigateToEventDetails}
        />
      </main>

      <BottomNavigation activeTab="events" />
    </div>
  )
}

