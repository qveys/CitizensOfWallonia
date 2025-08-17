"use client"

import { Award } from "lucide-react"

interface RewardsHeaderProps {
  userPoints: number
}

export default function RewardsHeader({ userPoints }: RewardsHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-[#2B463C] text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold font-montserrat">Récompenses</h1>
        <div className="flex items-center bg-[#3A5A4E] px-3 py-1 rounded-full">
          <Award className="h-5 w-5 mr-2 text-[#B1D182]" />
          <span className="font-medium">{userPoints} points</span>
        </div>
      </div>
    </header>
  )
}

