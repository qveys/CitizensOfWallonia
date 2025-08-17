"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface EcoTipsCardProps {
  tips: string[]
}

export default function EcoTipsCard({ tips }: EcoTipsCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <h2 className="text-lg font-medium text-[#2B463C] font-montserrat">Conseils éco-responsables</h2>
        <p className="text-sm text-[#5F5B52]">
          Adoptez ces habitudes pour réduire votre impact environnemental lié à l'alimentation.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {tips.map((tip, index) => (
            <div key={index} className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-[#B1D182] flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs text-[#2B463C] font-medium">{index + 1}</span>
              </div>
              <p className="text-sm text-[#2B2B2B]">{tip}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

