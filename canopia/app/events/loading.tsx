import { Skeleton } from "@/components/ui/skeleton"
import BottomNavigation from "@/components/bottom-navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EventsLoading() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8F6]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 border-b border-[#D8D3CA]">
        <div className="flex justify-between items-center">
          <Skeleton className="h-8 w-40" />
          <div className="flex space-x-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 pb-20">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6 bg-[#EFEEE9]">
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-white">
              À venir
            </TabsTrigger>
            <TabsTrigger value="myevents" className="data-[state=active]:bg-white">
              Mes événements
            </TabsTrigger>
            <TabsTrigger value="past" className="data-[state=active]:bg-white">
              Passés
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#D8D3CA]">
                <Skeleton className="w-full h-32" />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-5 w-20" />
                  </div>
                  <div className="space-y-3 mt-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <Skeleton className="h-10 w-24" />
                    <Skeleton className="h-5 w-5 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="events" />
    </div>
  )
}

