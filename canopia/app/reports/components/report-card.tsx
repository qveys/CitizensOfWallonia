"use client"

import {
  AlertTriangle,
  Calendar,
  Camera,
  CheckCircle,
  ChevronRight,
  Clock,
  MapPin,
  Trash2,
  Wind,
  XCircle,
  Droplets,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Report } from "../types"
import { formatDate } from "../utils/format-date"

interface ReportCardProps {
  report: Report
  onClick: () => void
}

export default function ReportCard({ report, onClick }: ReportCardProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "pollution":
        return <Wind className="h-5 w-5" />
      case "waste":
        return <Trash2 className="h-5 w-5" />
      case "energy":
        return <AlertTriangle className="h-5 w-5" />
      case "water":
        return <Droplets className="h-5 w-5" />
      default:
        return <AlertTriangle className="h-5 w-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "pollution":
        return "bg-[#688F4E]"
      case "waste":
        return "bg-[#D68C45]"
      case "energy":
        return "bg-[#DFA23C]"
      case "water":
        return "bg-[#3C7D80]"
      default:
        return "bg-[#9D8BB0]"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted":
        return <Clock className="h-5 w-5" />
      case "in-progress":
        return <AlertTriangle className="h-5 w-5" />
      case "resolved":
        return <CheckCircle className="h-5 w-5" />
      case "rejected":
        return <XCircle className="h-5 w-5" />
      default:
        return <Clock className="h-5 w-5" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted":
        return "bg-[#A9A295]"
      case "in-progress":
        return "bg-[#DFA23C]"
      case "resolved":
        return "bg-[#509555]"
      case "rejected":
        return "bg-[#C64747]"
      default:
        return "bg-[#A9A295]"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "submitted":
        return "Soumis"
      case "in-progress":
        return "En cours"
      case "resolved":
        return "Résolu"
      case "rejected":
        return "Rejeté"
      default:
        return "Inconnu"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden" onClick={onClick}>
      <div className="p-4">
        <div className="flex items-start">
          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-3",
              getTypeColor(report.type),
            )}
          >
            {getTypeIcon(report.type)}
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between">
              <h3 className="text-base font-medium text-[#2B2B2B] mb-1">{report.title}</h3>
              <div
                className={cn(
                  "ml-2 px-2 py-0.5 rounded-full text-white text-xs flex items-center",
                  getStatusColor(report.status),
                )}
              >
                {getStatusIcon(report.status)}
                <span className="ml-1">{getStatusText(report.status)}</span>
              </div>
            </div>

            <p className="text-sm text-[#5F5B52] line-clamp-2 mb-2">{report.description}</p>

            <div className="flex items-center text-xs text-[#A9A295]">
              <MapPin className="h-3 w-3 mr-1" />
              <span className="mr-3">{report.location}</span>
              <Calendar className="h-3 w-3 mr-1" />
              <span>{formatDate(report.date)}</span>
            </div>
          </div>
        </div>
      </div>

      {report.hasPhoto && (
        <div className="h-32 bg-[#EAE6DC] relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Camera className="h-8 w-8 text-[#A9A295]" />
          </div>
        </div>
      )}

      <div className="px-4 py-2 bg-[#F4F1E9] flex justify-end">
        <Button variant="ghost" size="sm" className="text-[#2B463C] hover:text-[#688F4E] hover:bg-transparent p-0">
          Voir détails
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  )
}

