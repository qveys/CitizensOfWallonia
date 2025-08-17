"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function useNotificationsPageState() {
  const router = useRouter()
  const [notificationSettings, setNotificationSettings] = useState({
    alerts: true,
    reports: true,
    events: true,
    challenges: true,
    comments: false,
    system: true,
  })
  const [notificationMethod, setNotificationMethod] = useState("both")
  const [notificationFrequency, setNotificationFrequency] = useState("realtime")

  const updateSetting = (key: keyof typeof notificationSettings, value: boolean) => {
    setNotificationSettings({
      ...notificationSettings,
      [key]: value,
    })
  }

  const handleBack = () => router.back()
  const handleNavigate = (path: string) => router.push(path)
  const handleSavePreferences = () => {
    // In a real app, this would save the settings to a backend
    // For now, just show a success message or navigate back
    router.back()
  }

  return {
    notificationSettings,
    updateSetting,
    notificationMethod,
    setNotificationMethod,
    notificationFrequency,
    setNotificationFrequency,
    handleBack,
    handleNavigate,
    handleSavePreferences,
  }
}

