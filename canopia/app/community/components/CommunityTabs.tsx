"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CommunityTabsProps {
  activeTab: string
  onTabChange: (value: string) => void
}

export default function CommunityTabs({ activeTab, onTabChange }: CommunityTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-6 bg-[#EFEEE9]">
        <TabsTrigger value="all" className="data-[state=active]:bg-white">
          Tous
        </TabsTrigger>
        <TabsTrigger value="popular" className="data-[state=active]:bg-white">
          Populaires
        </TabsTrigger>
        <TabsTrigger value="my" className="data-[state=active]:bg-white">
          Mes favoris
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

