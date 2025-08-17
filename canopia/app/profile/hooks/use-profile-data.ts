import type { UserData, Activity } from "../types"

export function useProfileData() {
  // Mock user data
  const userData: UserData = {
    name: "Thomas Dubois",
    location: "Centre-Ville",
    joinDate: "2023-01-15",
    points: 320,
    level: 3,
    badges: [
      { id: "eco-warrior", name: "Éco-guerrier", icon: "🌱", description: "A soumis plus de 5 signalements" },
      { id: "community", name: "Pilier de la communauté", icon: "🏆", description: "Actif depuis plus de 6 mois" },
    ],
    reports: 8,
    contributions: 12,
    bio: "Passionné d'écologie urbaine et de développement durable.",
  }

  const recentActivity: Activity[] = [
    {
      id: "act1",
      title: "Signalement créé",
      description: "Vous avez signalé un dépôt sauvage de déchets",
      type: "report",
      date: "2023-07-15T10:30:00",
      status: "in-progress",
      url: "/reports/rep1",
    },
    {
      id: "act2",
      title: "Défi rejoint",
      description: "Vous avez rejoint le Défi Zéro Déchet",
      type: "challenge",
      date: "2023-07-10T16:45:00",
      status: "completed",
      url: "/actions/chal1",
    },
    {
      id: "act3",
      title: "Zone explorée",
      description: "Vous avez consulté les données du Centre-Ville",
      type: "zone",
      date: "2023-07-08T14:20:00",
      status: "completed",
      url: "/zone/centre-ville",
    },
  ]

  return {
    userData,
    recentActivity,
  }
}

