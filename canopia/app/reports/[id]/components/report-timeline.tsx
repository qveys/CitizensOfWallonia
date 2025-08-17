import { getStatusColor, getStatusIcon } from "../utils/status-utils"
import { formatDate } from "../../utils/format-date"

interface TimelineUpdate {
  date: string
  status: string
  message: string
}

interface ReportTimelineProps {
  updates: TimelineUpdate[]
}

export default function ReportTimeline({ updates }: ReportTimelineProps) {
  return (
    <div className="px-4 py-2">
      <h3 className="text-lg font-semibold text-[#2B463C] font-montserrat mb-3">Suivi</h3>

      <div className="relative pl-6 border-l-2 border-[#D8D3CA] space-y-6 ml-2">
        {updates.map((update, index) => (
          <div key={index} className="relative">
            <div
              className={`absolute -left-[17px] w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(update.status)}`}
            >
              {getStatusIcon(update.status)}
            </div>
            <div className="bg-white rounded-lg shadow-sm p-3">
              <div className="flex justify-between items-start">
                <span className="font-medium text-[#2B2B2B]">{getStatusText(update.status)}</span>
                <span className="text-xs text-[#5F5B52]">{formatDate(update.date)}</span>
              </div>
              <p className="text-sm text-[#5F5B52] mt-1">{update.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Import missing function
import { getStatusText } from "../utils/status-utils"

