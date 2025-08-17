import { Wind, Thermometer, Zap, Droplets } from "lucide-react"
import type { ZoneData } from "../types"

export function useZoneData(id: string): ZoneData {
  // Mock data for the zone
  const zoneData: ZoneData = {
    id: id,
    name: "Centre-Ville",
    score: 68,
    metrics: [
      {
        id: "air",
        name: "Qualité de l'air",
        value: 65,
        unit: "/100",
        icon: Wind,
        status: "medium",
        color: "#82A768",
      },
      {
        id: "temp",
        name: "Température",
        value: 28.5,
        unit: "°C",
        icon: Thermometer,
        status: "warning",
        color: "#DFA23C",
      },
      {
        id: "energy",
        name: "Énergie",
        value: 420,
        unit: "kWh",
        icon: Zap,
        status: "bad",
        color: "#D68C45",
      },
      {
        id: "water",
        name: "Eau",
        value: 85,
        unit: "/100",
        icon: Droplets,
        status: "good",
        color: "#509555",
      },
    ],
    trends: {
      air: [
        { time: "00:00", value: 70 },
        { time: "04:00", value: 75 },
        { time: "08:00", value: 60 },
        { time: "12:00", value: 55 },
        { time: "16:00", value: 50 },
        { time: "20:00", value: 65 },
        { time: "24:00", value: 70 },
      ],
      temperature: [
        { time: "00:00", value: 22 },
        { time: "04:00", value: 20 },
        { time: "08:00", value: 23 },
        { time: "12:00", value: 27 },
        { time: "16:00", value: 29 },
        { time: "20:00", value: 26 },
        { time: "24:00", value: 24 },
      ],
      energy: [
        { time: "00:00", value: 320 },
        { time: "04:00", value: 280 },
        { time: "08:00", value: 350 },
        { time: "12:00", value: 480 },
        { time: "16:00", value: 520 },
        { time: "20:00", value: 450 },
        { time: "24:00", value: 380 },
      ],
    },
    recommendations: [
      {
        id: "rec1",
        title: "Évitez les activités extérieures intenses",
        description:
          "La qualité de l'air est moyenne aujourd'hui. Limitez les activités physiques prolongées en extérieur.",
        type: "health",
        priority: "medium",
      },
      {
        id: "rec2",
        title: "Hydratez-vous régulièrement",
        description: "Les températures sont élevées. Pensez à boire au moins 2L d'eau aujourd'hui.",
        type: "health",
        priority: "high",
      },
      {
        id: "rec3",
        title: "Réduisez votre consommation énergétique",
        description: "La consommation du quartier est élevée. Éteignez les appareils en veille.",
        type: "energy",
        priority: "medium",
      },
    ],
    forecasts: {
      air: [
        { day: "Aujourd'hui", value: 65, trend: "stable" },
        { day: "Demain", value: 70, trend: "improving" },
        { day: "+2 jours", value: 75, trend: "improving" },
      ],
      temperature: [
        { day: "Aujourd'hui", value: 28.5, trend: "stable" },
        { day: "Demain", value: 30, trend: "worsening" },
        { day: "+2 jours", value: 27, trend: "improving" },
      ],
      energy: [
        { day: "Aujourd'hui", value: 420, trend: "stable" },
        { day: "Demain", value: 400, trend: "improving" },
        { day: "+2 jours", value: 380, trend: "improving" },
      ],
    },
    updates: [
      {
        date: "2023-06-15T10:30:00",
        status: "submitted",
        message: "Signalement créé",
      },
      {
        date: "2023-06-16T14:45:00",
        status: "in-progress",
        message: "Prise en charge par les services de la ville",
      },
    ],
  }

  return zoneData
}

