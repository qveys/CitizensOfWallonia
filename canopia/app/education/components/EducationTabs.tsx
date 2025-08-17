"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface EducationTabsProps {
  activeTab: string
  onTabChange: (value: string) => void
}

export default function EducationTabs({ activeTab, onTabChange }: EducationTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-4 bg-[#EFEEE9]">
        <TabsTrigger value="courses" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
          Cours
        </TabsTrigger>
        <TabsTrigger value="resources" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
          Ressources
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

