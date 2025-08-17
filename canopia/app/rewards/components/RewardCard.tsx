"use client"

import { Award, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import type { Reward } from "../hooks/useRewardsPageState"

interface RewardCardProps {
  reward: Reward
  userPoints: number
  onClick: () => void
  onRedeem: () => void
}

export default function RewardCard({ reward, userPoints, onClick, onRedeem }: RewardCardProps) {
  const canRedeem = userPoints >= reward.points && !reward.isRedeemed && reward.available > 0

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#D8D3CA] mb-4">
      <div className="relative h-40 w-full">
        <Image src={reward.image || "/placeholder.svg"} alt={reward.title} fill className="object-cover" />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-[#2B463C] cursor-pointer" onClick={onClick}>
            {reward.title}
          </h3>
          <div className="flex items-center bg-[#F4F1E9] px-2 py-1 rounded-full">
            <Award className="h-4 w-4 text-[#DFA23C] mr-1" />
            <span className="text-sm font-medium">{reward.points} pts</span>
          </div>
        </div>

        <p className="text-sm text-[#5F5B52] line-clamp-2 mb-3">{reward.description}</p>

        <div className="flex items-center text-xs text-[#5F5B52] mb-2">
          <Store className="h-3 w-3 mr-1" />
          <span>Offert par {reward.provider}</span>
        </div>

        <div className="flex items-center text-xs text-[#5F5B52] mb-3">
          <span>{reward.available} disponibles</span>
        </div>

        <Button
          className={cn(
            "w-full",
            reward.isRedeemed
              ? "bg-[#509555] hover:bg-[#509555]/90 text-white"
              : canRedeem
                ? "bg-[#688F4E] hover:bg-[#82A768] text-white"
                : "bg-[#D8D3CA] text-[#5F5B52] cursor-not-allowed",
          )}
          onClick={reward.isRedeemed ? onClick : canRedeem ? onRedeem : undefined}
          disabled={!canRedeem && !reward.isRedeemed}
        >
          {reward.isRedeemed
            ? "Voir mon code"
            : canRedeem
              ? "Échanger"
              : userPoints < reward.points
                ? `Il vous manque ${reward.points - userPoints} points`
                : "Indisponible"}
        </Button>
      </div>
    </div>
  )
}

