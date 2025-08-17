"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function usePasswordPageState() {
  const router = useRouter()
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  })
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

  const validateForm = () => {
    const newErrors = {
      currentPassword: currentPassword.length < 6,
      newPassword: newPassword.length < 8,
      confirmPassword: newPassword !== confirmPassword,
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some(Boolean)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // In a real app, this would call an API to change the password
      setShowSuccessDialog(true)
    }
  }

  const passwordStrength = () => {
    if (newPassword.length === 0) return { strength: 0, label: "", color: "" }
    if (newPassword.length < 8) return { strength: 25, label: "Faible", color: "bg-[#C64747]" }

    let strength = 0
    if (newPassword.length >= 8) strength += 25
    if (/[A-Z]/.test(newPassword)) strength += 25
    if (/[0-9]/.test(newPassword)) strength += 25
    if (/[^A-Za-z0-9]/.test(newPassword)) strength += 25

    if (strength <= 25) return { strength, label: "Faible", color: "bg-[#C64747]" }
    if (strength <= 50) return { strength, label: "Moyen", color: "bg-[#DFA23C]" }
    if (strength <= 75) return { strength, label: "Bon", color: "bg-[#82A768]" }
    return { strength, label: "Excellent", color: "bg-[#509555]" }
  }

  const handleBack = () => router.back()
  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false)
    router.push("/settings")
  }

  return {
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
    setShowSuccessDialog,
    handleSubmit,
    passwordStrength,
    handleBack,
    handleCloseSuccessDialog,
  }
}

