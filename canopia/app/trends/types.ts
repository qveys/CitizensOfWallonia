export interface MetricSummary {
  value: number
  change: number
  trend: string
  status: string
}

export interface MetricData {
  date: string
  value: number
}

export interface ZoneComparison {
  name: string
  air: number
  temperature: number
  energy: number
  water: number
}

export interface Insight {
  id: string
  title: string
  description: string
  type
}

