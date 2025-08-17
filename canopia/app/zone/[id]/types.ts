import type { LucideIcon } from "lucide-react"

export interface ZoneMetric {
  id: string
  name: string
  value: number
  unit: string
  icon: LucideIcon
  status: string
  color: string
}

export interface ZoneTrends {
  air: { time: string; value: number }[]
  temperature: { time: string; value: number }[]
  energy: { time: string; value: number }[]
}

export interface ZoneRecommendation {
  id: string
  title: string
  description: string
  type: string
  priority: string
}

export interface ZoneForecast {
  day: string
  value: number
  trend: string
}

export interface ZoneForecasts {
  air: ZoneForecast[]
  temperature: ZoneForecast[]
  energy: ZoneForecast[]
}

export interface ZoneData {
  id: string
  name: string
  score: number
  metrics: ZoneMetric[]
  trends: ZoneTrends
  recommendations: ZoneRecommendation[]
  forecasts: ZoneForecasts
  updates: {
    date: string
    status: string
    message: string
  }[]
}

