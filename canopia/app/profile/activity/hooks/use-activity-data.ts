"use client"

import { useState, useEffect } from "react"
import type { Activity } from "../types"

export function useActivityData() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("newest")

  // Mock data for activities
  const mockActivities: Activity[] = [
    {
      id: "act1",
      title: "Dépôt sauvage de déchets",
      description: "Vous avez signalé un dépôt sauvage de déchets",
      type: "report",
      date: "2023-06-15T10:30:00",
      status: "in-progress",
      url: "/reports/rep1",
    },
    {
      id: "act2",
      title: "Commentaire sur 'Fuite d'eau'",
      description: "Vous avez commenté sur le signalement 'Fuite d'eau'",
      type: "comment",
      date: "2023-06-14T16:45:00",
      status: "completed",
      url: "/reports/rep2",
    },
    {
      id: "act3",
      title: "Initiative citoyenne",
      description: "Vous avez aimé l'initiative 'Jardins partagés'",
      type: "like",
      date: "2023-06-12T09:15:00",
      status: "completed",
      url: "/actions/init3",
    },
    {
      id: "act4",
      title: "Lampadaires allumés en journée",
      description: "Vous avez signalé des lampadaires allumés en journée",
      type: "report",
      date: "2023-06-10T14:20:00",
      status: "resolved",
      url: "/reports/rep3",
    },
    {
      id: "act5",
      title: "Commentaire sur 'Pollution sonore'",
      description: "Vous avez commenté sur le signalement 'Pollution sonore'",
      type: "comment",
      date: "2023-06-08T11:10:00",
      status: "completed",
      url: "/reports/rep4",
    },
    {
      id: "act6",
      title: "Odeurs nauséabondes",
      description: "Vous avez signalé des odeurs nauséabondes",
      type: "report",
      date: "2023-06-05T09:30:00",
      status: "rejected",
      url: "/reports/rep5",
    },
    {
      id: "act7",
      title: "Projet municipal",
      description: "Vous avez aimé le projet 'Rénovation du parc'",
      type: "like",
      date: "2023-06-03T15:45:00",
      status: "completed",
      url: "/actions/init1",
    },
  ]

  useEffect(() => {
    // Simulate API call to fetch activities
    const fetchActivities = async () => {
      setIsLoading(true)
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setActivities(mockActivities)
      setFilteredActivities(mockActivities)
      setIsLoading(false)
    }

    fetchActivities()
  }, [])

  useEffect(() => {
    // Apply filters and search
    let result = [...activities]

    // Apply type filter
    if (filter !== "all") {
      result = result.filter((activity) => activity.type === filter)
    }

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (activity) =>
          activity.title.toLowerCase().includes(query) || activity.description.toLowerCase().includes(query),
      )
    }

    // Apply sorting
    if (sortBy === "newest") {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (sortBy === "oldest") {
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    }

    setFilteredActivities(result)
  }, [filter, searchQuery, sortBy, activities])

  return {
    activities,
    filteredActivities,
    isLoading,
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
  }
}

