export interface Comment {
  id: string
  author: string
  isOfficial?: boolean
  text: string
  date: string
}

export interface ReportDetail {
  id: string
  title: string
  description: string
  type: string
  status: string
  location: string
  date: string
  hasPhoto: boolean
  updates: {
    date: string
    status: string
    message: string
  }[]
}

