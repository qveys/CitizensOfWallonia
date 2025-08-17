import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BottomNavigation from "@/components/bottom-navigation"

export default function SeasonalFoodLoading() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1E9]">
      <header className="sticky top-0 z-10 bg-[#688F4E] text-white p-4 shadow-md">
        <div className="flex items-center">
          <Skeleton className="h-6 w-6 mr-3 bg-[#5A7A43]" />
          <Skeleton className="h-7 w-64 bg-[#5A7A43]" />
        </div>
      </header>

      <main className="flex-1 p-4 pb-20">
        <Tabs defaultValue="avril" className="w-full">
          <TabsList className="flex overflow-x-auto pb-2 mb-4">
            {Array(12)
              .fill(0)
              .map((_, index) => (
                <TabsTrigger key={index} value={`month-${index}`} disabled className="min-w-[80px]">
                  <Skeleton className="h-4 w-16" />
                </TabsTrigger>
              ))}
          </TabsList>

          <TabsContent value="avril" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <Skeleton className="h-6 w-64 mb-2" />
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {Array(8)
                    .fill(0)
                    .map((_, index) => (
                      <div key={index} className="flex items-center p-2 border rounded-lg bg-white">
                        <Skeleton className="h-12 w-12 rounded-md mr-3" />
                        <div className="w-full">
                          <Skeleton className="h-4 w-20 mb-1" />
                          <Skeleton className="h-3 w-16 mb-1" />
                          <Skeleton className="h-3 w-24" />
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Skeleton className="h-6 w-48 mb-2" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <div key={index} className="flex items-start">
                        <Skeleton className="h-5 w-5 rounded-full mr-2 mt-0.5" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNavigation activeTab="food" />
    </div>
  )
}

