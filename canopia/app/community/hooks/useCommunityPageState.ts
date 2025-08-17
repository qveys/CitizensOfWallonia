"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Types pour les données de la communauté
interface PostAuthor {
  id: string
  name: string
  avatar?: string
}

export interface CommunityPost {
  id: string
  title: string
  content: string
  author: PostAuthor
  date: string
  likes: number
  comments: number
  image?: string
  tags: string[]
  isLiked?: boolean
}

export function useCommunityPageState() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState<CommunityPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<CommunityPost[]>([])
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Simuler le chargement des données
  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true)
      // Simuler un délai réseau
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Charger les données mockées
      const mockPosts: CommunityPost[] = [
        {
          id: "post1",
          title: "Initiative de jardins partagés dans le quartier nord",
          content:
            "Bonjour à tous ! Je souhaite lancer un projet de jardins partagés dans notre quartier. L'idée est de transformer l'espace vacant près du parc en un lieu de culture collectif. Qui serait intéressé pour participer ?",
          author: {
            id: "user1",
            name: "Marie Dupont",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          date: "2023-07-14T09:15:00",
          likes: 24,
          comments: 7,
          image: "/placeholder.svg?height=200&width=400",
          tags: ["jardinage", "quartier-nord", "initiative"],
          isLiked: true,
        },
        {
          id: "post2",
          title: "Résultats du concours photo nature de notre ville",
          content:
            "Nous sommes ravis de vous présenter les gagnants du concours photo nature ! Félicitations à tous les participants pour leurs magnifiques clichés qui mettent en valeur la biodiversité urbaine.",
          author: {
            id: "org1",
            name: "Association NatureVille",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          date: "2023-07-12T11:30:00",
          likes: 42,
          comments: 15,
          image: "/placeholder.svg?height=200&width=400",
          tags: ["concours", "photo", "biodiversité"],
        },
        {
          id: "post3",
          title: "Problème de pollution sonore près de la gare",
          content:
            "Depuis quelques semaines, le bruit des travaux près de la gare est devenu insupportable, même la nuit. Quelqu'un d'autre est-il affecté ? Que pouvons-nous faire collectivement ?",
          author: {
            id: "user2",
            name: "Thomas Martin",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          date: "2023-07-10T16:45:00",
          likes: 18,
          comments: 23,
          tags: ["pollution-sonore", "gare", "problème"],
        },
        {
          id: "post4",
          title: "Nouvelle piste cyclable : vos impressions ?",
          content:
            "La nouvelle piste cyclable de l'avenue principale est enfin terminée ! Qui l'a déjà testée ? Quelles sont vos impressions ? Est-elle bien conçue et sécurisée ?",
          author: {
            id: "user3",
            name: "Sophie Lefebvre",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          date: "2023-07-08T14:20:00",
          likes: 31,
          comments: 19,
          image: "/placeholder.svg?height=200&width=400",
          tags: ["mobilité", "vélo", "infrastructure"],
          isLiked: true,
        },
      ]

      setPosts(mockPosts)
      setFilteredPosts(mockPosts)
      setIsLoading(false)
    }

    loadPosts()
  }, [])

  // Filtrer les posts en fonction de l'onglet actif, de la recherche et du tag
  useEffect(() => {
    let result = [...posts]

    // Filtrer par onglet
    if (activeTab === "popular") {
      result = result.sort((a, b) => b.likes - a.likes)
    } else if (activeTab === "recent") {
      result = result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (activeTab === "my") {
      result = result.filter((post) => post.isLiked)
    }

    // Filtrer par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query) ||
          post.author.name.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Filtrer par tag
    if (selectedTag) {
      result = result.filter((post) => post.tags.includes(selectedTag))
    }

    setFilteredPosts(result)
  }, [posts, activeTab, searchQuery, selectedTag])

  // Fonctions de navigation
  const navigateToPostDetails = (postId: string) => {
    router.push(`/community/post/${postId}`)
  }

  const navigateToCreatePost = () => {
    router.push("/community/create")
  }

  const navigateToAuthorProfile = (authorId: string) => {
    router.push(`/profile/${authorId}`)
  }

  // Fonctions d'interaction
  const toggleLike = (postId: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          const isLiked = !post.isLiked
          return {
            ...post,
            isLiked,
            likes: isLiked ? post.likes + 1 : post.likes - 1,
          }
        }
        return post
      }),
    )
  }

  return {
    isLoading,
    filteredPosts,
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    selectedTag,
    setSelectedTag,
    navigateToPostDetails,
    navigateToCreatePost,
    navigateToAuthorProfile,
    toggleLike,
  }
}

