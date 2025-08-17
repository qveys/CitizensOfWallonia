"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users } from "lucide-react"

interface VisibilitySectionProps {
  profileVisibility: string
  onProfileVisibilityChange: (value: string) => void
  activityVisibility: string
  onActivityVisibilityChange: (value: string) => void
}

export default function VisibilitySection({
  profileVisibility,
  onProfileVisibilityChange,
  activityVisibility,
  onActivityVisibilityChange,
}: VisibilitySectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center mb-4">
        <Users className="h-5 w-5 text-[#2B463C] mr-2" />
        <h2 className="text-lg font-medium text-[#2B463C] font-montserrat">Visibilité</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-[#2B2B2B] mb-2 block">Qui peut voir mon profil</label>
          <Select value={profileVisibility} onValueChange={onProfileVisibilityChange}>
            <SelectTrigger className="border-[#D8D3CA]">
              <SelectValue placeholder="Sélectionner une option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">Tout le monde</SelectItem>
              <SelectItem value="friends">Amis uniquement</SelectItem>
              <SelectItem value="private">Personne</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium text-[#2B2B2B] mb-2 block">Qui peut voir mon activité</label>
          <Select value={activityVisibility} onValueChange={onActivityVisibilityChange}>
            <SelectTrigger className="border-[#D8D3CA]">
              <SelectValue placeholder="Sélectionner une option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">Tout le monde</SelectItem>
              <SelectItem value="friends">Amis uniquement</SelectItem>
              <SelectItem value="private">Personne</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

