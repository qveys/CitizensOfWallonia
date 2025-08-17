// Constants for geographic calculations
const EARTH_RADIUS = 6371000 // meters

// Default coordinates (Charleroi region)
export const DEFAULT_LAT = 50.405031865168496
export const DEFAULT_LNG = 4.440409470733063

// Utility functions for geographic calculations
const degToRad = (deg: number) => (deg * Math.PI) / 180
const radToDeg = (rad: number) => (rad * 180) / Math.PI // Fixed: was using 'deg' instead of 'rad'

/**
 * Offsets a geographic point by dx and dy meters
 */
export function offsetLatLng(lat: number, lng: number, dx: number, dy: number): google.maps.LatLng | null {
  // Check if Google Maps API is available
  if (typeof window === "undefined" || !window.google || !window.google.maps) return null

  const dLat = dy / EARTH_RADIUS
  const dLng = dx / (EARTH_RADIUS * Math.cos(degToRad(lat)))

  const newLat = lat + radToDeg(dLat)
  const newLng = lng + radToDeg(dLng)

  return new window.google.maps.LatLng(newLat, newLng)
}

/**
 * Generates heatmap points around a center point
 */
export function generateHeatmapPoints(
  lat: number,
  lng: number,
  spacing: number,
  radius: number,
  intensity?: (x: number, y: number, dist: number) => number,
): google.maps.LatLng[] {
  // Check if Google Maps API is available
  if (typeof window === "undefined" || !window.google || !window.google.maps) return []

  const points: google.maps.LatLng[] = []
  const steps = Math.floor(radius / spacing)

  for (let x = -steps; x <= steps; x++) {
    for (let y = -steps; y <= steps; y++) {
      const dx = x * spacing
      const dy = y * spacing
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist <= radius) {
        const point = offsetLatLng(lat, lng, dx, dy)
        if (point) {
          // If intensity function is provided, add the point multiple times based on intensity
          if (intensity) {
            const weight = intensity(dx, dy, dist)
            for (let i = 0; i < Math.ceil(weight * 5); i++) {
              points.push(point)
            }
          } else {
            points.push(point)
          }
        }
      }
    }
  }

  return points
}

/**
 * Initializes a Google Map with heatmap
 */
export function initMap(elementId = "map"): void {
  // Check if running in browser and Google Maps API is available
  if (typeof window === "undefined" || !window.google || !window.google.maps) {
    console.error("Google Maps API not available")
    return
  }

  const mapElement = document.getElementById(elementId)
  if (!mapElement) {
    console.error(`Element with id "${elementId}" not found`)
    return
  }

  const center = new google.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG)
  const map = new google.maps.Map(mapElement, {
    center,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  })

  // Generate heatmap points with a simple intensity function
  const heatmapPoints = generateHeatmapPoints(DEFAULT_LAT, DEFAULT_LNG, 100, 2000, (x, y, dist) =>
    Math.max(0, 1 - dist / 2000),
  )

  // Create heatmap layer if visualization library is available
  if (google.maps.visualization && google.maps.visualization.HeatmapLayer) {
    const heatmap = new google.maps.visualization.HeatmapLayer({
      data: new google.maps.MVCArray(heatmapPoints),
      radius: 20,
      opacity: 0.8,
      gradient: [
        "rgba(0, 255, 255, 0)",
        "rgba(0, 255, 255, 1)",
        "rgba(0, 191, 255, 1)",
        "rgba(0, 127, 255, 1)",
        "rgba(0, 63, 255, 1)",
        "rgba(0, 0, 255, 1)",
        "rgba(0, 0, 223, 1)",
        "rgba(0, 0, 191, 1)",
        "rgba(0, 0, 159, 1)",
        "rgba(0, 0, 127, 1)",
        "rgba(63, 0, 91, 1)",
        "rgba(127, 0, 63, 1)",
        "rgba(191, 0, 31, 1)",
        "rgba(255, 0, 0, 1)",
      ],
    })

    heatmap.setMap(map)
  }
}

/**
 * Generates advanced heatmap data for different environmental metrics
 */
export function generateAdvancedHeatmapData(
  locations: Array<{
    position: { lat: number; lng: number }
    data: { [key: string]: number }
  }>,
  activeLayer: string,
): google.maps.MVCArray<google.maps.LatLng> | null {
  if (typeof window === "undefined" || !window.google || !window.google.maps) return null

  let allPoints: google.maps.LatLng[] = []

  // Generate points for each location
  locations.forEach((location) => {
    let intensity: (x: number, y: number, dist: number) => number
    let radius = 2000 // default radius in meters

    // Define intensity based on active layer
    if (activeLayer === "pollution") {
      const pollutionValue = location.data.pollution
      radius = 1000 + pollutionValue * 20 // Higher pollution = larger radius
      intensity = (x, y, dist) => {
        // Exponential decay of intensity with distance
        return (pollutionValue / 100) * Math.exp(-dist / (radius * 0.5))
      }
    } else if (activeLayer === "temperature") {
      const tempValue = location.data.temperature
      radius = 1500 + tempValue * 50
      intensity = (x, y, dist) => {
        // Linear decay of intensity with distance
        return Math.max(0, (tempValue / 30) * (1 - dist / radius))
      }
    } else if (activeLayer === "energy") {
      const energyValue = location.data.energy
      radius = 1200 + energyValue * 15
      intensity = (x, y, dist) => {
        // Quadratic decay of intensity with distance
        return (energyValue / 100) * Math.pow(1 - dist / radius, 2)
      }
    } else if (activeLayer === "water") {
      const waterValue = location.data.water || 50 // Default if not available
      radius = 1000 + waterValue * 25
      intensity = (x, y, dist) => {
        // Sigmoid decay of intensity with distance
        return (waterValue / 100) * (1 / (1 + Math.exp((dist - radius / 2) / (radius / 10))))
      }
    } else {
      // Default layer
      intensity = (x, y, dist) => 1 - dist / radius
    }

    // Generate points for this location
    const points = generateHeatmapPoints(
      location.position.lat,
      location.position.lng,
      100, // spacing between points in meters
      radius,
      intensity,
    )

    allPoints = [...allPoints, ...points]
  })

  return new window.google.maps.MVCArray(allPoints)
}

// Auto-initialize map when the window loads
if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    try {
      initMap()
    } catch (error) {
      console.error("Error auto-initializing map:", error)
    }
  })

  // Make the initMap function available globally for direct script loading
  ;(window as any).initMap = initMap
}

