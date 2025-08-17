"use client"

import { MapPin, Users, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/app/profile/utils/format-date"
import Image from "next/image"
import type { Event } from "../hooks/useEventsPageState"

interface EventCardProps {
  event: Event
  onClick: () => void
}

export default function EventCard({ event, onClick }: EventCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "cleanup":
        return "bg-[#3C7D80] hover:bg-[#3C7D80]/90"
      case "workshop":
        return "bg-[#688F4E] hover:bg-[#688F4E]/90"
      case "market":
        return "bg-[#DFA23C] hover:bg-[#DFA23C]/90"
      case "conference":
        return "bg-[#9D8BB0] hover:bg-[#9D8BB0]/90"
      default:
        return "bg-[#5F5B52] hover:bg-[#5F5B52]/90"
    }
  }

  const getCategoryName = (category: string) => {
    switch (category) {
      case "cleanup":
        return "Nettoyage"
      case "workshop":
        return "Atelier"
      case "market":
        return "Marché"
      case "conference":
        return "Conférence"
      default:
        return "Événement"
    }
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#D8D3CA]">
      <div className="relative h-32 w-full">
        <Image
          src={event.image || "/placeholder.svg?height=200&width=400"}
          alt={event.title}
          fill
          className="object-cover"
        />
        <Badge className={`absolute top-2 right-2 ${getCategoryColor(event.category)}`}>
          {getCategoryName(event.category)}
        </Badge>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-[#2B463C]">{event.title}</h3>
          <span className="text-sm text-[#688F4E] font-medium">{formatDate(event.date)}</span>
        </div>
        <p className="text-sm text-[#5F5B52] line-clamp-3 mb-3">{event.description}</p>
        <div className="flex items-center text-xs text-[#5F5B52] mb-2">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{event.location.name}</span>
        </div>
        <div className="flex items-center text-xs text-[#5F5B52] mb-4">
          <Users className="h-3 w-3 mr-1" />
          <span>
            {event.participants} participants
            {event.maxParticipants ? ` / ${event.maxParticipants} max` : ""}
          </span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <Button className="bg-[#688F4E] hover:bg-[#82A768] text-white" onClick={onClick}>
            Voir détails
          </Button>
          <Button variant="ghost" size="icon" className="text-[#5F5B52]">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

