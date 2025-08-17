"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Upload } from "lucide-react"

interface MapImportDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onImport?: (data: any) => void
}

export function MapImportDialog({ open, onOpenChange, onImport }: MapImportDialogProps) {
  const [file, setFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleImport = () => {
    if (file && onImport) {
      // In a real app, we would read the file and parse it
      // For now, we'll just pass the file name
      onImport({ fileName: file.name })
    }
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Importer des données</DialogTitle>
          <DialogDescription>Importez des données géospatiales pour les afficher sur la carte.</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div
            className={`border-2 border-dashed rounded-lg p-6 text-center ${
              dragActive ? "border-[#688F4E] bg-[#F4F1E9]" : "border-muted-foreground/25"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="mx-auto h-10 w-10 text-muted-foreground mb-2" />
            <p className="text-sm font-medium mb-1">Glissez-déposez un fichier ici ou</p>
            <p className="text-xs text-muted-foreground mb-3">Formats supportés: GeoJSON, KML, Shapefile (ZIP), CSV</p>
            <Input
              id="file-upload"
              type="file"
              className="hidden"
              accept=".geojson,.json,.kml,.zip,.csv"
              onChange={handleChange}
            />
            <Label htmlFor="file-upload" className="cursor-pointer">
              <Button variant="outline" size="sm" type="button">
                Parcourir
              </Button>
            </Label>
          </div>

          {file && (
            <div className="mt-4 p-3 bg-muted rounded-md">
              <p className="text-sm font-medium">Fichier sélectionné:</p>
              <p className="text-xs text-muted-foreground truncate">{file.name}</p>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Annuler
          </Button>
          <Button onClick={handleImport} disabled={!file}>
            Importer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

