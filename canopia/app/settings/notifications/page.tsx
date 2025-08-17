"use client"

import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"
import { useNotificationsPageState } from "./hooks/useNotificationsPageState"
import NotificationsHeader from "./components/NotificationsHeader"
import NotificationPreferences from "./components/NotificationPreferences"
import NotificationTypesList from "./components/NotificationTypesList"
import QuietHoursSection from "./components/QuietHoursSection"

export default function NotificationSettingsPage() {
  const {
    notificationSettings,
    updateSetting,
    notificationMethod,
    setNotificationMethod,
    notificationFrequency,
    setNotificationFrequency,
    handleBack,
    handleNavigate,
    handleSavePreferences,
  } = useNotificationsPageState()

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1E9]">
      {/* Header */}
      <NotificationsHeader onBack={handleBack} />

      {/* Content */}
      <div className="flex-1 p-4 space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center mb-4">
            <Bell className="h-5 w-5 text-[#2B463C] mr-2" />
            <h2 className="text-lg font-medium text-[#2B463C] font-montserrat">Préférences de notification</h2>
          </div>

          <NotificationPreferences
            notificationMethod={notificationMethod}
            onMethodChange={setNotificationMethod}
            notificationFrequency={notificationFrequency}
            onFrequencyChange={setNotificationFrequency}
          />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-medium text-[#2B463C] font-montserrat mb-4">Types de notifications</h2>
          <NotificationTypesList settings={notificationSettings} onUpdateSetting={updateSetting} />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <QuietHoursSection onNavigate={handleNavigate} />
        </div>

        <Button className="w-full bg-[#688F4E] hover:bg-[#82A768] text-white" onClick={handleSavePreferences}>
          Enregistrer les préférences
        </Button>
      </div>
    </div>
  )
}

