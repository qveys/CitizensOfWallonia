export interface UserData {
  name: string
  location: string
  joinDate: string
  points: number
  level: number
  badges: {
    id: string
    name: string
    icon: string
    description: string
  }[]
  reports: number
  contributions: number
  bio: string
}

export interface Activity {
  id: string
  title: string
  description: string
  type: string
  date: string
  status: string
  url: string
}

