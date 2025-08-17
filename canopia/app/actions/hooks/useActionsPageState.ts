"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Types pour les données d'actions
export interface ActionCategory {
  id: string
  name: string
  icon: string
  color: string
}

export interface Action {
  id: string
  title: string
  description: string
  impact: number // 1-5
  difficulty: number // 1-5
  duration: string
  category: string
  image?: string
  participants: number
  isJoined?: boolean
}

export function useActionsPageState() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [actions, setActions] = useState<Action[]>([])
  const [filteredActions, setFilteredActions] = useState<Action[]>([])
  const [categories, setCategories] = useState<ActionCategory[]>([])
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("popular")

  // Simuler le chargement des données
  useEffect(() => {
    const loadActions = async () => {
      setIsLoading(true)
      // Simuler un délai réseau
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Charger les catégories mockées
      const mockCategories: ActionCategory[] = [
        { id: "energy", name: "Énergie", icon: "⚡", color: "#DFA23C" },
        { id: "waste", name: "Déchets", icon: "🗑️", color: "#D68C45" },
        { id: "water", name: "Eau", icon: "💧", color: "#3C7D80" },
        { id: "food", name: "Alimentation", icon: "🍎", color: "#688F4E" },
        { id: "transport", name: "Transport", icon: "🚲", color: "#9D8BB0" },
        { id: "biodiversity", name: "Biodiversité", icon: "🌿", color: "#509555" },
      ]

      // Charger les actions mockées
      const mockActions: Action[] = [
        {
          id: "act1",
          title: "Réduire sa consommation d'électricité",
          description: "Adoptez des gestes simples pour réduire votre consommation d'électricité au quotidien.",
          impact: 4,
          difficulty: 2,
          duration: "permanent",
          category: "energy",
          image: "/placeholder.svg?height=200&width=400",
          participants: 245,
          isJoined: true,
        },
        {
          id: "act2",
          title: "Composter ses déchets organiques",
          description: "Apprenez à composter vos déchets organiques pour réduire vos ordures et enrichir votre jardin.",
          impact: 3,
          difficulty: 3,
          duration: "permanent",
          category: "waste",
          image: "/placeholder.svg?height=200&width=400",
          participants: 178,
        },
        {
          id: "act3",
          title: "Installer des économiseurs d'eau",
          description: "Équipez vos robinets et douches d'économiseurs d'eau pour réduire votre consommation.",
          impact: 3,
          difficulty: 1,
          duration: "one-time",
          category: "water",
          image: "/placeholder.svg?height=200&width=400",
          participants: 312,
          isJoined: true,
        },
        {
          id: "act4",
          title: "Manger local et de saison",
          description:
            "Privilégiez les produits locaux et de saison pour réduire l'impact environnemental de votre alimentation.",
          impact: 4,
          difficulty: 2,
          duration: "permanent",
          category: "food",
          image: "/placeholder.svg?height=200&width=400",
          participants: 423,
        },
        {
          id: "act5",
          title: "Utiliser les transports en commun",
          description: "Remplacez vos trajets en voiture par les transports en commun quand c'est possible.",
          impact: 5,
          difficulty: 3,
          duration: "permanent",
          category: "transport",
          image: "/placeholder.svg?height=200&width=400",
          participants: 289,
        },
        {
          id: "act6",
          title: "Planter des espèces locales",
          description: "Favorisez la biodiversité en plantant des espèces végétales locales dans votre jardin.",
          impact: 3,
          difficulty: 2,
          duration: "seasonal",
          category: "biodiversity",
          image: "/placeholder.svg?height=200&width=400",
          participants: 156,
        },
      ]

      setCategories(mockCategories)
      setActions(mockActions)
      setFilteredActions(mockActions)
      setIsLoading(false)
    }

    loadActions()
  }, [])

  // Filtrer les actions en fonction de la catégorie active, de la recherche et du tri
  useEffect(() => {
    let result = [...actions]

    // Filtrer par catégorie
    if (activeCategory) {
      result = result.filter((action) => action.category === activeCategory)
    }

    // Filtrer par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (action) => action.title.toLowerCase().includes(query) || action.description.toLowerCase().includes(query),
      )
    }

    // Trier les résultats
    if (sortBy === "popular") {
      result = result.sort((a, b) => b.participants - a.participants)
    } else if (sortBy === "impact") {
      result = result.sort((a, b) => b.impact - a.impact)
    } else if (sortBy === "difficulty") {
      result = result.sort((a, b) => a.difficulty - b.difficulty)
    }

    setFilteredActions(result)
  }, [actions, activeCategory, searchQuery, sortBy])

  // Fonctions de navigation
  const navigateToActionDetails = (actionId: string) => {
    router.push(`/actions/${actionId}`)
  }

  const navigateToCreateAction = () => {
    router.push("/actions/create")
  }

  // Fonctions d'interaction
  const toggleJoinAction = (actionId: string) => {
    setActions(
      actions.map((action) => {
        if (action.id === actionId) {
          const isJoined = !action.isJoined
          return {
            ...action,
            isJoined,
            participants: isJoined ? action.participants + 1 : action.participants - 1,
          }
        }
        return action
      }),
    )
  }

  return {
    isLoading,
    filteredActions,
    categories,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    navigateToActionDetails,
    navigateToCreateAction,
    toggleJoinAction,
  }
}

