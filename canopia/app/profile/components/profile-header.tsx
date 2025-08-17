"use client"

import { Edit, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatDate } from "../utils/format-date"
import type { UserData } from "../types"

interface ProfileHeaderProps {
  userData: UserData
  onEdit: () => void
}

export default function ProfileHeader({ userData, onEdit }: ProfileHeaderProps) {
  return (
    <div className="bg-[#2B463C] text-white p-6 pb-16 relative">
      <h1 className="text-xl font-semibold font-montserrat mb-4">Mon Profil</h1>

      <div className="flex items-center">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-[#688F4E] flex items-center justify-center text-2xl font-bold">
            {userData.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
            <Camera className="h-4 w-4 text-[#2B463C]" />
          </button>
        </div>

        <div className="ml-4">
          <h2 className="text-lg font-medium font-montserrat">{userData.name}</h2>
          <p className="text-sm text-[#B1D182] mt-1">Membre depuis {formatDate(userData.joinDate)}</p>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-6 right-4 text-white hover:text-[#B1D182] hover:bg-transparent"
          onClick={onEdit}
        >
          <Edit className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

