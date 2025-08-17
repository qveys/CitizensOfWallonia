"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Types pour les données de transport
export interface TransportMode {
  id: string
  name: string
  icon: string
  color: string
  co2PerKm: number
}

export interface Route {
  id: string
  from: string
  to: string
  distance: number
  duration: number
  modes: string[]
  co2: number
  isFavorite?: boolean
}

export interface TransportStat {
  id: string
  title: string
  value: number
  unit: string
  change: number
  trend: "up" | "down" | "stable"
  icon: string
}

export function useTransportPageState() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [transportModes, setTransportModes] = useState<TransportMode[]>([])
  const [routes, setRoutes] = useState<Route[]>([])
  const [stats, setStats] = useState<TransportStat[]>([])
  const [activeTab, setActiveTab] = useState("routes")
  const [fromLocation, setFromLocation] = useState("")
  const [toLocation, setToLocation] = useState("")
  const [selectedModes, setSelectedModes] = useState<string[]>([])
  const [filteredRoutes, setFilteredRoutes] = useState<Route[]>([])

  // Simuler le chargement des données
  useEffect(() => {
    const loadTransportData = async () => {
      setIsLoading(true)
      // Simuler un délai réseau
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Charger les modes de transport mockés
      const mockTransportModes: TransportMode[] = [
        { id: "walk", name: "Marche", icon: "🚶", color: "#509555", co2PerKm: 0 },
        { id: "bike", name: "Vélo", icon: "🚲", color: "#688F4E", co2PerKm: 0 },
        { id: "bus", name: "Bus", icon: "🚌", color: "#DFA23C", co2PerKm: 68 },
        { id: "tram", name: "Tramway", icon: "🚊", color: "#3C7D80", co2PerKm: 6 },
        { id: "metro", name: "Métro", icon: "🚇", color: "#9D8BB0", co2PerKm: 4 },
        { id: "car", name: "Voiture", icon: "🚗", color: "#D68C45", co2PerKm: 192 },
      ]

      // Charger les itinéraires mockés
      const mockRoutes: Route[] = [
        {
          id: "route1",
          from: "Domicile",
          to: "Travail",
          distance: 5.2,
          duration: 25,
          modes: ["bike"],
          co2: 0,
          isFavorite: true,
        },
        {
          id: "route2",
          from: "Domicile",
          to: "Supermarché",
          distance: 1.8,
          duration: 22,
          modes: ["walk"],
          co2: 0,
          isFavorite: true,
        },
        {
          id: "route3",
          from: "Travail",
          to: "Salle de sport",
          distance: 3.5,
          duration: 15,
          modes: ["tram", "walk"],
          co2: 21,
          isFavorite: false,
        },
        {
          id: "route4",
          from: "Domicile",
          to: "Centre-ville",
          distance: 7.2,
          duration: 35,
          modes: ["bus", "metro"],
          co2: 489.6,
          isFavorite: false,
        },
      ]

      // Charger les statistiques mockées
      const mockStats: TransportStat[] = [
        {
          id: "stat1",
          title: "CO2 économisé",
          value: 12.5,
          unit: "kg",
          change: 8,
          trend: "up",
          icon: "🌱",
        },
        {
          id: "stat2",
          title: "Distance parcourue",
          value: 45.8,
          unit: "km",
          change: 12,
          trend: "up",
          icon: "📏",
        },
        {
          id: "stat3",
          title: "Trajets écologiques",
          value: 68,
          unit: "%",
          change: 5,
          trend: "up",
          icon: "🚲",
        },
        {
          id: "stat4",
          title: "Calories brûlées",
          value: 850,
          unit: "kcal",
          change: 15,
          trend: "up",
          icon: "🔥",
        },
      ]

      setTransportModes(mockTransportModes)
      setRoutes(mockRoutes)
      setFilteredRoutes(mockRoutes)
      setStats(mockStats)
      setIsLoading(false)
    }

    loadTransportData()
  }, [])

  // Filtrer les itinéraires en fonction des critères
  useEffect(() => {
    let result = [...routes]

    // Filtrer par lieu de départ
    if (fromLocation) {
      result = result.filter((route) => route.from.toLowerCase().includes(fromLocation.toLowerCase()))
    }

    // Filtrer par lieu d'arrivée
    if (toLocation) {
      result = result.filter((route) => route.to.toLowerCase().includes(toLocation.toLowerCase()))
    }

    // Filtrer par modes de transport
    if (selectedModes.length > 0) {
      result = result.filter((route) => selectedModes.some((mode) => route.modes.includes(mode)))
    }

    setFilteredRoutes(result)
  }, [routes, fromLocation, toLocation, selectedModes])

  // Fonctions de navigation
  const navigateToRouteDetails = (routeId: string) => {
    router.push(`/transport/routes/${routeId}`)
  }

  const navigateToNewRoute = () => {
    router.push("/transport/new-route")
  }

  // Fonctions d'interaction
  const toggleFavoriteRoute = (routeId: string) => {
    setRoutes(
      routes.map((route) => {
        if (route.id === routeId) {
          return {
            ...route,
            isFavorite: !route.isFavorite,
          }
        }
        return route
      }),
    )
  }

  const toggleModeSelection = (modeId: string) => {
    if (selectedModes.includes(modeId)) {
      setSelectedModes(selectedModes.filter((id) => id !== modeId))
    } else {
      setSelectedModes([...selectedModes, modeId])
    }
  }

  return {
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
  }
}

