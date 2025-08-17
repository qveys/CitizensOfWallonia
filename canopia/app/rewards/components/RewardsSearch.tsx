"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface RewardsSearchProps {
  searchQuery: string
  onSearchChange: (value: string) => void
}

export default function RewardsSearch({ searchQuery, onSearchChange }: RewardsSearchProps) {
  return (
    <div className="relative mb-4">
      <Input
        placeholder="Rechercher..."
        className="pl-10 pr-4 py-2 bg-white border-[#D8D3CA] rounded-lg text-[#2B2B2B]"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5F5B52] w-5 h-5" />
    </div>
  )
}

