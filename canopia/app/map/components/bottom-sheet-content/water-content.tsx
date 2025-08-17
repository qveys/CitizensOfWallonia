"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Droplet, TrendingDown, TrendingUp, AlertTriangle } from "lucide-react"

interface WaterContentProps {
  data: any
  navigateToZoneDetails: () => void
}

export function WaterContent({ data, navigateToZoneDetails }: WaterContentProps) {
  // Mock data for water consumption
  const waterData = {
    current: 65,
    previous: 72,
    trend: "down",
    alerts: [
      { type: "leak", message: "Fuite potentielle détectée" },
      { type: "usage", message: "Consommation élevée" },
    ],
  }

  return (
    <div className="space-y-4 mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Droplet className="h-5 w-5 text-blue-500 mr-2" />
          <h3 className="text-sm font-medium">Consommation d'eau</h3>
        </div>
        <div className="flex items-center">
          {waterData.trend === "down" ? (
            <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
          ) : (
            <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
          )}
          <span className="text-xs text-muted-foreground">
            {waterData.trend === "down" ? "-" : "+"}
            {Math.abs(waterData.current - waterData.previous)}% vs mois dernier
          </span>
        </div>
      </div>

      <Card className="p-3">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Faible</span>
            <span className="text-xs text-muted-foreground">Élevée</span>
          </div>
          <Progress value={waterData.current} className="h-2" />
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium">{waterData.current}/100</span>
            <span className="text-xs text-muted-foreground">Indice de consommation</span>
          </div>
        </div>
      </Card>

      {waterData.alerts.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-medium">Alertes</h4>
          {waterData.alerts.map((alert, index) => (
            <div key={index} className="flex items-center p-2 bg-amber-50 rounded-md">
              <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
              <span className="text-xs">{alert.message}</span>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-2">
        <h4 className="text-xs font-medium">Recommandations</h4>
        <ul className="text-xs space-y-1">
          <li>• Vérifiez les robinets et les tuyaux pour détecter les fuites</li>
          <li>• Installez des dispositifs d'économie d'eau</li>
          <li>• Récupérez l'eau de pluie pour l'arrosage</li>
        </ul>
      </div>

      <Button onClick={navigateToZoneDetails} className="w-full">
        Voir les détails complets
      </Button>
    </div>
  )
}

