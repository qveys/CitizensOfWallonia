"use client"

import { ChevronRight, Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/app/profile/utils/format-date"

interface UpcomingEvent {
  id: string
  title: string
  date: string
  location: string
  participants: number
}

interface UpcomingEventsSectionProps {
  events: UpcomingEvent[]
  onEventClick: (eventId: string) => void
  onViewAllClick: () => void
}

export default function UpcomingEventsSection({ events, onEventClick, onViewAllClick }: UpcomingEventsSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-medium text-[#2B463C] font-montserrat">Événements à venir</h2>
        <Button variant="ghost" size="sm" className="text-[#688F4E] p-0 h-auto" onClick={onViewAllClick}>
          Voir tout
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="border border-[#D8D3CA] rounded-lg p-3 cursor-pointer"
            onClick={() => onEventClick(event.id)}
          >
            <h3 className="text-base font-medium text-[#2B463C] mb-2">{event.title}</h3>
            <div className="flex items-center text-xs text-[#5F5B52] mb-1">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center text-xs text-[#5F5B52] mb-2">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-xs text-[#688F4E]">
              <Users className="h-3 w-3 mr-1" />
              <span>{event.participants} participants</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

