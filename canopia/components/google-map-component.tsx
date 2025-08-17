"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
  Circle,
  Polygon,
  DrawingManager,
  HeatmapLayer,
} from "@react-google-maps/api"
import { cn } from "@/lib/utils"

// Styles pour la carte Google Maps
const mapContainerStyle = {
  width: "100%",
  height: "100%",
}

// Options par défaut pour la carte
const defaultOptions = {
  mapTypeControl: true,
  zoomControl: true,
  fullscreenControl: false,
  streetViewControl: false,
  mapTypeId: "roadmap",
  mapTypeControlOptions: {
    style: 2, // DROPDOWN_MENU
    position: 3, // RIGHT_TOP
  },
  zoomControlOptions: {
    position: 9, // RIGHT_BOTTOM
  },
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ],
}

// Options pour le gestionnaire de dessin
const drawingOptions = {
  drawingControl: true,
  drawingControlOptions: {
    position: 2, // TOP_CENTER
    drawingModes: ["marker", "circle", "polygon", "polyline", "rectangle"],
  },
  circleOptions: {
    fillColor: "#688F4E",
    fillOpacity: 0.3,
    strokeWeight: 2,
    strokeColor: "#4A6D32",
    clickable: true,
    editable: true,
    draggable: true,
    zIndex: 1,
  },
  polygonOptions: {
    fillColor: "#688F4E",
    fillOpacity: 0.3,
    strokeWeight: 2,
    strokeColor: "#4A6D32",
    clickable: true,
    editable: true,
    draggable: true,
    zIndex: 1,
  },
  polylineOptions: {
    strokeWeight: 2,
    strokeColor: "#4A6D32",
    clickable: true,
    editable: true,
    draggable: true,
    zIndex: 1,
  },
  rectangleOptions: {
    fillColor: "#688F4E",
    fillOpacity: 0.3,
    strokeWeight: 2,
    strokeColor: "#4A6D32",
    clickable: true,
    editable: true,
    draggable: true,
    zIndex: 1,
  },
}

// Clé API Google Maps
const GOOGLE_MAPS_API_KEY = "AIzaSyAD3k7Ub8zEgLD6cobCBZ07pXSFS06C9NY"

// Constantes pour les calculs géographiques
const EARTH_RADIUS = 6371000 // mètres

// Fonctions utilitaires pour les calculs géographiques
const degToRad = (deg: number) => (deg * Math.PI) / 180
const radToDeg = (rad: number) => (rad * 180) / Math.PI

// Fonction pour décaler un point géographique
function offsetLatLng(lat: number, lng: number, dx: number, dy: number): google.maps.LatLng | null {
  if (typeof window === "undefined" || !window.google || !window.google.maps) return null

  const dLat = dy / EARTH_RADIUS
  const dLng = dx / (EARTH_RADIUS * Math.cos(degToRad(lat)))

  const newLat = lat + radToDeg(dLat)
  const newLng = lng + radToDeg(dLng)

  return new window.google.maps.LatLng(newLat, newLng)
}

// Fonction pour générer des points de heatmap
function generateHeatmapPoints(
  lat: number,
  lng: number,
  spacing: number,
  radius: number,
  intensity: (x: number, y: number, dist: number) => number,
): google.maps.LatLng[] {
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
          // Ajouter le point plusieurs fois en fonction de l'intensité pour simuler un poids
          const weight = intensity(dx, dy, dist)
          for (let i = 0; i < Math.ceil(weight * 5); i++) {
            points.push(point)
          }
        }
      }
    }
  }

  return points
}

// Données simulées pour les différentes couches
const mockLocations = [
  {
    id: "centre-ville",
    name: "Centre-Ville",
    position: { lat: 50.4108, lng: 4.4446 },
    data: { pollution: 65, temperature: 22, energy: 45, water: 60 },
  },
  {
    id: "quartier-nord",
    name: "Quartier Nord",
    position: { lat: 50.4308, lng: 4.4346 },
    data: { pollution: 78, temperature: 24, energy: 32, water: 45 },
  },
  {
    id: "parc-sud",
    name: "Parc Sud",
    position: { lat: 50.3908, lng: 4.4646 },
    data: { pollution: 42, temperature: 21, energy: 58, water: 75 },
  },
  {
    id: "zone-industrielle",
    name: "Zone Industrielle",
    position: { lat: 50.4208, lng: 4.4746 },
    data: { pollution: 89, temperature: 26, energy: 75, water: 30 },
  },
  {
    id: "quartier-est",
    name: "Quartier Est",
    position: { lat: 50.4108, lng: 4.4846 },
    data: { pollution: 56, temperature: 23, energy: 48, water: 55 },
  },
]

