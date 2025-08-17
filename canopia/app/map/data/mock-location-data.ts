// Import the default coordinates from heatmap.ts
import { DEFAULT_LAT, DEFAULT_LNG } from "../utils/heatmap"

// Mock data for selected location
export const mockLocationData = {
  id: "centre-ville",
  name: "Centre-Ville",
  airQuality: 65, // 0-100 scale
  temperature: 28.5, // in °C
  energyConsumption: 420, // in kWh
  details: {
    pollution: {
      pm25: 18.5,
      pm10: 32.4,
      no2: 45.2,
      o3: 68.7,
    },
    temperature: {
      current: 28.5,
      feelsLike: 30.2,
      min: 24.8,
      max: 29.3,
    },
    energy: {
      current: 420,
      average: 380,
      peak: 520,
      trend: "increasing",
    },
  },
}

// Sample locations around the default coordinates
export const sampleLocations = [
  {
    id: "centre-ville",
    name: "Centre-Ville",
    position: [DEFAULT_LAT, DEFAULT_LNG] as [number, number],
    data: { pollution: 65, temperature: 22, energy: 45, water: 60 },
  },
  {
    id: "quartier-nord",
    name: "Quartier Nord",
    position: [DEFAULT_LAT + 0.01, DEFAULT_LNG + 0.015] as [number, number],
    data: { pollution: 78, temperature: 24, energy: 32, water: 45 },
  },
  {
    id: "parc-sud",
    name: "Parc Sud",
    position: [DEFAULT_LAT - 0.008, DEFAULT_LNG + 0.01] as [number, number],
    data: { pollution: 42, temperature: 21, energy: 58, water: 75 },
  },
  {
    id: "zone-industrielle",
    name: "Zone Industrielle",
    position: [DEFAULT_LAT + 0.015, DEFAULT_LNG - 0.012] as [number, number],
    data: { pollution: 89, temperature: 26, energy: 75, water: 40 },
  },
  {
    id: "quartier-est",
    name: "Quartier Est",
    position: [DEFAULT_LAT - 0.012, DEFAULT_LNG - 0.008] as [number, number],
    data: { pollution: 56, temperature: 23, energy: 48, water: 55 },
  },
]

