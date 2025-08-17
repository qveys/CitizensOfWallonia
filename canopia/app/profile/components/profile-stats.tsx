import type { UserData } from "../types"

interface ProfileStatsProps {
  userData: UserData
}

export default function ProfileStats({ userData }: ProfileStatsProps) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3">
      <div className="bg-[#F4F1E9] rounded-lg p-3">
        <div className="text-xs text-[#5F5B52] mb-1">Signalements</div>
        <div className="text-xl font-bold text-[#2B463C]">{userData.reports}</div>
      </div>
      <div className="bg-[#F4F1E9] rounded-lg p-3">
        <div className="text-xs text-[#5F5B52] mb-1">Contributions</div>
        <div className="text-xl font-bold text-[#2B463C]">{userData.contributions}</div>
      </div>
    </div>
  )
}

