"use client"

import { AlertTriangle } from "lucide-react"
import CourseCard from "./CourseCard"
import ResourceCard from "./ResourceCard"
import type { Course, Resource, Category } from "../hooks/useEducationPageState"

interface EducationListProps {
  items: Course[] | Resource[]
  categories: Category[]
  activeTab: string
  isLoading: boolean
  searchQuery: string
  onCourseClick: (courseId: string) => void
  onResourceClick: (resourceUrl: string) => void
  onEnrollCourse: (courseId: string) => void
  onSaveResource: (resourceId: string) => void
}

export default function EducationList({
  items,
  categories,
  activeTab,
  isLoading,
  searchQuery,
  onCourseClick,
  onResourceClick,
  onEnrollCourse,
  onSaveResource,
}: EducationListProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-12 h-12 border-4 border-[#688F4E] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-[#4D4D4D] font-roboto">Chargement...</p>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-[#F4F1E9] flex items-center justify-center mb-4">
          <AlertTriangle className="h-8 w-8 text-[#A9A295]" />
        </div>
        <h3 className="text-lg font-medium text-[#2B463C] mb-2">
          {activeTab === "courses" ? "Aucun cours trouvé" : "Aucune ressource trouvée"}
        </h3>
        <p className="text-[#5F5B52] max-w-md">
          {searchQuery
            ? "Aucun résultat ne correspond à votre recherche. Essayez d'autres termes."
            : activeTab === "courses"
              ? "Il n'y a pas de cours disponibles pour le moment."
              : "Il n'y a pas de ressources disponibles pour le moment."}
        </p>
      </div>
    )
  }

  return (
    <div>
      {activeTab === "courses"
        ? (items as Course[]).map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              categories={categories}
              onClick={() => onCourseClick(course.id)}
              onEnroll={() => onEnrollCourse(course.id)}
            />
          ))
        : (items as Resource[]).map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              categories={categories}
              onClick={() => onResourceClick(resource.url)}
              onSave={() => onSaveResource(resource.id)}
            />
          ))}
    </div>
  )
}

