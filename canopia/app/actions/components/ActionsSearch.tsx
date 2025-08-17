"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

interface ActionsSearchProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  sortBy: string
  onSortChange: (value: string) => void
}

export default function ActionsSearch({ searchQuery, onSearchChange, sortBy, onSortChange }: ActionsSearchProps) {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <div className="relative flex-1">
        <Input
          placeholder="Rechercher une action..."
          className="pl-10 pr-4 py-2 bg-white border-[#D8D3CA] rounded-lg text-[#2B2B2B]"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5F5B52] w-5 h-5" />
      </div>

      <div className="flex items-center">
        <Filter className="h-4 w-4 text-[#5F5B52] mr-2" />
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-[130px] h-10 border-[#D8D3CA]">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Populaires</SelectItem>
            <SelectItem value="impact">Impact</SelectItem>
            <SelectItem value="difficulty">Facilité</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

