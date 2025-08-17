"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useProfileData } from "./use-profile-data"

export function useProfilePageState() {
  const router = useRouter()
  const { userData, recentActivity } = useProfileData()
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [profileForm, setProfileForm] = useState({
    name: userData.name,
    email: "thomas.dubois@example.com",
    bio: userData.bio,
  })

  const handleSaveProfile = () => {
    // In a real app, this would save to a backend
    setShowEditProfile(false)
  }

  const handleNavigate = (path: string) => router.push(path)

  return {
    userData,
    recentActivity,
    showEditProfile,
    setShowEditProfile,
    profileForm,
    setProfileForm,
    handleSaveProfile,
    handleNavigate,
  }
}

