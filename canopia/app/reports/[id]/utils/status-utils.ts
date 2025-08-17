import { AlertTriangle, CheckCircle, Clock, XCircle } from "lucide-react"

export function getStatusIcon(status: string) {
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

export function getStatusColor(status: string) {
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

export function getStatusText(status: string) {
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

