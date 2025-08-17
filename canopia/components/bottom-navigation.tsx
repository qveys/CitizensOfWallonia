"use client"

import {
  Map,
  BarChart2,
  Bell,
  User,
  Leaf,
  Home,
  Users,
  Calendar,
  Award,
  BookOpen,
  ShoppingBag,
  CloudOff,
  Heart,
  Euro,
  Trophy,
  Newspaper,
  Store,
  Target,
  Bird,
  Droplets,
  Zap,
  Trash2,
  Apple,
  Bus,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"

interface BottomNavigationProps {
  activeTab: string
}

export default function BottomNavigation({ activeTab }: BottomNavigationProps) {
  const [showMore, setShowMore] = useState(false)

  const mainTabs = [
    { id: "dashboard", icon: Home, label: "Accueil", href: "/dashboard" },
    { id: "map", icon: Map, label: "Carte", href: "/" },
    { id: "transport", icon: Bus, label: "Transport", href: "/transport" },
    { id: "food", icon: Apple, label: "Alimentation", href: "/food" },
    { id: "profile", icon: User, label: "Profil", href: "/profile" },
  ]

  const secondaryTabs = [
    { id: "waste", icon: Trash2, label: "Déchets", href: "/waste" },
    { id: "energy", icon: Zap, label: "Énergie", href: "/energy" },
    { id: "water", icon: Droplets, label: "Eau", href: "/water" },
    { id: "biodiversity", icon: Bird, label: "Biodiversité", href: "/biodiversity" },
    { id: "plan", icon: Target, label: "Plan", href: "/plan" },
    { id: "directory", icon: Store, label: "Annuaire", href: "/directory" },
    { id: "challenges", icon: Trophy, label: "Défis", href: "/challenges" },
    { id: "news", icon: Newspaper, label: "Actualités", href: "/news" },
    { id: "carbon", icon: CloudOff, label: "Empreinte", href: "/carbon" },
    { id: "volunteer", icon: Heart, label: "Bénévolat", href: "/volunteer" },
    { id: "donations", icon: Euro, label: "Dons", href: "/donations" },
    { id: "actions", icon: Leaf, label: "Actions", href: "/actions" },
    { id: "trends", icon: BarChart2, label: "Tendances", href: "/trends" },
    { id: "reports", icon: Bell, label: "Signalements", href: "/reports" },
    { id: "community", icon: Users, label: "Communauté", href: "/community" },
    { id: "events", icon: Calendar, label: "Événements", href: "/events" },
    { id: "rewards", icon: Award, label: "Récompenses", href: "/rewards" },
    { id: "education", icon: BookOpen, label: "Éducation", href: "/education" },
    { id: "marketplace", icon: ShoppingBag, label: "Marché", href: "/marketplace" },
  ]

  // Display all tabs on larger screens, or when "more" is toggled
  const visibleTabs = showMore ? [...mainTabs, ...secondaryTabs] : mainTabs

  return (
    <div className="bg-white border-t border-[#D8D3CA] z-10">
      <div className="h-16 flex items-center justify-around px-2 overflow-x-auto">
        {visibleTabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={cn(
              "flex flex-col items-center justify-center min-w-[60px] h-full",
              "transition-colors duration-200",
              activeTab === tab.id ? "text-[#2B463C]" : "text-[#A9A295]",
            )}
          >
            <tab.icon className={cn("h-6 w-6 mb-1", activeTab === tab.id ? "text-[#688F4E]" : "text-[#A9A295]")} />
            <span className="text-xs font-medium">{tab.label}</span>
          </Link>
        ))}

        {/* More/Less toggle button for mobile */}
        <button
          className="flex flex-col items-center justify-center min-w-[60px] h-full text-[#A9A295] md:hidden"
          onClick={() => setShowMore(!showMore)}
        >
          <div className="h-6 w-6 mb-1 flex items-center justify-center">{showMore ? "−" : "+"}</div>
          <span className="text-xs font-medium">{showMore ? "Moins" : "Plus"}</span>
        </button>
      </div>
    </div>
  )
}

