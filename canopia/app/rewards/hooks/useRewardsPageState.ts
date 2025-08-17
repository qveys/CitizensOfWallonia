"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Types pour les données de récompenses
export interface Challenge {
  id: string
  title: string
  description: string
  points: number
  deadline?: string
  progress: number
  image?: string
  category: string
  participants: number
  isJoined?: boolean
}

export interface Reward {
  id: string
  title: string
  description: string
  points: number
  image?: string
  provider: string
  available: number
  isRedeemed?: boolean
}

export function useRewardsPageState() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [userPoints, setUserPoints] = useState(0)
  const [challenges, setChallenges] = useState<Challenge[]>([])
  const [rewards, setRewards] = useState<Reward[]>([])
  const [activeTab, setActiveTab] = useState("challenges")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredItems, setFilteredItems] = useState<Challenge[] | Reward[]>([])

  // Simuler le chargement des données
  useEffect(() => {
    const loadRewardsData = async () => {
      setIsLoading(true)
      // Simuler un délai réseau
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Charger les données mockées
      setUserPoints(450)

      const mockChallenges: Challenge[] = [
        {
          id: "chal1",
          title: "Défi Zéro Déchet",
          description: "Réduisez vos déchets ménagers de 50% pendant un mois.",
          points: 200,
          deadline: "2023-08-15T23:59:59",
          progress: 75,
          image: "/placeholder.svg?height=200&width=400",
          category: "waste",
          participants: 156,
          isJoined: true,
        },
        {
          id: "chal2",
          title: "Économiseur d'eau",
          description: "Réduisez votre consommation d'eau de 20% ce mois-ci.",
          points: 150,
          deadline: "2023-08-30T23:59:59",
          progress: 40,
          image: "/placeholder.svg?height=200&width=400",
          category: "water",
          participants: 98,
          isJoined: true,
        },
        {
          id: "chal3",
          title: "Mobilité douce",
          description: "Effectuez tous vos trajets de moins de 5km sans voiture pendant 2 semaines.",
          points: 250,
          deadline: "2023-09-10T23:59:59",
          progress: 0,
          image: "/placeholder.svg?height=200&width=400",
          category: "transport",
          participants: 124,
        },
        {
          id: "chal4",
          title: "Alimentation locale",
          description: "Achetez uniquement des produits locaux (moins de 100km) pendant 1 semaine.",
          points: 100,
          deadline: "2023-08-20T23:59:59",
          progress: 0,
          image: "/placeholder.svg?height=200&width=400",
          category: "food",
          participants: 87,
        },
      ]

      const mockRewards: Reward[] = [
        {
          id: "rew1",
          title: "Bon d'achat Bio Market",
          description: "Bon d'achat de 10€ valable dans tous les magasins Bio Market.",
          points: 200,
          image: "/placeholder.svg?height=200&width=400",
          provider: "Bio Market",
          available: 45,
        },
        {
          id: "rew2",
          title: "Réduction Vélo Shop",
          description: "15% de réduction sur votre prochain achat chez Vélo Shop.",
          points: 300,
          image: "/placeholder.svg?height=200&width=400",
          provider: "Vélo Shop",
          available: 20,
          isRedeemed: true,
        },
        {
          id: "rew3",
          title: "Entrée gratuite Jardin Botanique",
          description: "Une entrée gratuite au Jardin Botanique de la ville.",
          points: 150,
          image: "/placeholder.svg?height=200&width=400",
          provider: "Jardin Botanique",
          available: 30,
        },
        {
          id: "rew4",
          title: "Kit jardinage écologique",
          description: "Kit de démarrage pour jardinage écologique (graines, outils, guide).",
          points: 400,
          image: "/placeholder.svg?height=200&width=400",
          provider: "Mairie",
          available: 10,
        },
      ]

      setChallenges(mockChallenges)
      setRewards(mockRewards)
      setFilteredItems(mockChallenges)
      setIsLoading(false)
    }

    loadRewardsData()
  }, [])

  // Filtrer les éléments en fonction de l'onglet actif et de la recherche
  useEffect(() => {
    let items = activeTab === "challenges" ? challenges : rewards

    // Filtrer par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      items = items.filter(
        (item) => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query),
      )
    }

    setFilteredItems(items)
  }, [activeTab, challenges, rewards, searchQuery])

  // Fonctions de navigation
  const navigateToChallengeDetails = (challengeId: string) => {
    router.push(`/rewards/challenges/${challengeId}`)
  }

  const navigateToRewardDetails = (rewardId: string) => {
    router.push(`/rewards/redeem/${rewardId}`)
  }

  // Fonctions d'interaction
  const joinChallenge = (challengeId: string) => {
    setChallenges(
      challenges.map((challenge) => {
        if (challenge.id === challengeId) {
          return {
            ...challenge,
            isJoined: true,
            participants: challenge.participants + 1,
          }
        }
        return challenge
      }),
    )
  }

  const redeemReward = (rewardId: string) => {
    // Vérifier si l'utilisateur a assez de points
    const reward = rewards.find((r) => r.id === rewardId)
    if (!reward || reward.isRedeemed || reward.points > userPoints) return

    setUserPoints(userPoints - reward.points)
    setRewards(
      rewards.map((r) => {
        if (r.id === rewardId) {
          return {
            ...r,
            isRedeemed: true,
            available: r.available - 1,
          }
        }
        return r
      }),
    )
  }

  return {
    isLoading,
    userPoints,
    filteredItems,
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    navigateToChallengeDetails,
    navigateToRewardDetails,
    joinChallenge,
    redeemReward,
  }
}

