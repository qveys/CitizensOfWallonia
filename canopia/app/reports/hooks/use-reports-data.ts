"use client"

import { useState, useEffect } from "react"
import type { Report } from "../types"

export function useReportsData() {
  const [reports, setReports] = useState<Report[]>([])
  const [filteredReports, setFilteredReports] = useState<Report[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for reports
  const mockReports: Report[] = [
    {
      id: "rep1",
      title: "Dépôt sauvage de déchets",
      description: "Plusieurs sacs poubelles et encombrants déposés sur le trottoir",
      type: "waste",
      status: "in-progress",
      location: "Rue des Lilas",
      date: "2023-06-15T10:30:00",
      hasPhoto: true,
    },
    {
      id: "rep2",
      title: "Fuite d'eau sur la chaussée",
      description: "Importante fuite d'eau qui s'écoule depuis 2 jours",
      type: "water",
      status: "submitted",
      location: "Avenue des Roses",
      date: "2023-06-14T16:45:00",
      hasPhoto: true,
    },
    {
      id: "rep3",
      title: "Lampadaires allumés en journée",
      description: "Plusieurs lampadaires restent allumés en pleine journée depuis une semaine",
      type: "energy",
      status: "resolved",
      location: "Place du Marché",
      date: "2023-06-10T09:15:00",
      hasPhoto: false,
    },
    {
      id: "rep4",
      title: "Odeurs nauséabondes",
      description: "Fortes odeurs chimiques provenant de l'usine à proximité",
      type: "pollution",
      status: "rejected",
      location: "Rue de l'Industrie",
      date: "2023-06-08T14:20:00",
      hasPhoto: false,
    },
    {
      id: "rep5",
      title: "Poubelles non collectées",
      description: "Les poubelles n'ont pas été ramassées depuis 3 jours",
      type: "waste",
      status: "submitted",
      location: "Rue des Cerisiers",
      date: "2023-06-13T11:10:00",
      hasPhoto: true,
    },
  ]

  useEffect(() => {
    // Simulate API call to fetch reports
    const fetchReports = async () => {
      setIsLoading(true)
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setReports(mockReports)
      setFilteredReports(mockReports)
      setIsLoading(false)
    }

    fetchReports()
  }, [])

  useEffect(() => {
    // Apply filters and search
    let result = [...reports]

    // Apply type filter
    if (filter !== "all") {
      result = result.filter((report) => report.status === filter)
    }

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (report) =>
          report.title.toLowerCase().includes(query) ||
          report.description.toLowerCase().includes(query) ||
          report.location.toLowerCase().includes(query),
      )
    }

    setFilteredReports(result)
  }, [filter, searchQuery, reports])

  return {
    reports,
    filteredReports,
    isLoading,
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
  }
}

