"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface MapExportDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onExport?: (format: string) => void
}

export function MapExportDialog({ open, onOpenChange, onExport }: MapExportDialogProps) {
  const [exportFormat, setExportFormat] = useState("geojson")

  const handleExport = () => {
    if (onExport) {
      onExport(exportFormat)
    }
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Exporter les données</DialogTitle>
          <DialogDescription>Choisissez le format d'exportation pour les données cartographiques.</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <RadioGroup value={exportFormat} onValueChange={setExportFormat} className="space-y-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="geojson" id="geojson" />
              <Label htmlFor="geojson" className="font-medium">
                GeoJSON
              </Label>
              <span className="text-xs text-muted-foreground ml-auto">
                Format standard pour les données géospatiales
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="kml" id="kml" />
              <Label htmlFor="kml" className="font-medium">
                KML
              </Label>
              <span className="text-xs text-muted-foreground ml-auto">Compatible avec Google Earth</span>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="shapefile" id="shapefile" />
              <Label htmlFor="shapefile" className="font-medium">
                Shapefile
              </Label>
              <span className="text-xs text-muted-foreground ml-auto">Format SIG professionnel</span>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="csv" id="csv" />
              <Label htmlFor="csv" className="font-medium">
                CSV
              </Label>
              <span className="text-xs text-muted-foreground ml-auto">Données tabulaires avec coordonnées</span>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="image" id="image" />
              <Label htmlFor="image" className="font-medium">
                Image (PNG)
              </Label>
              <span className="text-xs text-muted-foreground ml-auto">Capture d'écran de la carte</span>
            </div>
          </RadioGroup>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Annuler
          </Button>
          <Button onClick={handleExport}>Exporter</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

