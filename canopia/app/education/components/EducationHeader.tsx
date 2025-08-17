"use client"

import { BookOpen } from "lucide-react"

export default function EducationHeader() {
  return (
    <header className="sticky top-0 z-10 bg-[#2B463C] text-white p-4 shadow-md">
      <div className="flex items-center">
        <BookOpen className="h-6 w-6 mr-2" />
        <h1 className="text-xl font-semibold font-montserrat">Ressources Éducatives</h1>
      </div>
    </header>
  )
}

