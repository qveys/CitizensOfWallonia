"use client"

import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, Search } from "lucide-react"

interface ActivityFiltersProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  filter: string
  onFilterChange: (value: string) => void
  sortBy: string
  onSortChange: (value: string) => void
}

export default function ActivityFilters({
  searchQuery,
  onSearchChange,
  filter,
  onFilterChange,
  sortBy,
  onSortChange,
}: ActivityFiltersProps) {
  return (
    <div className="px-4 pb-4">
      <div className="relative mb-3">
        <Input
          placeholder="Rechercher une activité..."
          className="pl-10 pr-4 py-2 bg-white border-[#D8D3CA] rounded-lg text-[#2B2B2B]"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5F5B52] w-5 h-5" />
      </div>

      <div className="flex items-center justify-between mb-2">
        <Tabs defaultValue="all" value={filter} onValueChange={onFilterChange}>
          <TabsList className="bg-[#F4F1E9]">
            <TabsTrigger value="all" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
              Tous
            </TabsTrigger>
            <TabsTrigger value="report" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
              Signalements
            </TabsTrigger>
            <TabsTrigger value="challenge" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
              Défis
            </TabsTrigger>
            <TabsTrigger value="zone" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
              Zones
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center">
          <Filter className="h-4 w-4 text-[#5F5B52] mr-2" />
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-[130px] h-8 text-xs border-[#D8D3CA]">
              <SelectValue placeholder="Trier par" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Plus récents</SelectItem>
              <SelectItem value="oldest">Plus anciens</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

