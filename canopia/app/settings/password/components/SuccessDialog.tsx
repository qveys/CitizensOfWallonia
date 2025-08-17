"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"

interface SuccessDialogProps {
  open: boolean
  onClose: () => void
}

export default function SuccessDialog({ open, onClose }: SuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#509555] font-montserrat flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            Mot de passe mis à jour
          </DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-[#2B2B2B]">
            Votre mot de passe a été modifié avec succès. Vous pouvez maintenant vous connecter avec votre nouveau mot
            de passe.
          </p>
        </div>
        <div className="flex justify-end">
          <Button onClick={onClose} className="bg-[#688F4E] hover:bg-[#82A768] text-white">
            Fermer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

