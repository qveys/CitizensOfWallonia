"use client"

import { Button } from "@/components/ui/button"
import { Bell, Plus } from "lucide-react"

interface EventsHeaderProps {
  onCreateEvent: () => void
}

export default function EventsHeader({ onCreateEvent }: EventsHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white p-4 border-b border-[#D8D3CA]">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-[#2B463C] font-montserrat">Événements</h1>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" className="text-[#5F5B52]">
            <Bell className="h-5 w-5" />
          </Button>
          <Button className="bg-[#688F4E] hover:bg-[#82A768] text-white" onClick={onCreateEvent}>
            <Plus className="h-4 w-4 mr-1" />
            Créer
          </Button>
        </div>
      </div>
    </header>
  )
}

