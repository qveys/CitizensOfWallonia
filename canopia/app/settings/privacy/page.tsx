"use client"

import { Button } from "@/components/ui/button"
import { usePrivacySettingsPageState } from "./hooks/usePrivacySettingsPageState"
import PrivacyHeader from "./components/PrivacyHeader"
import LocationSection from "./components/LocationSection"
import DataAnalyticsSection from "./components/DataAnalyticsSection"
import VisibilitySection from "./components/VisibilitySection"
import AdditionalSections from "./components/AdditionalSections"
import LocationWarningDialog from "./components/LocationWarningDialog"

export default function PrivacySettingsPage() {
  const {
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
  } = usePrivacySettingsPageState()

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1E9]">
      {/* Header */}
      <PrivacyHeader onBack={handleBack} />

      {/* Content */}
      <div className="flex-1 p-4 space-y-6">
        <LocationSection
          locationTracking={locationTracking}
          onLocationChange={handleLocationChange}
          preciseLocation={preciseLocation}
          onPreciseLocationChange={setPreciseLocation}
        />

        <DataAnalyticsSection
          dataSharing={dataSharing}
          onDataSharingChange={setDataSharing}
          analyticsTracking={analyticsTracking}
          onAnalyticsTrackingChange={setAnalyticsTracking}
        />

        <VisibilitySection
          profileVisibility={profileVisibility}
          onProfileVisibilityChange={setProfileVisibility}
          activityVisibility={activityVisibility}
          onActivityVisibilityChange={setActivityVisibility}
        />

        <AdditionalSections onNavigate={handleNavigate} />

        <Button className="w-full bg-[#688F4E] hover:bg-[#82A768] text-white">Enregistrer les préférences</Button>
      </div>

      {/* Location Warning Dialog */}
      <LocationWarningDialog
        open={showLocationDialog}
        onOpenChange={setShowLocationDialog}
        onDisableLocation={handleDisableLocation}
      />
    </div>
  )
}

