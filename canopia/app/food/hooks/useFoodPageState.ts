"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

// Mock seasonal food data
const seasonalFoods = [
  {
    id: 1,
    name: "Fraises",
    type: "fruit",
    season: "spring",
    local: true,
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 2,
    name: "Asperges",
    type: "vegetable",
    season: "spring",
    local: true,
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 3,
    name: "Petits pois",
    type: "vegetable",
    season: "spring",
    local: true,
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 4,
    name: "Radis",
    type: "vegetable",
    season: "spring",
    local: true,
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 5,
    name: "Cerises",
    type: "fruit",
    season: "spring",
    local: true,
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 6,
    name: "Artichaut",
    type: "vegetable",
    season: "spring",
    local: true,
    image: "/placeholder.svg?height=48&width=48",
  },
]

// Mock eco-tips
const ecoTips = [
  "Privilégiez les produits en vrac pour réduire les emballages",
  "Utilisez un sac réutilisable pour vos courses",
  "Planifiez vos repas à l'avance pour éviter le gaspillage",
  "Conservez correctement vos aliments pour prolonger leur durée de vie",
  "Compostez vos déchets organiques",
  "Achetez directement aux producteurs locaux",
]

export function useFoodPageState() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("seasonal")
  const [showAllFoods, setShowAllFoods] = useState(false)

  const displayedFoods = showAllFoods ? seasonalFoods : seasonalFoods.slice(0, 6)

  const handleShowMore = () => setShowAllFoods(true)
  const handleNavigate = (path: string) => router.push(path)

  return {
    activeTab,
    setActiveTab,
    displayedFoods,
    ecoTips,
    showAllFoods,
    handleShowMore,
    handleNavigate,
  }
}

