"use client"

import { Bell, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold text-[#2B463C] font-montserrat">Tableau de bord</h1>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-[#5F5B52]">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#5F5B52]">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

