interface ProfileBadgesProps {
  badges: { id: string; name: string; icon: string; description: string }[]
}

export default function ProfileBadges({ badges }: ProfileBadgesProps) {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium text-[#2B463C] mb-2">Badges</h3>
      <div className="flex space-x-3">
        {badges.map((badge) => (
          <div key={badge.id} className="flex flex-col items-center justify-center bg-[#F4F1E9] rounded-lg p-3 w-24">
            <div className="text-2xl mb-1">{badge.icon}</div>
            <div className="text-xs font-medium text-[#2B463C] text-center">{badge.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

