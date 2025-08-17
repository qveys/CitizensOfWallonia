import { AlertTriangle, Trophy, Map, CheckCircle } from "lucide-react"

export function getActivityIcon(type: string) {
  switch (type) {
    case "report":
      return <AlertTriangle className="h-5 w-5" />
    case "challenge":
      return <Trophy className="h-5 w-5" />
    case "zone":
      return <Map className="h-5 w-5" />
    default:
      return <CheckCircle className="h-5 w-5" />
  }
}

export function getActivityColor(type: string) {
  switch (type) {
    case "report":
      return "bg-[#D68C45]"
    case "challenge":
      return "bg-[#DFA23C]"
    case "zone":
      return "bg-[#3C7D80]"
    default:
      return "bg-[#688F4E]"
  }
}

export function getStatusColor(status: string) {
  switch (status) {
    case "completed":
      return "text-[#509555]"
    case "in-progress":
      return "text-[#DFA23C]"
    case "pending":
      return "text-[#A9A295]"
    default:
      return "text-[#5F5B52]"
  }
}

