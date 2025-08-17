"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Types pour les données d'insights
export interface Insight {
  id: string
  title: string
  description: string
  type: string
  impact: "positive" | "negative" | "neutral"
  date: string
  category: string
  image?: string
  source?: string
  isSaved?: boolean
}

export interface Category {
  id: string
  name: string
  icon: string
  color: string
}

export function useInsightsPageState() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [insights, setInsights] = useState<Insight[]>([])
  const [filteredInsights, setFilteredInsights] = useState<Insight[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeImpact, setActiveImpact] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Simuler le chargement des données
  useEffect(() => {
    const loadInsightsData = async () => {
      setIsLoading(true)
      // Simuler un délai réseau
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Charger les catégories mockées
      const mockCategories: Category[] = [
        { id: "air", name: "Qualité de l'air", icon: "💨", color: "#688F4E" },
        { id: "temperature", name: "Température", icon: "🌡️", color: "#D68C45" },
        { id: "energy", name: "Énergie", icon: "⚡", color: "#DFA23C" },
        { id: "water", name: "Eau", icon: "💧", color: "#3C7D80" },
        { id: "biodiversity", name: "Biodiversité", icon: "🌿", color: "#509555" },
        { id: "waste", name: "Déchets", icon: "🗑️", color: "#9D8BB0" },
      ]

      // Charger les insights mockés
      const mockInsights: Insight[] = [
        {
          id: "ins1",
          title: "Amélioration de la qualité de l'air dans le centre-ville",
          description:
            "Une baisse de 15% des particules fines a été observée dans le centre-ville ce mois-ci, probablement due aux nouvelles restrictions de circulation.",
          type: "air",
          impact: "positive",
          date: "2023-07-15T10:30:00",
          category: "air",
          image: "/placeholder.svg?height=200&width=400",
          source: "Observatoire de la Qualité de l'Air",
          isSaved: true,
        },
        {
          id: "ins2",
          title: "Pic de chaleur prévu pour la semaine prochaine",
          description:
            "Les prévisions météorologiques annoncent une vague de chaleur avec des températures dépassant les 35°C pendant plusieurs jours. Des mesures préventives sont recommandées.",
          type: "temperature",
          impact: "negative",
          date: "2023-07-18T14:45:00",
          category: "temperature",
          image: "/placeholder.svg?height=200&width=400",
          source: "Service Météorologique National",
        },
        {
          id: "ins3",
          title: "Baisse de la consommation énergétique résidentielle",
          description:
            "Les données du dernier trimestre montrent une réduction de 8% de la consommation énergétique des foyers, reflétant l'efficacité des campagnes de sensibilisation.",
          type: "energy",
          impact: "positive",
          date: "2023-07-10T09:15:00",
          category: "energy",
          image: "/placeholder.svg?height=200&width=400",
          source: "Agence de l'Énergie",
          isSaved: true,
        },
        {
          id: "ins4",
          title: "Niveau des nappes phréatiques stable malgré la sécheresse",
          description:
            "Malgré les faibles précipitations, le niveau des nappes phréatiques reste dans la normale grâce aux mesures de restriction d'eau mises en place.",
          type: "water",
          impact: "neutral",
          date: "2023-07-05T11:20:00",
          category: "water",
          image: "/placeholder.svg?height=200&width=400",
          source: "Direction de l'Eau et de l'Assainissement",
        },
        {
          id: "ins5",
          title: "Augmentation des espèces d'oiseaux dans les parcs urbains",
          description:
            "Un recensement récent a identifié une augmentation de 12% des espèces d'oiseaux nichant dans les parcs urbains, signe d'une amélioration de la biodiversité locale.",
          type: "biodiversity",
          impact: "positive",
          date: "2023-07-12T16:30:00",
          category: "biodiversity",
          image: "/placeholder.svg?height=200&width=400",
          source: "Association Ornithologique",
        },
        {
          id: "ins6",
          title: "Hausse du taux de recyclage des déchets ménagers",
          description:
            "Le taux de recyclage des déchets ménagers a atteint 65%, soit une augmentation de 7% par rapport à l'année précédente, grâce aux nouvelles infrastructures de tri.",
          type: "waste",
          impact: "positive",
          date: "2023-07-08T13:45:00",
          category: "waste",
          image: "/placeholder.svg?height=200&width=400",
          source: "Service de Gestion des Déchets",
        },
      ]

      setCategories(mockCategories)
      setInsights(mockInsights)
      setFilteredInsights(mockInsights)
      setIsLoading(false)
    }

    loadInsightsData()
  }, [])

  // Filtrer les insights en fonction des critères
  useEffect(() => {
    let result = [...insights]

    // Filtrer par catégorie
    if (activeCategory) {
      result = result.filter((insight) => insight.category === activeCategory)
    }

    // Filtrer par impact
    if (activeImpact) {
      result = result.filter((insight) => insight.impact === activeImpact)
    }

    // Filtrer par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (insight) =>
          insight.title.toLowerCase().includes(query) ||
          insight.description.toLowerCase().includes(query) ||
          insight.source?.toLowerCase().includes(query),
      )
    }

    setFilteredInsights(result)
  }, [insights, activeCategory, activeImpact, searchQuery])

  // Fonctions de navigation
  const navigateToInsightDetails = (insightId: string) => {
    router.push(`/trends/insights/${insightId}`)
  }

  const navigateBack = () => {
    router.push("/trends")
  }

  // Fonctions d'interaction
  const toggleSaveInsight = (insightId: string) => {
    setInsights(
      insights.map((insight) => {
        if (insight.id === insightId) {
          return {
            ...insight,
            isSaved: !insight.isSaved,
          }
        }
        return insight
      }),
    )
  }

  return {
    isLoading,
    filteredInsights,
    categories,
    activeCategory,
    setActiveCategory,
    activeImpact,
    setActiveImpact,
    searchQuery,
    setSearchQuery,
    navigateToInsightDetails,
    navigateBack,
    toggleSaveInsight,
  }
}

