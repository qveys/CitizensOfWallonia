"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Bell, MapPin, Shield, Moon, Sun, Settings, HelpCircle, LogOut, ChevronRight } from "lucide-react"
import { useState } from "react"

interface ProfileSettingsProps {
  onNavigate: (path: string) => void
}

export default function ProfileSettings({ onNavigate }: ProfileSettingsProps) {
  const [notifications, setNotifications] = useState(true)
  const [locationTracking, setLocationTracking] = useState(true)
  const [dataSharing, setDataSharing] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <Separator className="my-6 bg-[#D8D3CA]" />

      <div>
        <h3 className="text-sm font-medium text-[#2B463C] mb-3">Paramètres</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#F4F1E9] flex items-center justify-center mr-3">
                <Bell className="h-4 w-4 text-[#5F5B52]" />
              </div>
              <div>
                <div className="text-sm font-medium text-[#2B2B2B]">Notifications</div>
                <div className="text-xs text-[#5F5B52]">Recevoir des alertes et mises à jour</div>
              </div>
            </div>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
              className="data-[state=checked]:bg-[#688F4E]"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#F4F1E9] flex items-center justify-center mr-3">
                <MapPin className="h-4 w-4 text-[#5F5B52]" />
              </div>
              <div>
                <div className="text-sm font-medium text-[#2B2B2B]">Localisation</div>
                <div className="text-xs text-[#5F5B52]">Autoriser le suivi de position</div>
              </div>
            </div>
            <Switch
              checked={locationTracking}
              onCheckedChange={setLocationTracking}
              className="data-[state=checked]:bg-[#688F4E]"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#F4F1E9] flex items-center justify-center mr-3">
                <Shield className="h-4 w-4 text-[#5F5B52]" />
              </div>
              <div>
                <div className="text-sm font-medium text-[#2B2B2B]">Partage de données</div>
                <div className="text-xs text-[#5F5B52]">Contribuer aux statistiques anonymes</div>
              </div>
            </div>
            <Switch
              checked={dataSharing}
              onCheckedChange={setDataSharing}
              className="data-[state=checked]:bg-[#688F4E]"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#F4F1E9] flex items-center justify-center mr-3">
                {darkMode ? <Moon className="h-4 w-4 text-[#5F5B52]" /> : <Sun className="h-4 w-4 text-[#5F5B52]" />}
              </div>
              <div>
                <div className="text-sm font-medium text-[#2B2B2B]">Mode sombre</div>
                <div className="text-xs text-[#5F5B52]">Changer l'apparence de l'application</div>
              </div>
            </div>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} className="data-[state=checked]:bg-[#688F4E]" />
          </div>
        </div>
      </div>

      <Separator className="my-6 bg-[#D8D3CA]" />

      {/* Account Options */}
      <div>
        <h3 className="text-sm font-medium text-[#2B463C] mb-3">Compte</h3>

        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full justify-between border-[#D8D3CA] text-[#2B2B2B]"
            onClick={() => onNavigate("/profile/settings")}
          >
            <div className="flex items-center">
              <Settings className="h-4 w-4 mr-2 text-[#5F5B52]" />
              Paramètres avancés
            </div>
            <ChevronRight className="h-4 w-4 text-[#5F5B52]" />
          </Button>

          <Button
            variant="outline"
            className="w-full justify-between border-[#D8D3CA] text-[#2B2B2B]"
            onClick={() => onNavigate("/help")}
          >
            <div className="flex items-center">
              <HelpCircle className="h-4 w-4 mr-2 text-[#5F5B52]" />
              Aide et support
            </div>
            <ChevronRight className="h-4 w-4 text-[#5F5B52]" />
          </Button>

          <Button variant="outline" className="w-full justify-start border-[#D8D3CA] text-[#C64747]">
            <LogOut className="h-4 w-4 mr-2" />
            Déconnexion
          </Button>
        </div>
      </div>
    </>
  )
}

