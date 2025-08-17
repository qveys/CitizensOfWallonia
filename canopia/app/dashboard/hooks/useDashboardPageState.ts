"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Types pour les données du tableau de bord
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

export function useDashboardPageState() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [environmentalMetrics, setEnvironmentalMetrics] = useState<EnvironmentalMetric[]>([])
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([])
  const [communityUpdates, setCommunityUpdates] = useState<CommunityUpdate[]>([])
  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>([])
  const [activeTab, setActiveTab] = useState("overview")

  // Simuler le chargement des données
  useEffect(() => {
    const loadDashboardData = async () => {
      setIsLoading(true)
      // Simuler un délai réseau
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Charger les données mockées
      setEnvironmentalMetrics([
        {
          id: "air",
          name: "Qualité de l'air",
          value: 72,
          unit: "/100",
          change: 3,
          trend: "up",
          status: "good",
        },
        {
          id: "energy",
          name: "Consommation énergétique",
          value: 420,
          unit: "kWh",
          change: -5,
          trend: "down",
          status: "good",
        },
        {
          id: "waste",
          name: "Déchets recyclés",
          value: 68,
          unit: "%",
          change: 2,
          trend: "up",
          status: "warning",
        },
        {
          id: "water",
          name: "Qualité de l'eau",
          value: 85,
          unit: "/100",
          change: 0,
          trend: "stable",
          status: "good",
        },
      ])

      setRecentActivity([
        {
          id: "act1",
          type: "report",
          title: "Signalement de déchets créé",
          date: "2023-07-15T10:30:00",
          status: "pending",
        },
        {
          id: "act2",
          type: "challenge",
          title: "Défi Zéro Déchet complété",
          date: "2023-07-10T16:45:00",
          status: "completed",
        },
        {
          id: "act3",
          type: "event",
          title: "Inscription à l'événement Nettoyage du Parc",
          date: "2023-07-08T14:20:00",
        },
      ])

      setCommunityUpdates([
        {
          id: "comm1",
          title: "Initiative de jardins partagés",
          description: "Nouveau projet de jardins partagés dans le quartier nord. Rejoignez-nous !",
          author: "Marie Dupont",
          date: "2023-07-14T09:15:00",
          likes: 24,
          comments: 7,
          image: "/placeholder.svg?height=120&width=240",
        },
        {
          id: "comm2",
          title: "Résultats du concours photo nature",
          description: "Découvrez les gagnants du concours photo nature de notre ville.",
          author: "Association NatureVille",
          date: "2023-07-12T11:30:00",
          likes: 42,
          comments: 15,
          image: "/placeholder.svg?height=120&width=240",
        },
      ])

      setUpcomingEvents([
        {
          id: "evt1",
          title: "Nettoyage du Parc Central",
          date: "2023-07-22T09:00:00",
          location: "Parc Central",
          participants: 18,
        },
        {
          id: "evt2",
          title: "Atelier Compostage",
          date: "2023-07-25T14:30:00",
          location: "Centre Communautaire",
          participants: 12,
        },
        {
          id: "evt3",
          title: "Marché Éco-responsable",
          date: "2023-07-29T10:00:00",
          location: "Place du Marché",
          participants: 35,
        },
      ])

      setIsLoading(false)
    }

    loadDashboardData()
  }, [])

  // Fonctions de navigation
  const navigateToMetricDetails = (metricId: string) => {
    router.push(`/trends?metric=${metricId}`)
  }

  const navigateToActivity = (activityId: string, type: string) => {
    switch (type) {
      case "report":
        router.push(`/reports/${activityId}`)
        break
      case "event":
        router.push(`/events/${activityId}`)
        break
      case "challenge":
        router.push(`/rewards/challenges/${activityId}`)
        break
      case "community":
        router.push(`/community/post/${activityId}`)
        break
      default:
        router.push(`/profile/activity`)
    }
  }

  const navigateToCommunityPost = (postId: string) => {
    router.push(`/community/post/${postId}`)
  }

  const navigateToEvent = (eventId: string) => {
    router.push(`/events/${eventId}`)
  }

  const navigateToAllEvents = () => {
    router.push("/events")
  }

  const navigateToAllCommunityPosts = () => {
    router.push("/community")
  }

  return {
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
  }
}

