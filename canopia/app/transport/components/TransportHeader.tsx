"use client"

import { Button } from "@/components/ui/button"
import { Plus, Bus } from "lucide-react"

interface TransportHeaderProps {
  onNewRoute: () => void
}

export default function TransportHeader({ onNewRoute }: TransportHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-[#2B463C] text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Bus className="h-6 w-6 mr-2" />
          <h1 className="text-xl font-semibold font-montserrat">Transport Durable</h1>
        </div>
        <Button className="bg-[#688F4E] hover:bg-[#82A768] text-white" onClick={onNewRoute}>
          <Plus className="h-4 w-4 mr-1" />
          Nouveau
        </Button>
      </div>
    </header>
  )
}

