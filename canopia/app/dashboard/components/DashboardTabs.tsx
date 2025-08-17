"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface DashboardTabsProps {
  activeTab: string
  onTabChange: (value: string) => void
}

export default function DashboardTabs({ activeTab, onTabChange }: DashboardTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid grid-cols-3 mb-4">
        <TabsTrigger value="overview" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
          Aperçu
        </TabsTrigger>
        <TabsTrigger value="activity" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
          Activité
        </TabsTrigger>
        <TabsTrigger value="community" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
          Communauté
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

