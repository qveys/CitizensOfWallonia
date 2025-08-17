"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useReportDetails } from "./use-report-details"

export function useReportDetailsPageState(id: string) {
  const router = useRouter()
  const { report, comments, isLoading, addComment } = useReportDetails(id)
  const [comment, setComment] = useState("")

  const handleAddComment = () => {
    if (!comment.trim()) return
    addComment(comment)
    setComment("")
  }

  const handleBack = () => router.back()
  const handleReturnToReports = () => router.push("/reports")

  return {
    report,
    comments,
    isLoading,
    comment,
    setComment,
    handleAddComment,
    handleBack,
    handleReturnToReports,
  }
}

