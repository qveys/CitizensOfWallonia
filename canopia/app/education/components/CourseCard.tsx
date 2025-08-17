"use client"

import { Clock, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Image from "next/image"
import type { Course, Category } from "../hooks/useEducationPageState"

interface CourseCardProps {
  course: Course
  categories: Category[]
  onClick: () => void
  onEnroll: () => void
}

export default function CourseCard({ course, categories, onClick, onEnroll }: CourseCardProps) {
  const category = categories.find((c) => c.id === course.category)

  const getLevelLabel = (level: string) => {
    switch (level) {
      case "beginner":
        return "Débutant"
      case "intermediate":
        return "Intermédiaire"
      case "advanced":
        return "Avancé"
      default:
        return "Débutant"
    }
  }

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#D8D3CA] mb-4">
      <div className="relative h-40 w-full">
        <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
        {category && (
          <div className="absolute top-0 left-0 h-full w-1" style={{ backgroundColor: category.color }}></div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-[#2B463C] mb-2 cursor-pointer" onClick={onClick}>
          {course.title}
        </h3>

        <p className="text-sm text-[#5F5B52] line-clamp-2 mb-3">{course.description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          <div className="flex items-center text-xs bg-[#F4F1E9] px-2 py-1 rounded-full">
            <Clock className="h-3 w-3 mr-1 text-[#5F5B52]" />
            <span>{formatDuration(course.duration)}</span>
          </div>

          <div className="flex items-center text-xs bg-[#F4F1E9] px-2 py-1 rounded-full">
            <BarChart className="h-3 w-3 mr-1 text-[#5F5B52]" />
            <span>{getLevelLabel(course.level)}</span>
          </div>

          {category && (
            <Badge variant="outline" className="bg-[#F4F1E9] text-[#5F5B52] border-[#D8D3CA]">
              {category.icon} {category.name}
            </Badge>
          )}
        </div>

        {course.isEnrolled && (
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span>Progression</span>
              <span>{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="text-xs text-[#5F5B52]">Par {course.author}</div>

          <Button
            className={cn(
              "text-white",
              course.isEnrolled ? "bg-[#509555] hover:bg-[#509555]/90" : "bg-[#688F4E] hover:bg-[#82A768]",
            )}
            onClick={course.isEnrolled ? onClick : onEnroll}
          >
            {course.isEnrolled ? "Continuer" : "S'inscrire"}
          </Button>
        </div>
      </div>
    </div>
  )
}

