"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MessageSquare, Mail, Phone } from "lucide-react"

interface ContactSectionProps {
  onNavigate: (path: string) => void
}

export default function ContactSection({ onNavigate }: ContactSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center mb-4">
        <MessageSquare className="h-5 w-5 text-[#2B463C] mr-2" />
        <h2 className="text-lg font-medium text-[#2B463C] font-montserrat">Nous contacter</h2>
      </div>

      <p className="text-[#5F5B52] mb-4">
        Vous n'avez pas trouvé la réponse à votre question ? Contactez notre équipe de support.
      </p>

      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full justify-start border-[#D8D3CA] text-[#2B2B2B]"
          onClick={() => onNavigate("/help/contact")}
        >
          <Mail className="h-4 w-4 mr-2 text-[#688F4E]" />
          support@canopia.fr
        </Button>

        <Button
          variant="outline"
          className="w-full justify-start border-[#D8D3CA] text-[#2B2B2B]"
          onClick={() => onNavigate("tel:+33123456789")}
        >
          <Phone className="h-4 w-4 mr-2 text-[#688F4E]" />
          +33 1 23 45 67 89
        </Button>
      </div>

      <Separator className="my-4 bg-[#D8D3CA]" />

      <p className="text-xs text-[#A9A295] text-center">
        Disponible du lundi au vendredi, de 9h à 18h (heure de Charleroi)
      </p>
    </div>
  )
}

