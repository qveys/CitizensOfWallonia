"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function usePrivacySettingsPageState() {
  const router = useRouter()
  const [locationTracking, setLocationTracking] = useState(true)
  const [preciseLocation, setPreciseLocation] = useState(true)
  const [dataSharing, setDataSharing] = useState(false)
  const [analyticsTracking, setAnalyticsTracking] = useState(true)
  const [profileVisibility, setProfileVisibility] = useState("friends")
  const [activityVisibility, setActivityVisibility] = useState("public")
  const [showLocationDialog, setShowLocationDialog] = useState(false)

  const handleLocationChange = (value: boolean) => {
    if (locationTracking && !value) {
      // If turning off location tracking, show confirmation dialog
      setShowLocationDialog(true)
    } else {
      setLocationTracking(value)
    }
  }

  const handleDisableLocation = () => {
    setLocationTracking(false)
    setShowLocationDialog(false)
  }

  const handleBack = () => router.back()
  const handleNavigate = (path: string) => router.push(path)

  return {
    locationTracking,
    preciseLocation,
    setPreciseLocation,
    dataSharing,
    setDataSharing,
    analyticsTracking,
    setAnalyticsTracking,
    profileVisibility,
    setProfileVisibility,
    activityVisibility,
    setActivityVisibility,
    showLocationDialog,
    setShowLocationDialog,
    handleLocationChange,
    handleDisableLocation,
    handleBack,
    handleNavigate,
  }
}

