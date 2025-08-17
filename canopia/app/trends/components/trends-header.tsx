"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, MapPin, Wind, Thermometer, Zap, Droplets } from "lucide-react"

interface TrendsHeaderProps {
  activeMetric: string
  onMetricChange: (value: string) => void
  location: string
  onLocationChange: (value: string) => void
}

export default function TrendsHeader({ activeMetric, onMetricChange, location, onLocationChange }: TrendsHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold text-[#2B463C] font-montserrat">Tendances</h1>

        <div className="flex items-center space-x-2">
          <Select value={location} onValueChange={onLocationChange}>
            <SelectTrigger className="w-[140px] h-9 border-[#D8D3CA] text-sm">
              <MapPin className="h-4 w-4 mr-1 text-[#5F5B52]" />
              <SelectValue placeholder="Toutes les zones" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les zones</SelectItem>
              <SelectItem value="centre">Centre-Ville</SelectItem>
              <SelectItem value="nord">Quartier Nord</SelectItem>
              <SelectItem value="est">Quartier Est</SelectItem>
              <SelectItem value="sud">Quartier Sud</SelectItem>
              <SelectItem value="ouest">Quartier Ouest</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="icon" className="h-9 w-9 border-[#D8D3CA]">
            <Filter className="h-4 w-4 text-[#5F5B52]" />
          </Button>
        </div>
      </div>

      {/* Metric Selector */}
      <div className="px-4 pb-4">
        <Tabs defaultValue="air" value={activeMetric} onValueChange={onMetricChange}>
          <TabsList className="bg-[#F4F1E9] w-full">
            <TabsTrigger value="air" className="flex-1 data-[state=active]:bg-[#688F4E] data-[state=active]:text-white">
              <Wind className="h-4 w-4 mr-1" />
              Air
            </TabsTrigger>
            <TabsTrigger
              value="temperature"
              className="flex-1 data-[state=active]:bg-[#688F4E] data-[state=active]:text-white"
            >
              <Thermometer className="h-4 w-4 mr-1" />
              Température
            </TabsTrigger>
            <TabsTrigger
              value="energy"
              className="flex-1 data-[state=active]:bg-[#688F4E] data-[state=active]:text-white"
            >
              <Zap className="h-4 w-4 mr-1" />
              Énergie
            </TabsTrigger>
            <TabsTrigger
              value="water"
              className="flex-1 data-[state=active]:bg-[#688F4E] data-[state=active]:text-white"
            >
              <Droplets className="h-4 w-4 mr-1" />
              Eau
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  )
}

