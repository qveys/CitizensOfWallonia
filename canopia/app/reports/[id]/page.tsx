"use client"

import { useReportDetailsPageState } from "./hooks/useReportDetailsPageState"
import ReportLoadingState from "./components/ReportLoadingState"
import ReportErrorState from "./components/ReportErrorState"
import ReportPageContent from "./components/ReportPageContent"

export default function ReportDetailsPage({ params }: { params: { id: string } }) {
  const { report, comments, isLoading, comment, setComment, handleAddComment, handleBack, handleReturnToReports } =
    useReportDetailsPageState(params.id)

  if (isLoading) {
    return <ReportLoadingState />
  }

  if (!report) {
    return <ReportErrorState onReturnToReports={handleReturnToReports} />
  }

  return (
    <ReportPageContent
      report={report}
      comments={comments}
      comment={comment}
      onCommentChange={setComment}
      onAddComment={handleAddComment}
      onBack={handleBack}
    />
  )
}

