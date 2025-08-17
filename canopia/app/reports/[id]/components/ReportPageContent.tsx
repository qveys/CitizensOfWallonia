"use client"

import { cn } from "@/lib/utils"
import { getStatusColor, getStatusIcon, getStatusText } from "../utils/status-utils"
import { formatDate } from "../../utils/format-date"
import ReportHeader from "./report-header"
import ReportContent from "./report-content"
import ReportTimeline from "./report-timeline"
import ReportComments from "./report-comments"
import type { Comment, ReportDetail } from "../types"

interface ReportPageContentProps {
  report: ReportDetail
  comments: Comment[]
  comment: string
  onCommentChange: (value: string) => void
  onAddComment: () => void
  onBack: () => void
}

export default function ReportPageContent({
  report,
  comments,
  comment,
  onCommentChange,
  onAddComment,
  onBack,
}: ReportPageContentProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1E9]">
      {/* Header */}
      <ReportHeader onBack={onBack} />

      {/* Status Banner */}
      <div className={cn("px-4 py-3 text-white flex items-center justify-between", getStatusColor(report.status))}>
        <div className="flex items-center">
          {getStatusIcon(report.status)}
          <span className="ml-2 font-medium">{getStatusText(report.status)}</span>
        </div>
        <span className="text-sm">Mis à jour le {formatDate(report.updates[report.updates.length - 1].date)}</span>
      </div>

      {/* Report Content */}
      <ReportContent report={report} />

      {/* Timeline */}
      <ReportTimeline updates={report.updates} />

      {/* Comments */}
      <ReportComments
        comments={comments}
        newComment={comment}
        onCommentChange={onCommentChange}
        onAddComment={onAddComment}
      />
    </div>
  )
}

