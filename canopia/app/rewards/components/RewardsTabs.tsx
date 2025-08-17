"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface RewardsTabsProps {
  activeTab: string
  onTabChange: (value: string) => void
}

export default function RewardsTabs({ activeTab, onTabChange }: RewardsTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-4 bg-[#EFEEE9]">
        <TabsTrigger value="challenges" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
          Défis
        </TabsTrigger>
        <TabsTrigger value="rewards" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
          Récompenses
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

