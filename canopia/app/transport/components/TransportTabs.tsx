"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TransportTabsProps {
  activeTab: string
  onTabChange: (value: string) => void
}

export default function TransportTabs({ activeTab, onTabChange }: TransportTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-4 bg-[#EFEEE9]">
        <TabsTrigger value="routes" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
          Itinéraires
        </TabsTrigger>
        <TabsTrigger value="stats" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
          Statistiques
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

