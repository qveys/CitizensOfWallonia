"use client"

import { AlertTriangle } from "lucide-react"
import RouteCard from "./RouteCard"
import type { Route, TransportMode } from "../hooks/useTransportPageState"

interface RoutesListProps {
  routes: Route[]
  transportModes: TransportMode[]
  isLoading: boolean
  hasFilters: boolean
  onRouteClick: (routeId: string) => void
  onFavoriteToggle: (routeId: string) => void
}

export default function RoutesList({
  routes,
  transportModes,
  isLoading,
  hasFilters,
  onRouteClick,
  onFavoriteToggle,
}: RoutesListProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-12 h-12 border-4 border-[#688F4E] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-[#4D4D4D] font-roboto">Chargement des itinéraires...</p>
      </div>
    )
  }

  if (routes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-[#F4F1E9] flex items-center justify-center mb-4">
          <AlertTriangle className="h-8 w-8 text-[#A9A295]" />
        </div>
        <h3 className="text-lg font-medium text-[#2B463C] mb-2">Aucun itinéraire trouvé</h3>
        <p className="text-[#5F5B52] max-w-md">
          {hasFilters
            ? "Aucun résultat ne correspond à vos critères. Essayez de modifier vos filtres."
            : "Vous n'avez pas encore créé d'itinéraires. Cliquez sur 'Nouveau' pour commencer."}
        </p>
      </div>
    )
  }

  return (
    <div>
      {routes.map((route) => (
        <RouteCard
          key={route.id}
          route={route}
          transportModes={transportModes}
          onClick={() => onRouteClick(route.id)}
          onFavoriteToggle={() => onFavoriteToggle(route.id)}
        />
      ))}
    </div>
  )
}

