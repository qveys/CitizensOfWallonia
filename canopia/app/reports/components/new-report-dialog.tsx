"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { Camera, MapPin } from "lucide-react"

interface NewReportDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function NewReportDialog({ open, onOpenChange }: NewReportDialogProps) {
  const [formData, setFormData] = useState({
    type: "",
    title: "",
    description: "",
    location: "",
    hasPhoto: false,
  })

  const [formErrors, setFormErrors] = useState({
    type: false,
    title: false,
    description: false,
    location: false,
  })

  const handleCreateReport = () => {
    // Validate form
    const errors = {
      type: !formData.type,
      title: !formData.title.trim(),
      description: !formData.description.trim(),
      location: !formData.location.trim(),
    }

    setFormErrors(errors)

    if (Object.values(errors).some((error) => error)) {
      return
    }

    // In a real app, this would call an API to create the report

    // Reset form
    setFormData({
      type: "",
      title: "",
      description: "",
      location: "",
      hasPhoto: false,
    })

    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#2B463C] font-montserrat">Nouveau signalement</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div>
            <label className="text-sm font-medium text-[#5F5B52] mb-1 block">Type de problème</label>
            <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
              <SelectTrigger className={cn("border-[#D8D3CA]", formErrors.type && "border-[#C64747]")}>
                <SelectValue placeholder="Sélectionner un type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pollution">Pollution de l'air</SelectItem>
                <SelectItem value="waste">Déchets</SelectItem>
                <SelectItem value="energy">Énergie</SelectItem>
                <SelectItem value="water">Eau</SelectItem>
                <SelectItem value="other">Autre</SelectItem>
              </SelectContent>
            </Select>
            {formErrors.type && <p className="text-xs text-[#C64747] mt-1">Veuillez sélectionner un type</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-[#5F5B52] mb-1 block">Titre</label>
            <Input
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Titre court et descriptif"
              className={cn("border-[#D8D3CA]", formErrors.title && "border-[#C64747]")}
            />
            {formErrors.title && <p className="text-xs text-[#C64747] mt-1">Veuillez entrer un titre</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-[#5F5B52] mb-1 block">Description</label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Décrivez le problème en détail"
              className={cn("border-[#D8D3CA] min-h-[100px]", formErrors.description && "border-[#C64747]")}
            />
            {formErrors.description && <p className="text-xs text-[#C64747] mt-1">Veuillez entrer une description</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-[#5F5B52] mb-1 block">Localisation</label>
            <div className="relative">
              <Input
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Adresse ou lieu"
                className={cn("border-[#D8D3CA] pl-10", formErrors.location && "border-[#C64747]")}
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5F5B52] w-5 h-5" />
            </div>
            {formErrors.location && <p className="text-xs text-[#C64747] mt-1">Veuillez entrer une localisation</p>}
          </div>

          <div>
            <Button
              variant="outline"
              className="w-full border-dashed border-[#D8D3CA] text-[#5F5B52] h-20 flex flex-col"
              onClick={() => setFormData({ ...formData, hasPhoto: true })}
            >
              <Camera className="h-6 w-6 mb-1" />
              {formData.hasPhoto ? "Photo ajoutée" : "Ajouter une photo"}
            </Button>
          </div>

          <div className="flex justify-end space-x-2 pt-2">
            <Button variant="outline" onClick={() => onOpenChange(false)} className="border-[#D8D3CA] text-[#5F5B52]">
              Annuler
            </Button>
            <Button onClick={handleCreateReport} className="bg-[#688F4E] hover:bg-[#82A768] text-white">
              Soumettre
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

