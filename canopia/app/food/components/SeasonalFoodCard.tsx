"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"

interface Food {
  id: number
  name: string
  type: string
  season: string
  local: boolean
  image: string
}

interface SeasonalFoodCardProps {
  foods: Food[]
  showAllFoods: boolean
  onShowMore: () => void
}

export default function SeasonalFoodCard({ foods, showAllFoods, onShowMore }: SeasonalFoodCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <h2 className="text-lg font-medium text-[#2B463C] font-montserrat">Aliments de saison</h2>
        <p className="text-sm text-[#5F5B52]">
          Découvrez les fruits et légumes à privilégier ce mois-ci pour une alimentation locale et durable.
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {foods.map((food) => (
            <div key={food.id} className="flex items-center p-2 border rounded-lg bg-white">
              <div className="h-12 w-12 relative mr-3">
                <Image
                  src={food.image || "/placeholder.svg"}
                  alt={food.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div>
                <div className="text-sm font-medium text-[#2B2B2B]">{food.name}</div>
                <div className="text-xs text-[#5F5B52]">{food.type === "fruit" ? "Fruit" : "Légume"}</div>
                {food.local && <div className="text-xs text-[#509555]">Production locale</div>}
              </div>
            </div>
          ))}
        </div>
        {!showAllFoods && (
          <Button variant="link" onClick={onShowMore} className="mx-auto block mt-4 text-[#688F4E]">
            Voir tous les aliments de saison
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

