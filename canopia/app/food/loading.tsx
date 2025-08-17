import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BottomNavigation from "@/components/bottom-navigation"

export default function FoodLoading() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1E9]">
      <header className="sticky top-0 z-10 bg-[#688F4E] text-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          <Skeleton className="h-7 w-48 bg-[#5A7A43]" />
          <div className="flex items-center space-x-2">
            <Skeleton className="h-9 w-9 rounded-full bg-[#5A7A43]" />
            <Skeleton className="h-9 w-9 rounded-full bg-[#5A7A43]" />
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 pb-20">
        <Tabs defaultValue="seasonal" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="seasonal" disabled>
              Saisonnier
            </TabsTrigger>
            <TabsTrigger value="local" disabled>
              Local
            </TabsTrigger>
            <TabsTrigger value="recipes" disabled>
              Recettes
            </TabsTrigger>
            <TabsTrigger value="gardening" disabled>
              Jardinage
            </TabsTrigger>
          </TabsList>

          <TabsContent value="seasonal" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {Array(6)
                    .fill(0)
                    .map((_, index) => (
                      <div key={index} className="flex items-center p-2 border rounded-lg bg-white">
                        <Skeleton className="h-12 w-12 rounded-md mr-3" />
                        <div className="w-full">
                          <Skeleton className="h-4 w-20 mb-1" />
                          <Skeleton className="h-3 w-24 mb-1" />
                          <Skeleton className="h-3 w-16" />
                        </div>
                      </div>
                    ))}
                </div>
                <Skeleton className="h-4 w-40 mx-auto mt-4" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Skeleton className="h-6 w-64 mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-12 w-full rounded-lg mb-3" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-5/6" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Skeleton className="h-6 w-56 mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Array(6)
                    .fill(0)
                    .map((_, index) => (
                      <div key={index} className="flex items-start">
                        <Skeleton className="h-5 w-5 rounded-full mr-2 mt-0.5" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    ))}
                </div>
                <Skeleton className="h-4 w-32 mx-auto mt-4" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNavigation activeTab="food" />
    </div>
  )
}

