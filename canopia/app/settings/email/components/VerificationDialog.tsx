"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Mail } from "lucide-react"

interface VerificationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  newEmail: string
  onVerificationSuccess: () => void
}

export default function VerificationDialog({
  open,
  onOpenChange,
  newEmail,
  onVerificationSuccess,
}: VerificationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#2B463C] font-montserrat flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            Vérification requise
          </DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-[#2B2B2B] mb-4">
            Un e-mail de vérification a été envoyé à <span className="font-medium">{newEmail}</span>. Veuillez cliquer
            sur le lien dans cet e-mail pour confirmer votre nouvelle adresse.
          </p>
          <p className="text-[#5F5B52] text-sm">
            Si vous ne recevez pas l'e-mail dans les prochaines minutes, vérifiez votre dossier de spam ou de courrier
            indésirable.
          </p>
        </div>
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="border-[#D8D3CA] text-[#5F5B52]">
            Fermer
          </Button>
          <Button onClick={onVerificationSuccess} className="bg-[#688F4E] hover:bg-[#82A768] text-white">
            J'ai vérifié mon e-mail
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

