import { Skeleton } from "@/components/ui/skeleton"
import BottomNavigation from "@/components/bottom-navigation"

export default function EventDetailLoading() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8F6]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 border-b border-[#D8D3CA]">
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-24" />
          <div className="flex space-x-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-20">
        {/* Event Image */}
        <Skeleton className="w-full h-48" />

        {/* Event Details */}
        <div className="p-4 bg-white border-b border-[#D8D3CA]">
          <Skeleton className="h-8 w-3/4 mb-4" />

          <div className="space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <Skeleton className="h-10 w-10 rounded-full mr-3" />
              <div>
                <Skeleton className="h-4 w-24 mb-1" />
                <Skeleton className="h-5 w-32" />
              </div>
            </div>
            <Skeleton className="h-10 w-24" />
          </div>
        </div>

        {/* Event Description */}
        <div className="p-4 bg-white mt-2 border-y border-[#D8D3CA]">
          <Skeleton className="h-6 w-40 mb-3" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mb-4" />

          <Skeleton className="h-6 w-48 mb-2" />
          <div className="pl-5 mb-4 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-3/5" />
          </div>

          <Skeleton className="h-6 w-40 mb-2" />
          <Skeleton className="h-4 w-full" />
        </div>

        {/* Participants */}
        <div className="p-4 bg-white mt-2 border-y border-[#D8D3CA]">
          <div className="flex justify-between items-center mb-4">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-20" />
          </div>

          <div className="flex space-x-2 overflow-x-auto pb-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex flex-col items-center min-w-[70px]">
                <Skeleton className="h-12 w-12 rounded-full mb-1" />
                <Skeleton className="h-3 w-16" />
              </div>
            ))}
          </div>
        </div>

        {/* Comments */}
        <div className="p-4 bg-white mt-2">
          <div className="flex justify-between items-center mb-4">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-20" />
          </div>

          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-start">
                <Skeleton className="h-10 w-10 rounded-full mr-3" />
                <div className="flex-1">
                  <Skeleton className="h-24 w-full rounded-lg mb-1" />
                  <div className="flex ml-2 mt-1">
                    <Skeleton className="h-4 w-12 mr-2" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="events" />
    </div>
  )
}

