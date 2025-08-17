"use client"

import { useState, useEffect } from "react"
import type { Comment, ReportDetail } from "../types"

export function useReportDetails(id: string) {
  const [report, setReport] = useState<ReportDetail | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Mock report data
  const mockReport: ReportDetail = {
    id: id,
    title: "Dépôt sauvage de déchets",
    description:
      "J'ai constaté plusieurs sacs poubelles et encombrants déposés sur le trottoir au coin de la rue des Lilas et de l'avenue des Roses. Ces déchets bloquent partiellement le passage et attirent des nuisibles. La situation dure depuis au moins 3 jours et s'aggrave car d'autres personnes ajoutent leurs déchets au tas existant.",
    type: "waste",
    status: "in-progress",
    location: "Rue des Lilas",
    date: "2023-06-15T10:30:00",
    hasPhoto: true,
    updates: [
      {
        date: "2023-06-15T10:30:00",
        status: "submitted",
        message: "Signalement créé",
      },
      {
        date: "2023-06-16T14:45:00",
        status: "in-progress",
        message: "Prise en charge par les services de la ville",
      },
    ],
  }

  // Mock comments
  const mockComments: Comment[] = [
    {
      id: "com1",
      author: "Service Propreté",
      isOfficial: true,
      text: "Nous avons bien reçu votre signalement. Une équipe sera envoyée demain matin pour nettoyer la zone.",
      date: "2023-06-15T14:20:00",
    },
    {
      id: "com2",
      author: "Marie D.",
      isOfficial: false,
      text: "J'ai également remarqué ce problème. La situation empire de jour en jour.",
      date: "2023-06-15T16:35:00",
    },
  ]

  useEffect(() => {
    // Simulate API call to fetch report details
    const fetchReport = async () => {
      setIsLoading(true)
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setReport(mockReport)
      setComments(mockComments)
      setIsLoading(false)
    }

    fetchReport()
  }, [])

  const addComment = (text: string) => {
    const newComment: Comment = {
      id: `com${comments.length + 1}`,
      author: "Vous",
      isOfficial: false,
      text: text,
      date: new Date().toISOString(),
    }

    setComments([...comments, newComment])
  }

  return {
    report,
    comments,
    isLoading,
    addComment,
  }
}