// Zones administratives (polygones)
const mockAdministrativeAreas = [
  {
    id: "centre-ville-area",
    name: "Centre-Ville",
    paths: [
      { lat: 48.8516, lng: 2.3472 },
      { lat: 48.8516, lng: 2.3572 },
      { lat: 48.8616, lng: 2.3572 },
      { lat: 48.8616, lng: 2.3472 },
    ],
    data: { pollution: 65, temperature: 22, energy: 45, water: 60 },
  },
  {
    id: "quartier-nord-area",
    name: "Quartier Nord",
    paths: [
      { lat: 48.8716, lng: 2.3372 },
      { lat: 48.8716, lng: 2.3472 },
      { lat: 48.8816, lng: 2.3472 },
      { lat: 48.8816, lng: 2.3372 },
    ],
    data: { pollution: 78, temperature: 24, energy: 32, water: 45 },
  },
]

interface GoogleMapComponentProps {
  activeLayer: string
  onMapClick: (event: google.maps.MapMouseEvent) => void
  onMapLoad: () => void
  onMapError: () => void
  onShapeCreated?: (shape: any) => void
  showDrawControls?: boolean
  showHeatmap?: boolean
}

export default function GoogleMapComponent({
  activeLayer,
  onMapClick,
  onMapLoad,
  onMapError,
  onShapeCreated,
  showDrawControls = false,
  showHeatmap = false,
}: GoogleMapComponentProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [selectedMarker, setSelectedMarker] = useState<any>(null)
  const [mapCenter, setMapCenter] = useState({ lat: 50.4108, lng: 4.4446 }) // Charleroi
  const [zoom, setZoom] = useState(13)
  const [drawingManager, setDrawingManager] = useState<google.maps.drawing.DrawingManager | null>(null)
  const [heatmapData, setHeatmapData] = useState<google.maps.MVCArray<google.maps.LatLng> | null>(null)
  const [heatmapInitialized, setHeatmapInitialized] = useState(false)

  // Utiliser les données simulées
  const locations = useMemo(() => mockLocations, [])
  const administrativeAreas = useMemo(() => mockAdministrativeAreas, [])

  // Charger l'API Google Maps avec la clé API fournie
  const { isLoaded: isApiLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ["drawing", "visualization"],
  })

  // Obtenir la couleur en fonction de la valeur et de la couche active
  const getColorForValue = (value: number, layer: string) => {
    if (layer === "pollution") {
      if (value < 50) return "#4CAF50"
      if (value < 70) return "#FFC107"
      return "#F44336"
    }

    if (layer === "temperature") {
      if (value < 22) return "#2196F3"
      if (value < 25) return "#FFC107"
      return "#F44336"
    }

    if (layer === "energy") {
      if (value < 40) return "#4CAF50"
      if (value < 60) return "#FFC107"
      return "#F44336"
    }

    if (layer === "water") {
      if (value < 40) return "#2196F3"
      if (value < 60) return "#FFC107"
      return "#F44336"
    }

    return "#9C27B0"
  }

  // Callback pour charger la carte
  const onLoad = useCallback(
    (map: google.maps.Map) => {
      setMap(map)
      setIsLoaded(true)
      onMapLoad()
    },
    [onMapLoad],
  )

  // Callback pour décharger la carte
  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  // Callback pour charger le gestionnaire de dessin
  const onDrawingManagerLoad = (drawingManager: google.maps.drawing.DrawingManager) => {
    setDrawingManager(drawingManager)
  }

  // Callback pour la création d'une forme
  const onOverlayComplete = (e: google.maps.drawing.OverlayCompleteEvent) => {
    if (onShapeCreated) {
      onShapeCreated(e.overlay)
    }
  }

  // Gérer les erreurs de chargement de l'API
  useEffect(() => {
    if (loadError) {
      console.error("Error loading Google Maps API:", loadError)
      onMapError()
    }
  }, [loadError, onMapError])

  // Fonction pour générer des données de heatmap avancées
  const generateAdvancedHeatmapData = useCallback(() => {
    if (typeof window === "undefined" || !window.google || !window.google.maps) return null

    let allPoints: google.maps.LatLng[] = []

    // Générer des points pour chaque emplacement
    locations.forEach((location) => {
      let intensity: (x: number, y: number, dist: number) => number
      let radius = 2000 // rayon par défaut en mètres

      // Définir l'intensité en fonction de la couche active
      if (activeLayer === "pollution") {
        const pollutionValue = location.data.pollution
        radius = 1000 + pollutionValue * 20 // Plus la pollution est élevée, plus le rayon est grand
        intensity = (x, y, dist) => {
          // Décroissance exponentielle de l'intensité avec la distance
          return (pollutionValue / 100) * Math.exp(-dist / (radius * 0.5))
        }
      } else if (activeLayer === "temperature") {
        const tempValue = location.data.temperature
        radius = 1500 + tempValue * 50
        intensity = (x, y, dist) => {
          // Décroissance linéaire de l'intensité avec la distance
          return Math.max(0, (tempValue / 30) * (1 - dist / radius))
        }
      } else if (activeLayer === "energy") {
        const energyValue = location.data.energy
        radius = 1200 + energyValue * 15
        intensity = (x, y, dist) => {
          // Décroissance quadratique de l'intensité avec la distance
          return (energyValue / 100) * Math.pow(1 - dist / radius, 2)
        }
      } else if (activeLayer === "water") {
        const waterValue = location.data.water
        radius = 1000 + waterValue * 25
        intensity = (x, y, dist) => {
          // Décroissance sigmoïde de l'intensité avec la distance
          return (waterValue / 100) * (1 / (1 + Math.exp((dist - radius / 2) / (radius / 10))))
        }
      } else {
        // Couche par défaut
        intensity = (x, y, dist) => 1 - dist / radius
      }

      // Générer les points pour cet emplacement
      const points = generateHeatmapPoints(
        location.position.lat,
        location.position.lng,
        100, // espacement entre les points en mètres
        radius,
        intensity,
      )

      allPoints = [...allPoints, ...points]
    })

    return new window.google.maps.MVCArray(allPoints)
  }, [activeLayer, locations])

  // Mettre à jour les données de heatmap lorsque la couche active change
  useEffect(() => {
    // Vérifier si l'API est chargée et si nous n'avons pas déjà initialisé la heatmap
    // ou si la couche active a changé
    if (
      isApiLoaded &&
      typeof window !== "undefined" &&
      window.google &&
      window.google.maps &&
      showHeatmap &&
      (!heatmapInitialized || heatmapData === null)
    ) {
      const newHeatmapData = generateAdvancedHeatmapData()
      setHeatmapData(newHeatmapData)
      setHeatmapInitialized(true)
    }
  }, [isApiLoaded, showHeatmap, heatmapInitialized, generateAdvancedHeatmapData, heatmapData])

  // Mettre à jour les données de heatmap lorsque la couche active change
  useEffect(() => {
    if (
      isApiLoaded &&
      typeof window !== "undefined" &&
      window.google &&
      window.google.maps &&
      showHeatmap &&
      heatmapInitialized
    ) {
      const newHeatmapData = generateAdvancedHeatmapData()
      setHeatmapData(newHeatmapData)
    }
  }, [isApiLoaded, activeLayer, showHeatmap, heatmapInitialized, generateAdvancedHeatmapData])

  if (!isApiLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#F4F1E9]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#688F4E] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-[#4D4D4D] font-medium">Chargement de la carte...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#F4F1E9] z-20">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[#688F4E] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-[#4D4D4D] font-medium">Chargement de la carte...</p>
          </div>
        </div>
      )}

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={mapCenter}
        zoom={zoom}
        options={defaultOptions}
        onClick={onMapClick}
        onLoad={onLoad}
        onUnmount={onUnmount}
        className={cn("z-0", !isLoaded && "opacity-0")}
      >
        {/* Marqueurs pour les emplacements */}
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            icon={{
              url: `https://maps.google.com/mapfiles/ms/icons/${
                activeLayer === "pollution"
                  ? location.data.pollution < 50
                    ? "green"
                    : location.data.pollution < 70
                      ? "yellow"
                      : "red"
                  : activeLayer === "temperature"
                    ? location.data.temperature < 22
                      ? "blue"
                      : location.data.temperature < 25
                        ? "yellow"
                        : "red"
                    : activeLayer === "energy"
                      ? location.data.energy < 40
                        ? "green"
                        : location.data.energy < 60
                          ? "yellow"
                          : "red"
                      : activeLayer === "water"
                        ? location.data.water < 40
                          ? "blue"
                          : location.data.water < 60
                            ? "yellow"
                            : "red"
                        : "purple"
              }-dot.png`,
              scaledSize: new window.google.maps.Size(32, 32),
            }}
            onClick={() => setSelectedMarker(location)}
          />
        ))}

        {/* Fenêtre d'information pour le marqueur sélectionné */}
        {selectedMarker && (
          <InfoWindow position={selectedMarker.position} onCloseClick={() => setSelectedMarker(null)}>
            <div className="p-2">
              <h3 className="font-medium text-base">{selectedMarker.name}</h3>
              <div className="text-sm mt-1">
                <div>Pollution: {selectedMarker.data.pollution}</div>
                <div>Température: {selectedMarker.data.temperature}°C</div>
                <div>Énergie: {selectedMarker.data.energy}</div>
                <div>Eau: {selectedMarker.data.water}</div>
              </div>
            </div>
          </InfoWindow>
        )}

        {/* Cercles pour visualiser les données */}
        {!showHeatmap &&
          activeLayer === "pollution" &&
          locations.map((location) => (
            <Circle
              key={`pollution-${location.id}`}
              center={location.position}
              radius={location.data.pollution * 50}
              options={{
                fillColor: getColorForValue(location.data.pollution, "pollution"),
                fillOpacity: 0.35,
                strokeColor: getColorForValue(location.data.pollution, "pollution"),
                strokeOpacity: 0.8,
                strokeWeight: 2,
              }}
            />
          ))}

        {!showHeatmap &&
          activeLayer === "temperature" &&
          locations.map((location) => (
            <Circle
              key={`temperature-${location.id}`}
              center={location.position}
              radius={location.data.temperature * 100}
              options={{
                fillColor: getColorForValue(location.data.temperature, "temperature"),
                fillOpacity: 0.35,
                strokeColor: getColorForValue(location.data.temperature, "temperature"),
                strokeOpacity: 0.8,
                strokeWeight: 2,
              }}
            />
          ))}

        {!showHeatmap &&
          activeLayer === "energy" &&
          locations.map((location) => (
            <Circle
              key={`energy-${location.id}`}
              center={location.position}
              radius={location.data.energy * 50}
              options={{
                fillColor: getColorForValue(location.data.energy, "energy"),
                fillOpacity: 0.35,
                strokeColor: getColorForValue(location.data.energy, "energy"),
                strokeOpacity: 0.8,
                strokeWeight: 2,
              }}
            />
          ))}

        {!showHeatmap &&
          activeLayer === "water" &&
          locations.map((location) => (
            <Circle
              key={`water-${location.id}`}
              center={location.position}
              radius={location.data.water * 50}
              options={{
                fillColor: getColorForValue(location.data.water, "water"),
                fillOpacity: 0.35,
                strokeColor: getColorForValue(location.data.water, "water"),
                strokeOpacity: 0.8,
                strokeWeight: 2,
              }}
            />
          ))}

        {/* Zones administratives (polygones) */}
        {administrativeAreas.map((area) => (
          <Polygon
            key={area.id}
            paths={area.paths}
            options={{
              fillColor: getColorForValue(area.data[activeLayer as keyof typeof area.data] as number, activeLayer),
              fillOpacity: 0.35,
              strokeColor: getColorForValue(area.data[activeLayer as keyof typeof area.data] as number, activeLayer),
              strokeOpacity: 0.8,
              strokeWeight: 2,
            }}
          />
        ))}

        {/* Heatmap avancée pour visualiser la densité des données */}
        {showHeatmap &&
          isApiLoaded &&
          typeof window !== "undefined" &&
          window.google &&
          window.google.maps &&
          heatmapData && (
            <HeatmapLayer
              data={heatmapData}
              options={{
                radius: activeLayer === "temperature" ? 15 : 12,
                opacity: 0.8,
                dissipating: true,
                maxIntensity: activeLayer === "pollution" ? 15 : 10,
                gradient:
                  activeLayer === "pollution"
                    ? ["rgba(0, 255, 0, 0)", "rgba(0, 255, 0, 1)", "rgba(255, 255, 0, 1)", "rgba(255, 0, 0, 1)"]
                    : activeLayer === "temperature"
                      ? ["rgba(0, 0, 255, 0)", "rgba(0, 0, 255, 1)", "rgba(255, 255, 0, 1)", "rgba(255, 0, 0, 1)"]
                      : activeLayer === "energy"
                        ? ["rgba(0, 255, 0, 0)", "rgba(0, 255, 0, 1)", "rgba(255, 255, 0, 1)", "rgba(255, 0, 0, 1)"]
                        : activeLayer === "water"
                          ? ["rgba(0, 0, 255, 0)", "rgba(0, 0, 255, 1)", "rgba(255, 255, 0, 1)", "rgba(255, 0, 0, 1)"]
                          : undefined,
              }}
            />
          )}

        {/* Gestionnaire de dessin pour les outils de dessin */}
        {showDrawControls && (
          <DrawingManager
            onLoad={onDrawingManagerLoad}
            options={drawingOptions}
            onOverlayComplete={onOverlayComplete}
          />
        )}
      </GoogleMap>
    </div>
  )
}

