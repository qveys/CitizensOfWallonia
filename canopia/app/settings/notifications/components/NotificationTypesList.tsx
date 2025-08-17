"use client"

import { Separator } from "@/components/ui/separator"
import { Bell, AlertTriangle, Calendar, Zap, Leaf, MessageSquare } from "lucide-react"
import NotificationTypeItem from "./NotificationTypeItem"

interface NotificationTypesListProps {
  settings: {
    alerts: boolean
    reports: boolean
    events: boolean
    challenges: boolean
    comments: boolean
    system: boolean
  }
  onUpdateSetting: (key: keyof NotificationTypesListProps["settings"], value: boolean) => void
}

export default function NotificationTypesList({ settings, onUpdateSetting }: NotificationTypesListProps) {
  return (
    <div className="space-y-4">
      <NotificationTypeItem
        icon={AlertTriangle}
        iconColor="bg-[#DFA23C]"
        title="Alertes environnementales"
        description="Qualité de l'air, chaleur, pollution"
        checked={settings.alerts}
        onCheckedChange={(value) => onUpdateSetting("alerts", value)}
      />

      <Separator className="bg-[#D8D3CA]" />

      <NotificationTypeItem
        icon={Bell}
        iconColor="bg-[#509555]"
        title="Mises à jour des signalements"
        description="Statut, réponses officielles"
        checked={settings.reports}
        onCheckedChange={(value) => onUpdateSetting("reports", value)}
      />

      <Separator className="bg-[#D8D3CA]" />

      <NotificationTypeItem
        icon={Calendar}
        iconColor="bg-[#3C7D80]"
        title="Événements"
        description="Rappels, nouveaux événements"
        checked={settings.events}
        onCheckedChange={(value) => onUpdateSetting("events", value)}
      />

      <Separator className="bg-[#D8D3CA]" />

      <NotificationTypeItem
        icon={Leaf}
        iconColor="bg-[#688F4E]"
        title="Défis et initiatives"
        description="Mises à jour, rappels, résultats"
        checked={settings.challenges}
        onCheckedChange={(value) => onUpdateSetting("challenges", value)}
      />

      <Separator className="bg-[#D8D3CA]" />

      <NotificationTypeItem
        icon={MessageSquare}
        iconColor="bg-[#9D8BB0]"
        title="Commentaires"
        description="Réponses, mentions, likes"
        checked={settings.comments}
        onCheckedChange={(value) => onUpdateSetting("comments", value)}
      />

      <Separator className="bg-[#D8D3CA]" />

      <NotificationTypeItem
        icon={Zap}
        iconColor="bg-[#A9A295]"
        title="Système"
        description="Mises à jour, maintenance, sécurité"
        checked={settings.system}
        onCheckedChange={(value) => onUpdateSetting("system", value)}
      />
    </div>
  )
}

