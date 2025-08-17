"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Types pour les données éducatives
export interface Course {
  id: string
  title: string
  description: string
  duration: number // en minutes
  level: "beginner" | "intermediate" | "advanced"
  category: string
  image?: string
  progress?: number
  isEnrolled?: boolean
  author: string
}

export interface Resource {
  id: string
  title: string
  description: string
  type: "article" | "video" | "guide" | "infographic"
  category: string
  image?: string
  url: string
  isSaved?: boolean
}

export interface Category {
  id: string
  name: string
  icon: string
  color: string
}

export function useEducationPageState() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [courses, setCourses] = useState<Course[]>([])
  const [resources, setResources] = useState<Resource[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [activeTab, setActiveTab] = useState("courses")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredItems, setFilteredItems] = useState<Course[] | Resource[]>([])

  // Simuler le chargement des données
  useEffect(() => {
    const loadEducationData = async () => {
      setIsLoading(true)
      // Simuler un délai réseau
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Charger les catégories mockées
      const mockCategories: Category[] = [
        { id: "waste", name: "Déchets", icon: "🗑️", color: "#D68C45" },
        { id: "water", name: "Eau", icon: "💧", color: "#3C7D80" },
        { id: "energy", name: "Énergie", icon: "⚡", color: "#DFA23C" },
        { id: "biodiversity", name: "Biodiversité", icon: "🌿", color: "#509555" },
        { id: "food", name: "Alimentation", icon: "🍎", color: "#688F4E" },
        { id: "climate", name: "Climat", icon: "🌡️", color: "#9D8BB0" },
      ]

      // Charger les cours mockés
      const mockCourses: Course[] = [
        {
          id: "course1",
          title: "Les bases du compostage",
          description: "Apprenez à composter efficacement vos déchets organiques à la maison.",
          duration: 45,
          level: "beginner",
          category: "waste",
          image: "/placeholder.svg?height=200&width=400",
          progress: 75,
          isEnrolled: true,
          author: "Marie Compost",
        },
        {
          id: "course2",
          title: "Économiser l'eau au quotidien",
          description: "Découvrez des astuces simples pour réduire votre consommation d'eau.",
          duration: 30,
          level: "beginner",
          category: "water",
          image: "/placeholder.svg?height=200&width=400",
          author: "Institut de l'Eau",
        },
        {
          id: "course3",
          title: "Comprendre le changement climatique",
          description: "Une introduction aux mécanismes du changement climatique et ses impacts.",
          duration: 60,
          level: "intermediate",
          category: "climate",
          image: "/placeholder.svg?height=200&width=400",
          progress: 20,
          isEnrolled: true,
          author: "Dr. Climat",
        },
        {
          id: "course4",
          title: "Jardinage écologique",
          description: "Techniques de jardinage respectueuses de l'environnement et de la biodiversité.",
          duration: 90,
          level: "intermediate",
          category: "biodiversity",
          image: "/placeholder.svg?height=200&width=400",
          author: "Association Jardins Naturels",
        },
      ]

      // Charger les ressources mockées
      const mockResources: Resource[] = [
        {
          id: "res1",
          title: "Guide du tri sélectif",
          description: "Tout savoir sur le tri des déchets dans votre commune.",
          type: "guide",
          category: "waste",
          image: "/placeholder.svg?height=200&width=400",
          url: "/education/resources/guide-tri",
          isSaved: true,
        },
        {
          id: "res2",
          title: "Comment réduire sa facture d'électricité",
          description: "10 conseils pratiques pour économiser l'énergie à la maison.",
          type: "article",
          category: "energy",
          image: "/placeholder.svg?height=200&width=400",
          url: "/education/resources/economie-energie",
          isSaved: true,
        },
        {
          id: "res3",
          title: "Les espèces menacées de notre région",
          description: "Découvrez les espèces en danger et comment les protéger.",
          type: "infographic",
          category: "biodiversity",
          image: "/placeholder.svg?height=200&width=400",
          url: "/education/resources/especes-menacees",
        },
        {
          id: "res4",
          title: "L'impact de notre alimentation sur l'environnement",
          description: "Vidéo explicative sur l'empreinte carbone de nos choix alimentaires.",
          type: "video",
          category: "food",
          image: "/placeholder.svg?height=200&width=400",
          url: "/education/resources/alimentation-impact",
        },
      ]

      setCategories(mockCategories)
      setCourses(mockCourses)
      setResources(mockResources)
      setFilteredItems(mockCourses)
      setIsLoading(false)
    }

    loadEducationData()
  }, [])

  // Filtrer les éléments en fonction de l'onglet actif, de la catégorie et de la recherche
  useEffect(() => {
    let items = activeTab === "courses" ? courses : resources

    // Filtrer par catégorie
    if (activeCategory) {
      items = items.filter((item) => item.category === activeCategory)
    }

    // Filtrer par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      items = items.filter(
        (item) => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query),
      )
    }

    setFilteredItems(items)
  }, [activeTab, activeCategory, courses, resources, searchQuery])

  // Fonctions de navigation
  const navigateToCourseDetails = (courseId: string) => {
    router.push(`/education/courses/${courseId}`)
  }

  const navigateToResource = (resourceUrl: string) => {
    router.push(resourceUrl)
  }

  // Fonctions d'interaction
  const enrollCourse = (courseId: string) => {
    setCourses(
      courses.map((course) => {
        if (course.id === courseId) {
          return {
            ...course,
            isEnrolled: true,
            progress: 0,
          }
        }
        return course
      }),
    )
  }

  const saveResource = (resourceId: string) => {
    setResources(
      resources.map((resource) => {
        if (resource.id === resourceId) {
          return {
            ...resource,
            isSaved: !resource.isSaved,
          }
        }
        return resource
      }),
    )
  }

  return {
    isLoading,
    filteredItems,
    categories,
    activeTab,
    setActiveTab,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    navigateToCourseDetails,
    navigateToResource,
    enrollCourse,
    saveResource,
  }
}

