"use client"

import { useTransportPageState } from "./hooks/useTransportPageState"
import TransportHeader from "./components/TransportHeader"
import TransportTabs from "./components/TransportTabs"
import RouteFilters from "./components/RouteFilters"
import RoutesList from "./components/RoutesList"
import StatsList from "./components/StatsList"
import BottomNavigation from "@/components/bottom-navigation"

export default function TransportPage() {
  const {
    isLoading,
    transportModes,
    filteredRoutes,
    stats,
    activeTab,
    setActiveTab,
    fromLocation,
    setFromLocation,
    toLocation,
    setToLocation,
    selectedModes,
    toggleModeSelection,
    navigateToRouteDetails,
    navigateToNewRoute,
    toggleFavoriteRoute,
  } = useTransportPageState()

  const hasFilters = fromLocation !== "" || toLocation !== "" || selectedModes.length > 0

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8F6]">
      <TransportHeader onNewRoute={navigateToNewRoute} />

      <main className="flex-1 p-4 pb-20">
        <TransportTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === "routes" && (
          <>
            <RouteFilters
              transportModes={transportModes}
              selectedModes={selectedModes}
              fromLocation={fromLocation}
              toLocation={toLocation}
              onFromLocationChange={setFromLocation}
              onToLocationChange={setToLocation}
              onModeToggle={toggleModeSelection}
            />

            <RoutesList
              routes={filteredRoutes}
              transportModes={transportModes}
              isLoading={isLoading}
              hasFilters={hasFilters}
              onRouteClick={navigateToRouteDetails}
              onFavoriteToggle={toggleFavoriteRoute}
            />
          </>
        )}

        {activeTab === "stats" && <StatsList stats={stats} isLoading={isLoading} />}
      </main>

      <BottomNavigation activeTab="transport" />
    </div>
  )
}

