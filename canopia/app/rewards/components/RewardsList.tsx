"use client"

import { AlertTriangle } from "lucide-react"
import ChallengeCard from "./ChallengeCard"
import RewardCard from "./RewardCard"
import type { Challenge, Reward } from "../hooks/useRewardsPageState"

interface RewardsListProps {
  items: Challenge[] | Reward[]
  userPoints: number
  activeTab: string
  isLoading: boolean
  searchQuery: string
  onChallengeClick: (challengeId: string) => void
  onRewardClick: (rewardId: string) => void
  onJoinChallenge: (challengeId: string) => void
  onRedeemReward: (rewardId: string) => void
}

export default function RewardsList({
  items,
  userPoints,
  activeTab,
  isLoading,
  searchQuery,
  onChallengeClick,
  onRewardClick,
  onJoinChallenge,
  onRedeemReward,
}: RewardsListProps) {
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
          {activeTab === "challenges" ? "Aucun défi trouvé" : "Aucune récompense trouvée"}
        </h3>
        <p className="text-[#5F5B52] max-w-md">
          {searchQuery
            ? "Aucun résultat ne correspond à votre recherche. Essayez d'autres termes."
            : activeTab === "challenges"
              ? "Il n'y a pas de défis disponibles pour le moment."
              : "Il n'y a pas de récompenses disponibles pour le moment."}
        </p>
      </div>
    )
  }

  return (
    <div>
      {activeTab === "challenges"
        ? (items as Challenge[]).map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              challenge={challenge}
              onClick={() => onChallengeClick(challenge.id)}
              onJoin={() => onJoinChallenge(challenge.id)}
            />
          ))
        : (items as Reward[]).map((reward) => (
            <RewardCard
              key={reward.id}
              reward={reward}
              userPoints={userPoints}
              onClick={() => onRewardClick(reward.id)}
              onRedeem={() => onRedeemReward(reward.id)}
            />
          ))}
    </div>
  )
}

