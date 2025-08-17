"use client"

import { useEffect, useState, useRef } from "react"
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  CircleMarker,
  FeatureGroup,
  GeoJSON,
  LayersControl,
  WMSTileLayer,
  Tooltip,
} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { cn } from "@/lib/utils"
import { EditControl } from "react-leaflet-draw"
import "leaflet-draw/dist/leaflet.draw.css"
import { MeasureControl } from "./map-measure-control"
import { MapLegend } from "./map-legend"
import { DEFAULT_LAT, DEFAULT_LNG } from "@/app/map/utils/heatmap"

// Component to change the map view when props change
function ChangeView({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap()
  map.setView(center, zoom)
  return null
}

// Component to handle map events
function MapEvents({ onMapClick }: { onMapClick: (event: L.LeafletMouseEvent) => void }) {
  const map = useMap()

  useEffect(() => {
    map.on("click", onMapClick)
    return () => {
      map.off("click", onMapClick)
    }
  }, [map, onMapClick])

  return null
}

interface MapComponentProps {
  activeLayer: string
  onMapClick: (event: L.LeafletMouseEvent) => void
  onMapLoad: () => void
  onMapError: () => void
  onShapeCreated?: (layer: L.Layer) => void
  onShapeEdited?: (layers: L.LayerGroup) => void
  onShapeDeleted?: (layers: L.LayerGroup) => void
  showDrawControls?: boolean
  showMeasureTools?: boolean
  selectedBasemap?: string
  geoJsonData?: any
  timelineData?: any
  compareMode?: boolean
}

export default function MapComponent({
  activeLayer,
  onMapClick,
  onMapLoad,
  onMapError,
  onShapeCreated,
  onShapeEdited,
  onShapeDeleted,
  showDrawControls = false,
  showMeasureTools = false,
  selectedBasemap = "osm",
  geoJsonData,
  timelineData,
  compareMode = false,
}: MapComponentProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null)
  const featureGroupRef = useRef<L.FeatureGroup | null>(null)
  const [legendVisible, setLegendVisible] = useState(true)

  // Use the default coordinates from heatmap.ts
  const defaultCenter: [number, number] = [DEFAULT_LAT, DEFAULT_LNG]

  // Sample locations based on the default coordinates
  const locations = [
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

  // Handle map load
  const handleMapLoad = (map: L.Map) => {
    setMapInstance(map)
    setIsLoaded(true)
    onMapLoad()

    // Try to initialize the Google Maps heatmap if available
    if (typeof window !== "undefined" && window.google && (window as any).initMap) {
      try {
        ;(window as any).initMap("map")
      } catch (error) {
        console.error("Error initializing Google Maps heatmap:", error)
      }
    }
  }

  // Get overlay color based on active layer
  const getOverlayColor = (value?: number) => {
    if (!value) {
      switch (activeLayer) {
        case "pollution":
          return { color: "red", fillColor: "#f03" }
        case "temperature":
          return { color: "orange", fillColor: "#f90" }
        case "energy":
          return { color: "green", fillColor: "#3f0" }
        case "water":
          return { color: "blue", fillColor: "#39f" }
        default:
          return { color: "red", fillColor: "#f03" }
      }
    }

    // Color based on value
    if (activeLayer === "pollution") {
      if (value < 50) return { color: "#4CAF50", fillColor: "#8BC34A", opacity: 0.8 }
      if (value < 70) return { color: "#FF9800", fillColor: "#FFC107", opacity: 0.8 }
      return { color: "#F44336", fillColor: "#E91E63", opacity: 0.8 }
    }

    if (activeLayer === "temperature") {
      if (value < 22) return { color: "#2196F3", fillColor: "#03A9F4", opacity: 0.8 }
      if (value < 25) return { color: "#FF9800", fillColor: "#FFC107", opacity: 0.8 }
      return { color: "#F44336", fillColor: "#E91E63", opacity: 0.8 }
    }

    if (activeLayer === "energy") {
      if (value < 40) return { color: "#4CAF50", fillColor: "#8BC34A", opacity: 0.8 }
      if (value < 60) return { color: "#FF9800", fillColor: "#FFC107", opacity: 0.8 }
      return { color: "#F44336", fillColor: "#E91E63", opacity: 0.8 }
    }

    if (activeLayer === "water") {
      if (value < 40) return { color: "#2196F3", fillColor: "#03A9F4", opacity: 0.8 }
      if (value < 60) return { color: "#FF9800", fillColor: "#FFC107", opacity: 0.8 }
      return { color: "#F44336", fillColor: "#E91E63", opacity: 0.8 }
    }

    return { color: "#9C27B0", fillColor: "#673AB7", opacity: 0.8 }
  }

  useEffect(() => {
    // This is needed to fix the broken icon paths in leaflet when used with webpack
    delete (L.Icon.Default.prototype as any)._getIconUrl

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    })
  }, [])

  // Custom marker icons
  const getMarkerIcon = (location: any) => {
    const value = location.data[activeLayer]
    let iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png"

    if (activeLayer === "pollution") {
      if (value < 50)
        iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png"
      else if (value < 70)
        iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png"
      else iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"
    } else if (activeLayer === "temperature") {
      if (value < 22)
        iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png"
      else if (value < 25)
        iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png"
      else iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"
    } else if (activeLayer === "energy") {
      if (value < 40)
        iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png"
      else if (value < 60)
        iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png"
      else iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"
    } else if (activeLayer === "water") {
      if (value < 40)
        iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png"
      else if (value < 60)
        iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png"
      else iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"
    }

    return new L.Icon({
      iconUrl,
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    })
  }

  // Handle draw events
  const handleCreated = (e: any) => {
    const layer = e.layer
    if (featureGroupRef.current) {
      featureGroupRef.current.addLayer(layer)
    }
    if (onShapeCreated) {
      onShapeCreated(layer)
    }
  }

  const handleEdited = (e: any) => {
    if (onShapeEdited && e.layers) {
      onShapeEdited(e.layers)
    }
  }

  const handleDeleted = (e: any) => {
    if (onShapeDeleted && e.layers) {
      onShapeDeleted(e.layers)
    }
  }

  // GeoJSON style function
  const geoJsonStyle = (feature: any) => {
    const value = feature.properties[activeLayer]
    const style = getOverlayColor(value)
    return {
      fillColor: style.fillColor,
      weight: 2,
      opacity: 1,
      color: style.color,
      fillOpacity: 0.7,
    }
  }

  // GeoJSON onEachFeature function
  const onEachFeature = (feature: any, layer: L.Layer) => {
    if (feature.properties) {
      layer.bindPopup(`
        <div class="font-medium">${feature.properties.name || "Zone"}</div>
        <div>Pollution: ${feature.properties.pollution || "N/A"}</div>
        <div>Température: ${feature.properties.temperature || "N/A"}°C</div>
        <div>Énergie: ${feature.properties.energy || "N/A"}</div>
      `)
    }
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

      <MapContainer
        center={defaultCenter}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        whenReady={(e) => handleMapLoad(e.target)}
        className={cn("z-0", !isLoaded && "opacity-0")}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked={selectedBasemap === "osm"} name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer checked={selectedBasemap === "satellite"} name="Satellite">
            <TileLayer
              attribution='&copy; <a href="https://www.esri.com">Esri</a>'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer checked={selectedBasemap === "topo"} name="Topographique">
            <TileLayer
              attribution='&copy; <a href="https://www.opentopomap.org">OpenTopoMap</a>'
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer checked={selectedBasemap === "dark"} name="Mode Sombre">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.Overlay checked name="Points d'intérêt">
            <FeatureGroup>
              {locations.map((location) => (
                <Marker
                  key={location.id}
                  position={location.position}
                  icon={getMarkerIcon(location)}
                  eventHandlers={{
                    click: (e) => {
                      e.originalEvent.stopPropagation()
                      onMapClick(e)
                    },
                  }}
                >
                  <Popup>
                    <div className="font-medium">{location.name}</div>
                    <div className="text-sm mt-1">
                      <div>Pollution: {location.data.pollution}</div>
                      <div>Température: {location.data.temperature}°C</div>
                      <div>Énergie: {location.data.energy}</div>
                    </div>
                  </Popup>
                  <Tooltip direction="top" offset={[0, -20]} opacity={0.9}>
                    {location.name}
                  </Tooltip>
                </Marker>
              ))}
            </FeatureGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked={activeLayer === "pollution"} name="Pollution de l'air">
            <FeatureGroup>
              {locations.map((location) => (
                <CircleMarker
                  key={`pollution-${location.id}`}
                  center={location.position}
                  radius={location.data.pollution / 2}
                  pathOptions={{
                    color: getOverlayColor(location.data.pollution).color,
                    fillColor: getOverlayColor(location.data.pollution).fillColor,
                    fillOpacity: 0.5,
                  }}
                >
                  <Popup>
                    <div className="font-medium">{location.name}</div>
                    <div>Indice de pollution: {location.data.pollution}</div>
                  </Popup>
                </CircleMarker>
              ))}
            </FeatureGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked={activeLayer === "temperature"} name="Îlots de chaleur">
            <FeatureGroup>
              {locations.map((location) => (
                <CircleMarker
                  key={`temperature-${location.id}`}
                  center={location.position}
                  radius={location.data.temperature * 2}
                  pathOptions={{
                    color: getOverlayColor(location.data.temperature).color,
                    fillColor: getOverlayColor(location.data.temperature).fillColor,
                    fillOpacity: 0.5,
                  }}
                >
                  <Popup>
                    <div className="font-medium">{location.name}</div>
                    <div>Température: {location.data.temperature}°C</div>
                  </Popup>
                </CircleMarker>
              ))}
            </FeatureGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked={activeLayer === "energy"} name="Consommation d'énergie">
            <FeatureGroup>
              {locations.map((location) => (
                <CircleMarker
                  key={`energy-${location.id}`}
                  center={location.position}
                  radius={location.data.energy / 2}
                  pathOptions={{
                    color: getOverlayColor(location.data.energy).color,
                    fillColor: getOverlayColor(location.data.energy).fillColor,
                    fillOpacity: 0.5,
                  }}
                >
                  <Popup>
                    <div className="font-medium">{location.name}</div>
                    <div>Consommation d'énergie: {location.data.energy}</div>
                  </Popup>
                </CircleMarker>
              ))}
            </FeatureGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Données cadastrales">
            <WMSTileLayer
              url="https://wxs.ign.fr/essentiels/geoportail/r/wms"
              layers="CADASTRALPARCELS.PARCELLAIRE_EXPRESS"
              format="image/png"
              transparent={true}
              opacity={0.7}
            />
          </LayersControl.Overlay>

          {geoJsonData && (
            <LayersControl.Overlay checked name="Zones administratives">
              <GeoJSON data={geoJsonData} style={geoJsonStyle} onEachFeature={onEachFeature} />
            </LayersControl.Overlay>
          )}

          {compareMode && timelineData && (
            <LayersControl.Overlay name="Données historiques">
              <GeoJSON
                data={timelineData}
                style={(feature) => ({
                  fillColor: "#3388ff",
                  weight: 2,
                  opacity: 1,
                  color: "white",
                  dashArray: "3",
                  fillOpacity: 0.5,
                })}
              />
            </LayersControl.Overlay>
          )}
        </LayersControl>

        <ChangeView center={defaultCenter} zoom={13} />
        <MapEvents onMapClick={onMapClick} />

        {showDrawControls && (
          <FeatureGroup
            ref={(group) => {
              featureGroupRef.current = group
            }}
          >
            <EditControl
              position="topleft"
              onCreated={handleCreated}
              onEdited={handleEdited}
              onDeleted={handleDeleted}
              draw={{
                rectangle: true,
                polygon: true,
                circle: true,
                circlemarker: false,
                marker: true,
                polyline: true,
              }}
            />
          </FeatureGroup>
        )}

        {showMeasureTools && <MeasureControl position="topleft" />}

        {legendVisible && <MapLegend activeLayer={activeLayer} onClose={() => setLegendVisible(false)} />}
      </MapContainer>
    </div>
  )
}

