"use client"

import { FileText, Video, BookOpen, BarChart2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Image from "next/image"
import type { Resource, Category } from "../hooks/useEducationPageState"

interface ResourceCardProps {
  resource: Resource
  categories: Category[]
  onClick: () => void
  onSave: () => void
}

export default function ResourceCard({ resource, categories, onClick, onSave }: ResourceCardProps) {
  const category = categories.find((c) => c.id === resource.category)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "article":
        return <FileText className="h-4 w-4" />
      case "video":
        return <Video className="h-4 w-4" />
      case "guide":
        return <BookOpen className="h-4 w-4" />
      case "infographic":
        return <BarChart2 className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "article":
        return "Article"
      case "video":
        return "Vidéo"
      case "guide":
        return "Guide"
      case "infographic":
        return "Infographie"
      default:
        return "Ressource"
    }
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#D8D3CA] mb-4">
      <div className="relative h-40 w-full">
        <Image src={resource.image || "/placeholder.svg"} alt={resource.title} fill className="object-cover" />
        {category && (
          <div className="absolute top-0 left-0 h-full w-1" style={{ backgroundColor: category.color }}></div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-[#2B463C] mb-2 cursor-pointer" onClick={onClick}>
          {resource.title}
        </h3>

        <p className="text-sm text-[#5F5B52] line-clamp-2 mb-3">{resource.description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          <div className="flex items-center text-xs bg-[#F4F1E9] px-2 py-1 rounded-full">
            {getTypeIcon(resource.type)}
            <span className="ml-1">{getTypeLabel(resource.type)}</span>
          </div>

          {category && (
            <Badge variant="outline" className="bg-[#F4F1E9] text-[#5F5B52] border-[#D8D3CA]">
              {category.icon} {category.name}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            className={cn("p-0 h-auto", resource.isSaved ? "text-[#DFA23C]" : "text-[#5F5B52]")}
            onClick={(e) => {
              e.stopPropagation()
              onSave()
            }}
          >
            <Bookmark className={cn("h-4 w-4 mr-1", resource.isSaved && "fill-[#DFA23C]")} />
            <span>{resource.isSaved ? "Enregistré" : "Enregistrer"}</span>
          </Button>

          <Button className="bg-[#688F4E] hover:bg-[#82A768] text-white" onClick={onClick}>
            Consulter
          </Button>
        </div>
      </div>
    </div>
  )
}

