"use client"

import { Switch } from "@/components/ui/switch"
import { Database } from "lucide-react"

interface DataAnalyticsSectionProps {
  dataSharing: boolean
  onDataSharingChange: (value: boolean) => void
  analyticsTracking: boolean
  onAnalyticsTrackingChange: (value: boolean) => void
}

export default function DataAnalyticsSection({
  dataSharing,
  onDataSharingChange,
  analyticsTracking,
  onAnalyticsTrackingChange,
}: DataAnalyticsSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center mb-4">
        <Database className="h-5 w-5 text-[#2B463C] mr-2" />
        <h2 className="text-lg font-medium text-[#2B463C] font-montserrat">Données et analyses</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-[#2B2B2B]">Partage de données</div>
            <div className="text-xs text-[#5F5B52]">Contribuer aux statistiques environnementales anonymes</div>
          </div>
          <Switch
            checked={dataSharing}
            onCheckedChange={onDataSharingChange}
            className="data-[state=checked]:bg-[#688F4E]"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-[#2B2B2B]">Suivi d'utilisation</div>
            <div className="text-xs text-[#5F5B52]">Autoriser le suivi pour améliorer l'application</div>
          </div>
          <Switch
            checked={analyticsTracking}
            onCheckedChange={onAnalyticsTrackingChange}
            className="data-[state=checked]:bg-[#688F4E]"
          />
        </div>
      </div>
    </div>
  )
}

