import { Camera, MapPin, Calendar } from "lucide-react"
import type { Report } from "../../types"
import { formatDate } from "../../utils/format-date"
import { getTypeIcon, getTypeColor } from "../utils/type-utils"

interface ReportContentProps {
  report: Report & {
    updates: { date: string; status: string; message: string }[]
  }
}

export default function ReportContent({ report }: ReportContentProps) {
  return (
    <div className="p-4">
      <div className="flex items-start mb-4">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4 ${getTypeColor(report.type)}`}
        >
          {getTypeIcon(report.type)}
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#2B463C] font-montserrat mb-1">{report.title}</h2>
          <div className="flex items-center text-sm text-[#5F5B52] mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="mr-3">{report.location}</span>
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formatDate(report.date)}</span>
          </div>
        </div>
      </div>

      <p className="text-[#2B2B2B] mb-4">{report.description}</p>

      {report.hasPhoto && (
        <div className="h-48 bg-[#EAE6DC] rounded-lg mb-4 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Camera className="h-10 w-10 text-[#A9A295]" />
          </div>
        </div>
      )}
    </div>
  )
}

