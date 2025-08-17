"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, Lock, Globe, Database, Trash2, Download, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  const router = useRouter()
  const [language, setLanguage] = useState("fr")
  const [dataRetention, setDataRetention] = useState("6months")
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1E9]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-md">
        <div className="flex items-center p-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()} className="mr-2">
            <ChevronLeft className="h-6 w-6 text-[#2B463C]" />
            <span className="sr-only">Retour</span>
          </Button>
          <h1 className="text-xl font-semibold text-[#2B463C] font-montserrat">Paramètres</h1>
        </div>
      </header>

      {/* Settings Content */}
      <div className="flex-1 p-4 space-y-6">
        {/* Security Section */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center mb-4">
            <Lock className="h-5 w-5 text-[#2B463C] mr-2" />
            <h2 className="text-lg font-medium text-[#2B463C] font-montserrat">Sécurité</h2>
          </div>

          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start border-[#D8D3CA] text-[#2B2B2B]"
              onClick={() => router.push("/profile/settings/password")}
            >
              Changer le mot de passe
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start border-[#D8D3CA] text-[#2B2B2B]"
              onClick={() => router.push("/profile/settings/2fa")}
            >
              Authentification à deux facteurs
            </Button>
          </div>
        </div>

        {/* Language Section */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center mb-4">
            <Globe className="h-5 w-5 text-[#2B463C] mr-2" />
            <h2 className="text-lg font-medium text-[#2B463C] font-montserrat">Langue et région</h2>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-[#5F5B52] mb-2 block">Langue de l'application</label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="border-[#D8D3CA]">
                  <SelectValue placeholder="Sélectionner une langue" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Data Section */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center mb-4">
            <Database className="h-5 w-5 text-[#2B463C] mr-2" />
            <h2 className="text-lg font-medium text-[#2B463C] font-montserrat">Données</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-[#5F5B52] mb-2 block">Conservation des données</label>
              <RadioGroup value={dataRetention} onValueChange={setDataRetention}>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="3months" id="r1" className="text-[#688F4E]" />
                  <Label htmlFor="r1" className="text-[#2B2B2B]">
                    3 mois
                  </Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="6months" id="r2" className="text-[#688F4E]" />
                  <Label htmlFor="r2" className="text-[#2B2B2B]">
                    6 mois
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1year" id="r3" className="text-[#688F4E]" />
                  <Label htmlFor="r3" className="text-[#2B2B2B]">
                    1 an
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Separator className="my-3 bg-[#D8D3CA]" />

            <Button variant="outline" className="w-full justify-start border-[#D8D3CA] text-[#2B2B2B]">
              <Download className="h-4 w-4 mr-2 text-[#5F5B52]" />
              Exporter mes données
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start border-[#D8D3CA] text-[#C64747]"
              onClick={() => setShowDeleteDialog(true)}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Supprimer mon compte
            </Button>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-medium text-[#2B463C] font-montserrat mb-2">À propos</h2>
          <p className="text-sm text-[#5F5B52] mb-2">Canopia v1.0.0</p>
          <div className="flex space-x-2">
            <Button variant="link" className="h-auto p-0 text-[#688F4E]" onClick={() => router.push("/terms")}>
              Conditions d'utilisation
            </Button>
            <span className="text-[#D8D3CA]">•</span>
            <Button variant="link" className="h-auto p-0 text-[#688F4E]" onClick={() => router.push("/privacy")}>
              Politique de confidentialité
            </Button>
          </div>
        </div>
      </div>

      {/* Delete Account Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-[#C64747] font-montserrat flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Supprimer le compte
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-[#2B2B2B] mb-4">
              Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible et toutes vos données
              seront définitivement supprimées.
            </p>
            <p className="text-[#5F5B52] text-sm">
              Vous perdrez l'accès à tous vos signalements, commentaires et contributions.
            </p>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowDeleteDialog(false)}
              className="border-[#D8D3CA] text-[#5F5B52]"
            >
              Annuler
            </Button>
            <Button className="bg-[#C64747] hover:bg-[#C64747]/90 text-white">Supprimer définitivement</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

