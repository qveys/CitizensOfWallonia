"use client"

import { useEffect } from "react"
import { useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet-measure/dist/leaflet-measure.css"
import "leaflet-measure"

interface MeasureControlProps {
  position: L.ControlPosition
}

export function MeasureControl({ position }: MeasureControlProps) {
  const map = useMap()

  useEffect(() => {
    // @ts-ignore - Leaflet-measure types are not available
    const measureControl = new L.Control.Measure({
      position,
      primaryLengthUnit: "meters",
      secondaryLengthUnit: "kilometers",
      primaryAreaUnit: "sqmeters",
      secondaryAreaUnit: "hectares",
      activeColor: "#688F4E",
      completedColor: "#4D4D4D",
      localization: "fr",
      captureZIndex: 10000,
      popupOptions: {
        className: "leaflet-measure-resultpopup",
        autoPanPadding: [10, 10],
      },
    })

    measureControl.addTo(map)

    return () => {
      measureControl.remove()
    }
  }, [map, position])

  return null
}

