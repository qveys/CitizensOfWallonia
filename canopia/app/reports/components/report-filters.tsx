"use client"

import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

interface ReportFiltersProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  filter: string
  onFilterChange: (value: string) => void
}

export default function ReportFilters({ searchQuery, onSearchChange, filter, onFilterChange }: ReportFiltersProps) {
  return (
    <div className="px-4 pb-4">
      <div className="relative mb-3">
        <Input
          placeholder="Rechercher un signalement..."
          className="pl-10 pr-4 py-2 bg-white border-[#D8D3CA] rounded-lg text-[#2B2B2B]"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5F5B52] w-5 h-5" />
      </div>

      <Tabs defaultValue="all" value={filter} onValueChange={onFilterChange}>
        <TabsList className="bg-[#F4F1E9] w-full justify-start overflow-x-auto">
          <TabsTrigger value="all" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
            Tous
          </TabsTrigger>
          <TabsTrigger value="submitted" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
            Soumis
          </TabsTrigger>
          <TabsTrigger value="in-progress" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
            En cours
          </TabsTrigger>
          <TabsTrigger value="resolved" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
            Résolus
          </TabsTrigger>
          <TabsTrigger value="rejected" className="data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
            Rejetés
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}

