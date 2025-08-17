"use client"

import { ChevronRight, Heart, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatRelativeTime } from "@/app/profile/utils/format-date"
import Image from "next/image"

interface CommunityUpdate {
  id: string
  title: string
  description: string
  author: string
  date: string
  likes: number
  comments: number
  image?: string
}

interface CommunityUpdatesSectionProps {
  updates: CommunityUpdate[]
  onUpdateClick: (updateId: string) => void
  onViewAllClick: () => void
}

export default function CommunityUpdatesSection({
  updates,
  onUpdateClick,
  onViewAllClick,
}: CommunityUpdatesSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-medium text-[#2B463C] font-montserrat">Actualités communautaires</h2>
        <Button variant="ghost" size="sm" className="text-[#688F4E] p-0 h-auto" onClick={onViewAllClick}>
          Voir tout
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      <div className="space-y-4">
        {updates.map((update) => (
          <div
            key={update.id}
            className="border border-[#D8D3CA] rounded-lg overflow-hidden cursor-pointer"
            onClick={() => onUpdateClick(update.id)}
          >
            {update.image && (
              <div className="relative h-32 w-full">
                <Image src={update.image || "/placeholder.svg"} alt={update.title} fill className="object-cover" />
              </div>
            )}
            <div className="p-3">
              <h3 className="text-base font-medium text-[#2B463C] mb-1">{update.title}</h3>
              <p className="text-sm text-[#5F5B52] line-clamp-2 mb-2">{update.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xs text-[#A9A295] mr-2">{update.author}</span>
                  <span className="text-xs text-[#A9A295]">{formatRelativeTime(update.date)}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 text-[#5F5B52] mr-1" />
                    <span className="text-xs text-[#5F5B52]">{update.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 text-[#5F5B52] mr-1" />
                    <span className="text-xs text-[#5F5B52]">{update.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

