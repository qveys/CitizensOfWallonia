import { AlertTriangle, Droplets, Trash2, Wind } from "lucide-react"

export function getTypeIcon(type: string) {
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

export function getTypeColor(type: string) {
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

