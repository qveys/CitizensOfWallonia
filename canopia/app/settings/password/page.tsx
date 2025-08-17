"use client"

import { Lock } from "lucide-react"
import { usePasswordPageState } from "./hooks/usePasswordPageState"
import PasswordHeader from "./components/PasswordHeader"
import PasswordForm from "./components/PasswordForm"
import SecurityTips from "./components/SecurityTips"
import SuccessDialog from "./components/SuccessDialog"

export default function PasswordSettingsPage() {
  const {
    currentPassword,
    setCurrentPassword,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    showCurrentPassword,
    setShowCurrentPassword,
    showNewPassword,
    setShowNewPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    errors,
    showSuccessDialog,
    handleSubmit,
    passwordStrength,
    handleBack,
    handleCloseSuccessDialog,
  } = usePasswordPageState()

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1E9]">
      {/* Header */}
      <PasswordHeader onBack={handleBack} />

      {/* Content */}
      <div className="flex-1 p-4">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <div className="flex items-center mb-4">
            <Lock className="h-5 w-5 text-[#2B463C] mr-2" />
            <h2 className="text-lg font-medium text-[#2B463C] font-montserrat">Sécurité du compte</h2>
          </div>
          <p className="text-sm text-[#5F5B52] mb-4">
            Choisissez un mot de passe fort et unique que vous n'utilisez pas pour d'autres comptes.
          </p>

          <PasswordForm
            currentPassword={currentPassword}
            onCurrentPasswordChange={setCurrentPassword}
            newPassword={newPassword}
            onNewPasswordChange={setNewPassword}
            confirmPassword={confirmPassword}
            onConfirmPasswordChange={setConfirmPassword}
            showCurrentPassword={showCurrentPassword}
            onToggleCurrentPassword={() => setShowCurrentPassword(!showCurrentPassword)}
            showNewPassword={showNewPassword}
            onToggleNewPassword={() => setShowNewPassword(!showNewPassword)}
            showConfirmPassword={showConfirmPassword}
            onToggleConfirmPassword={() => setShowConfirmPassword(!showConfirmPassword)}
            errors={errors}
            passwordStrengthInfo={passwordStrength()}
            onSubmit={handleSubmit}
          />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <SecurityTips />
        </div>
      </div>

      {/* Success Dialog */}
      <SuccessDialog open={showSuccessDialog} onClose={handleCloseSuccessDialog} />
    </div>
  )
}

