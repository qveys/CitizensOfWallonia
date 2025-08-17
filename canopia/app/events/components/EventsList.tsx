"use client"

import { AlertTriangle } from "lucide-react"
import EventCard from "./EventCard"
import type { Event } from "../hooks/useEventsPageState"

interface EventsListProps {
  events: Event[]
  isLoading: boolean
  searchQuery: string
  onEventClick: (eventId: string) => void
}

export default function EventsList({ events, isLoading, searchQuery, onEventClick }: EventsListProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-12 h-12 border-4 border-[#688F4E] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-[#4D4D4D] font-roboto">Chargement des événements...</p>
      </div>
    )
  }

  if (events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-[#F4F1E9] flex items-center justify-center mb-4">
          <AlertTriangle className="h-8 w-8 text-[#A9A295]" />
        </div>
        <h3 className="text-lg font-medium text-[#2B463C] mb-2">Aucun événement trouvé</h3>
        <p className="text-[#5F5B52] max-w-md">
          {searchQuery
            ? "Aucun résultat ne correspond à votre recherche. Essayez d'autres termes."
            : "Il n'y a pas d'événements disponibles pour le moment."}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} onClick={() => onEventClick(event.id)} />
      ))}
    </div>
  )
}

