"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface EventsTabsProps {
  activeTab: string
  onTabChange: (value: string) => void
}

export default function EventsTabs({ activeTab, onTabChange }: EventsTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-6 bg-[#EFEEE9]">
        <TabsTrigger value="upcoming" className="data-[state=active]:bg-white">
          À venir
        </TabsTrigger>
        <TabsTrigger value="myevents" className="data-[state=active]:bg-white">
          Mes événements
        </TabsTrigger>
        <TabsTrigger value="past" className="data-[state=active]:bg-white">
          Passés
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

