"use client"

import { Users, Calendar, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { formatDate } from "@/app/profile/utils/format-date"
import Image from "next/image"
import type { Challenge } from "../hooks/useRewardsPageState"

interface ChallengeCardProps {
  challenge: Challenge
  onClick: () => void
  onJoin: () => void
}

export default function ChallengeCard({ challenge, onClick, onJoin }: ChallengeCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "waste":
        return "bg-[#D68C45]"
      case "water":
        return "bg-[#3C7D80]"
      case "transport":
        return "bg-[#9D8BB0]"
      case "food":
        return "bg-[#688F4E]"
      case "energy":
        return "bg-[#DFA23C]"
      default:
        return "bg-[#5F5B52]"
    }
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#D8D3CA] mb-4">
      <div className="relative h-40 w-full">
        <Image src={challenge.image || "/placeholder.svg"} alt={challenge.title} fill className="object-cover" />
        <div className={`absolute top-0 left-0 h-full w-1 ${getCategoryColor(challenge.category)}`}></div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-[#2B463C] cursor-pointer" onClick={onClick}>
            {challenge.title}
          </h3>
          <div className="flex items-center bg-[#F4F1E9] px-2 py-1 rounded-full">
            <Trophy className="h-4 w-4 text-[#DFA23C] mr-1" />
            <span className="text-sm font-medium">{challenge.points} pts</span>
          </div>
        </div>

        <p className="text-sm text-[#5F5B52] line-clamp-2 mb-3">{challenge.description}</p>

        {challenge.deadline && (
          <div className="flex items-center text-xs text-[#5F5B52] mb-2">
            <Calendar className="h-3 w-3 mr-1" />
            <span>Jusqu'au {formatDate(challenge.deadline)}</span>
          </div>
        )}

        <div className="flex items-center text-xs text-[#5F5B52] mb-3">
          <Users className="h-3 w-3 mr-1" />
          <span>{challenge.participants} participants</span>
        </div>

        {challenge.isJoined && (
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span>Progression</span>
              <span>{challenge.progress}%</span>
            </div>
            <Progress value={challenge.progress} className="h-2" />
          </div>
        )}

        <Button
          className={
            challenge.isJoined
              ? "w-full bg-[#509555] hover:bg-[#509555]/90 text-white"
              : "w-full bg-[#688F4E] hover:bg-[#82A768] text-white"
          }
          onClick={challenge.isJoined ? onClick : onJoin}
        >
          {challenge.isJoined ? "Voir détails" : "Rejoindre le défi"}
        </Button>
      </div>
    </div>
  )
}

