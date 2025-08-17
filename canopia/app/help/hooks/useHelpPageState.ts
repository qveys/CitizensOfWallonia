"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

// Mock FAQs data
const faqs = [
  {
    id: "faq1",
    question: "Comment créer un signalement ?",
    answer:
      "Pour créer un signalement, accédez à l'onglet 'Signalements' et appuyez sur le bouton 'Nouveau'. Remplissez ensuite le formulaire avec les détails du problème environnemental que vous souhaitez signaler.",
  },
  {
    id: "faq2",
    question: "Comment suivre l'état de mes signalements ?",
    answer:
      "Vous pouvez suivre l'état de vos signalements dans l'onglet 'Signalements'. Chaque signalement affiche son statut actuel (Soumis, En cours, Résolu, Rejeté) et vous pouvez cliquer dessus pour voir plus de détails.",
  },
  {
    id: "faq3",
    question: "Comment interpréter les données environnementales ?",
    answer:
      "Les données environnementales sont présentées sous forme d'indices de qualité (0-100). Plus l'indice est élevé, meilleure est la qualité. Les couleurs vous aident également à interpréter rapidement : vert (bon), jaune (moyen), orange (mauvais), rouge (critique).",
  },
  {
    id: "faq4",
    question: "Comment modifier mes paramètres de notification ?",
    answer:
      "Accédez à votre profil en cliquant sur l'onglet 'Profil', puis faites défiler jusqu'à la section 'Paramètres'. Vous y trouverez une option pour activer ou désactiver les notifications.",
  },
  {
    id: "faq5",
    question: "Comment supprimer mon compte ?",
    answer:
      "Pour supprimer votre compte, accédez à votre profil, puis aux 'Paramètres avancés'. Dans la section 'Données', vous trouverez l'option 'Supprimer mon compte'. Notez que cette action est irréversible.",
  },
]

export function useHelpPageState() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([])

  const toggleFaq = (id: string) => {
    if (expandedFaqs.includes(id)) {
      setExpandedFaqs(expandedFaqs.filter((faqId) => faqId !== id))
    } else {
      setExpandedFaqs([...expandedFaqs, id])
    }
  }

  const filteredFaqs = searchQuery
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : faqs

  const handleBack = () => router.back()
  const handleNavigate = (path: string) => router.push(path)

  return {
    searchQuery,
    setSearchQuery,
    expandedFaqs,
    filteredFaqs,
    toggleFaq,
    handleBack,
    handleNavigate,
  }
}

