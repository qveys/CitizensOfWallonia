"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface FoodTabsProps {
  activeTab: string
  onTabChange: (value: string) => void
}

export default function FoodTabs({ activeTab, onTabChange }: FoodTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid grid-cols-4 mb-4">
        <TabsTrigger value="seasonal" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
          Saisonnier
        </TabsTrigger>
        <TabsTrigger value="local" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
          Local
        </TabsTrigger>
        <TabsTrigger value="recipes" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
          Recettes
        </TabsTrigger>
        <TabsTrigger value="gardening" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
          Jardinage
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

