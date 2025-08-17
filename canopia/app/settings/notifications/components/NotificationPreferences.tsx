"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface NotificationPreferencesProps {
  notificationMethod: string
  onMethodChange: (value: string) => void
  notificationFrequency: string
  onFrequencyChange: (value: string) => void
}

export default function NotificationPreferences({
  notificationMethod,
  onMethodChange,
  notificationFrequency,
  onFrequencyChange,
}: NotificationPreferencesProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium text-[#2B2B2B] mb-2 block">Méthode de notification</label>
        <Select value={notificationMethod} onValueChange={onMethodChange}>
          <SelectTrigger className="border-[#D8D3CA]">
            <SelectValue placeholder="Sélectionner une méthode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="push">Notifications push uniquement</SelectItem>
            <SelectItem value="email">E-mail uniquement</SelectItem>
            <SelectItem value="both">Push et e-mail</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium text-[#2B2B2B] mb-2 block">Fréquence des notifications</label>
        <Select value={notificationFrequency} onValueChange={onFrequencyChange}>
          <SelectTrigger className="border-[#D8D3CA]">
            <SelectValue placeholder="Sélectionner une fréquence" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="realtime">Temps réel</SelectItem>
            <SelectItem value="daily">Résumé quotidien</SelectItem>
            <SelectItem value="weekly">Résumé hebdomadaire</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

