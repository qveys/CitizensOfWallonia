"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AlertTriangle } from "lucide-react"

interface LocationWarningDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onDisableLocation: () => void
}

export default function LocationWarningDialog({ open, onOpenChange, onDisableLocation }: LocationWarningDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#DFA23C] font-montserrat flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Désactiver la localisation ?
          </DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-[#2B2B2B] mb-4">
            La désactivation de la localisation limitera certaines fonctionnalités de l'application :
          </p>
          <ul className="text-[#5F5B52] space-y-2 list-disc pl-5">
            <li>Données environnementales locales</li>
            <li>Alertes de proximité</li>
            <li>Recommandations personnalisées</li>
            <li>Signalements géolocalisés</li>
          </ul>
        </div>
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="border-[#D8D3CA] text-[#5F5B52]">
            Annuler
          </Button>
          <Button onClick={onDisableLocation} className="bg-[#DFA23C] hover:bg-[#DFA23C]/90 text-white">
            Désactiver quand même
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

