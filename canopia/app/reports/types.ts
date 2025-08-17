export type ReportType = "pollution" | "waste" | "energy" | "water" | "other"
export type ReportStatus = "submitted" | "in-progress" | "resolved" | "rejected"

export interface Report {
  id: string
  title: string
  description: string
  type: ReportType
  status: ReportStatus
  location: string
  date: string
  hasPhoto: boolean
}

