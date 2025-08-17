"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function useEmailPageState() {
  const router = useRouter()
  const [currentEmail, setCurrentEmail] = useState("thomas.dubois@example.com")
  const [newEmail, setNewEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({
    newEmail: false,
    password: false,
  })
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [showVerificationDialog, setShowVerificationDialog] = useState(false)

  const validateForm = () => {
    const emailRegex = /^[^\s@]+ {2}= useState(false)

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const newErrors = {
      newEmail: !emailRegex.test(newEmail),
      password: password.length < 6,
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some(Boolean)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // In a real app, this would call an API to change the email
      setShowVerificationDialog(true)
    }
  }

  const handleVerificationSuccess = () => {
    setShowVerificationDialog(false)
    setShowSuccessDialog(true)
  }

  const handleBack = () => router.back()
  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false)
    router.push("/settings")
  }

  return {
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
  }
}

