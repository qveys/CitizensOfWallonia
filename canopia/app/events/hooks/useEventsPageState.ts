"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Types pour les données d'événements
interface EventLocation {
  name: string
  address: string
  coordinates?: [number, number]
}

interface EventOrganizer {
  id: string
  name: string
  avatar?: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  endDate?: string
  location: EventLocation
  image?: string
  organizer: EventOrganizer
  participants: number
  maxParticipants?: number
  category: string
  tags: string[]
  isRegistered?: boolean
}

export function useEventsPageState() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [events, setEvents] = useState<Event[]>([])
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])
  const [activeTab, setActiveTab] = useState("upcoming")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Simuler le chargement des données
  useEffect(() => {
    const loadEvents = async () => {
      setIsLoading(true)
      // Simuler un délai réseau
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Charger les données mockées
      const mockEvents: Event[] = [
        {
          id: "evt1",
          title: "Nettoyage du Parc Central",
          description:
            "Rejoignez-nous pour une matinée de nettoyage du parc central. Ensemble, nous pouvons faire une différence !",
          date: "2023-07-22T09:00:00",
          endDate: "2023-07-22T12:00:00",
          location: {
            name: "Parc Central",
            address: "Avenue du Parc, Centre-ville",
          },
          image: "/placeholder.svg?height=200&width=400",
          organizer: {
            id: "org1",
            name: "Association Ville Propre",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          participants: 18,
          maxParticipants: 30,
          category: "cleanup",
          tags: ["nettoyage", "parc", "bénévolat"],
          isRegistered: true,
        },
        {
          id: "evt2",
          title: "Atelier Compostage",
          description: "Apprenez à composter efficacement chez vous. Techniques, astuces et conseils pratiques.",
          date: "2023-07-25T14:30:00",
          endDate: "2023-07-25T16:30:00",
          location: {
            name: "Centre Communautaire",
            address: "Rue des Lilas, Quartier Est",
          },
          image: "/placeholder.svg?height=200&width=400",
          organizer: {
            id: "org2",
            name: "Éco-Jardins",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          participants: 12,
          maxParticipants: 20,
          category: "workshop",
          tags: ["compostage", "jardinage", "zéro-déchet"],
        },
        {
          id: "evt3",
          title: "Marché Éco-responsable",
          description:
            "Découvrez des produits locaux, biologiques et éco-responsables. Rencontrez les producteurs de votre région.",
          date: "2023-07-29T10:00:00",
          endDate: "2023-07-29T18:00:00",
          location: {
            name: "Place du Marché",
            address: "Place Centrale, Centre-ville",
          },
          image: "/placeholder.svg?height=200&width=400",
          organizer: {
            id: "org3",
            name: "Collectif Local & Bio",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          participants: 35,
          category: "market",
          tags: ["marché", "local", "bio", "zéro-déchet"],
        },
        {
          id: "evt4",
          title: "Conférence sur la Biodiversité Urbaine",
          description: "Une conférence passionnante sur la biodiversité en milieu urbain et comment la préserver.",
          date: "2023-08-05T18:30:00",
          endDate: "2023-08-05T20:30:00",
          location: {
            name: "Bibliothèque Municipale",
            address: "Rue des Savoirs, Quartier Nord",
          },
          image: "/placeholder.svg?height=200&width=400",
          organizer: {
            id: "org4",
            name: "Institut de Biodiversité",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          participants: 28,
          maxParticipants: 50,
          category: "conference",
          tags: ["biodiversité", "nature", "éducation"],
        },
      ]

      setEvents(mockEvents)
      setFilteredEvents(mockEvents)
      setIsLoading(false)
    }

    loadEvents()
  }, [])

  // Filtrer les événements en fonction de l'onglet actif, de la recherche et de la catégorie
  useEffect(() => {
    let result = [...events]

    // Filtrer par onglet
    if (activeTab === "upcoming") {
      result = result.filter((event) => new Date(event.date) > new Date())
    } else if (activeTab === "myevents") {
      result = result.filter((event) => event.isRegistered)
    } else if (activeTab === "past") {
      result = result.filter((event) => new Date(event.date) < new Date())
    }

    // Filtrer par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query) ||
          event.location.name.toLowerCase().includes(query) ||
          event.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Filtrer par catégorie
    if (selectedCategory) {
      result = result.filter((event) => event.category === selectedCategory)
    }

    setFilteredEvents(result)
  }, [events, activeTab, searchQuery, selectedCategory])

  // Fonctions de navigation
  const navigateToEventDetails = (eventId: string) => {
    router.push(`/events/${eventId}`)
  }

  const navigateToCreateEvent = () => {
    router.push("/events/create")
  }

  const navigateToOrganizerProfile = (organizerId: string) => {
    router.push(`/profile/${organizerId}`)
  }

  return {
    isLoading,
    filteredEvents,
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    navigateToEventDetails,
    navigateToCreateEvent,
    navigateToOrganizerProfile,
  }
}

