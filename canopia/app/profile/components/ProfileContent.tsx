"use client"

import ProfileBadges from "./profile-badges"
import ProfileStats from "./profile-stats"
import ProfileActivity from "./profile-activity"
import ProfileSettings from "./profile-settings"
import type { UserData, Activity } from "../types"

interface ProfileContentProps {
  userData: UserData
  recentActivity: Activity[]
  onViewActivity: () => void
  onNavigate: (path: string) => void
}

export default function ProfileContent({ userData, recentActivity, onViewActivity, onNavigate }: ProfileContentProps) {
  return (
    <div className="flex-1 -mt-10 pb-20 overflow-auto">
      <div className="bg-white rounded-t-xl shadow-md p-4">
        <p className="text-[#5F5B52]">{userData.bio}</p>

        {/* Badges */}
        <ProfileBadges badges={userData.badges} />

        {/* Stats */}
        <ProfileStats userData={userData} />

        {/* Recent Activity */}
        <ProfileActivity recentActivity={recentActivity} onViewAll={onViewActivity} />

        {/* Settings */}
        <ProfileSettings onNavigate={onNavigate} />
      </div>
    </div>
  )
}

