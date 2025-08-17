"use client"

import { Mail } from "lucide-react"
import { useEmailPageState } from "./hooks/useEmailPageState"
import EmailHeader from "./components/EmailHeader"
import EmailForm from "./components/EmailForm"
import ImportantInfo from "./components/ImportantInfo"
import VerificationDialog from "./components/VerificationDialog"
import SuccessDialog from "./components/SuccessDialog"

export default function EmailSettingsPage() {
  const {
    currentEmail,
    newEmail,
    setNewEmail,
    password,
    setPassword,
    errors,
    showSuccessDialog,
    showVerificationDialog,
    setShowVerificationDialog,
    handleSubmit,
    handleVerificationSuccess,
    handleBack,
    handleCloseSuccessDialog,
  } = useEmailPageState()

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1E9]">
      {/* Header */}
      <EmailHeader onBack={handleBack} />

      {/* Content */}
      <div className="flex-1 p-4">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <div className="flex items-center mb-4">
            <Mail className="h-5 w-5 text-[#2B463C] mr-2" />
            <h2 className="text-lg font-medium text-[#2B463C] font-montserrat">Modifier l'adresse e-mail</h2>
          </div>
          <p className="text-sm text-[#5F5B52] mb-4">
            Votre adresse e-mail actuelle est <span className="font-medium">{currentEmail}</span>
          </p>

          <EmailForm
            currentEmail={currentEmail}
            newEmail={newEmail}
            onNewEmailChange={setNewEmail}
            password={password}
            onPasswordChange={setPassword}
            errors={errors}
            onSubmit={handleSubmit}
          />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <ImportantInfo />
        </div>
      </div>

      {/* Verification Dialog */}
      <VerificationDialog
        open={showVerificationDialog}
        onOpenChange={setShowVerificationDialog}
        newEmail={newEmail}
        onVerificationSuccess={handleVerificationSuccess}
      />

      {/* Success Dialog */}
      <SuccessDialog open={showSuccessDialog} onClose={handleCloseSuccessDialog} />
    </div>
  )
}

