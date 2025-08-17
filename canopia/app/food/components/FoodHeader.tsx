"use client"

import { Button } from "@/components/ui/button"
import { Bell, Settings } from "lucide-react"

interface FoodHeaderProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function FoodHeader({ activeTab, onTabChange }: FoodHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-[#688F4E] text-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold font-montserrat">Alimentation Durable</h1>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-[#5A7A43]">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-[#5A7A43]">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

