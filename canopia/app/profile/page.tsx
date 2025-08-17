"use client"

import { useProfilePageState } from "./hooks/useProfilePageState"
import ProfileHeader from "./components/profile-header"
import ProfileContent from "./components/ProfileContent"
import ProfileEditDialog from "./components/profile-edit-dialog"
import BottomNavigation from "@/components/bottom-navigation"

export default function ProfilePage() {
  const {
    userData,
    recentActivity,
    showEditProfile,
    setShowEditProfile,
    profileForm,
    setProfileForm,
    handleSaveProfile,
    handleNavigate,
  } = useProfilePageState()

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1E9]">
      {/* Profile Header */}
      <ProfileHeader userData={userData} onEdit={() => setShowEditProfile(true)} />

      {/* Profile Content */}
      <ProfileContent
        userData={userData}
        recentActivity={recentActivity}
        onViewActivity={() => handleNavigate("/profile/activity")}
        onNavigate={handleNavigate}
      />

      {/* Edit Profile Dialog */}
      <ProfileEditDialog
        open={showEditProfile}
        onOpenChange={setShowEditProfile}
        profileForm={profileForm}
        setProfileForm={setProfileForm}
        onSave={handleSaveProfile}
      />

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNavigation activeTab="profile" />
      </div>
    </div>
  )
}

