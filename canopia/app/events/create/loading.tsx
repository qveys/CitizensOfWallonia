import { Skeleton } from "@/components/ui/skeleton"
import BottomNavigation from "@/components/bottom-navigation"

export default function CreateEventLoading() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8F6]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 border-b border-[#D8D3CA]">
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-40" />
          <div className="w-10"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 pb-20">
        <div className="space-y-6">
          {/* Event Image Upload */}
          <div className="bg-white rounded-lg border border-[#D8D3CA] p-4">
            <Skeleton className="h-5 w-40 mb-2" />
            <Skeleton className="h-40 w-full rounded-lg" />
          </div>

          {/* Basic Information */}
          <div className="bg-white rounded-lg border border-[#D8D3CA] p-4">
            <Skeleton className="h-6 w-48 mb-4" />

            <div className="space-y-4">
              <div>
                <Skeleton className="h-5 w-40 mb-1" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div>
                <Skeleton className="h-5 w-32 mb-1" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div>
                <Skeleton className="h-5 w-36 mb-1" />
                <Skeleton className="h-32 w-full" />
              </div>
            </div>
          </div>

          {/* Date and Time */}
          <div className="bg-white rounded-lg border border-[#D8D3CA] p-4">
            <Skeleton className="h-6 w-36 mb-4" />

            <div className="space-y-4">
              <div>
                <Skeleton className="h-5 w-24 mb-1" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Skeleton className="h-5 w-32 mb-1" />
                  <Skeleton className="h-10 w-full" />
                </div>

                <div>
                  <Skeleton className="h-5 w-32 mb-1" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-lg border border-[#D8D3CA] p-4">
            <Skeleton className="h-6 w-24 mb-4" />

            <div className="space-y-4">
              <div>
                <Skeleton className="h-5 w-28 mb-1" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div>
                <Skeleton className="h-5 w-48 mb-1" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>

          {/* Participants */}
          <div className="bg-white rounded-lg border border-[#D8D3CA] p-4">
            <Skeleton className="h-6 w-36 mb-4" />
            <Skeleton className="h-5 w-64 mb-1" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* What to Bring */}
          <div className="bg-white rounded-lg border border-[#D8D3CA] p-4">
            <Skeleton className="h-6 w-48 mb-4" />

            <div className="space-y-2">
              {[1, 2, 3].map((index) => (
                <div key={index} className="flex items-center">
                  <Skeleton className="h-10 flex-1" />
                  <Skeleton className="h-10 w-10 ml-2" />
                </div>
              ))}

              <Skeleton className="h-10 w-full mt-2" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="events" />
    </div>
  )
}

