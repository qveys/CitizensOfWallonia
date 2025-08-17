"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface ReportsHeaderProps {
  onNewReport: () => void
}

export default function ReportsHeader({ onNewReport }: ReportsHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold text-[#2B463C] font-montserrat">Signalements</h1>

        <Button className="bg-[#688F4E] hover:bg-[#82A768] text-white" onClick={onNewReport}>
          <Plus className="h-4 w-4 mr-1" />
          Nouveau
        </Button>
      </div>
    </header>
  )
}

