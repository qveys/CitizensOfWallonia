import { Skeleton } from "@/components/ui/skeleton"
import BottomNavigation from "@/components/bottom-navigation"

export default function ReportDetailLoading() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1E9]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-md">
        <div className="flex items-center p-4">
          <Skeleton className="h-10 w-10 rounded-full mr-2" />
          <Skeleton className="h-7 w-48" />
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 p-4 space-y-6">
        {/* Report Image */}
        <Skeleton className="w-full h-56 rounded-lg" />

        {/* Report Details */}
        <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
          <Skeleton className="h-7 w-3/4" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>

          <div className="flex items-center space-x-4">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>
        </div>

        {/* Status Timeline */}
        <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
          <Skeleton className="h-6 w-40" />

          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start">
                <Skeleton className="h-10 w-10 rounded-full mr-3" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-5 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
          <Skeleton className="h-6 w-32" />

          <div className="space-y-4">
            {[1, 2].map((item) => (
              <div key={item} className="flex items-start">
                <Skeleton className="h-10 w-10 rounded-full mr-3" />
                <div className="space-y-2 flex-1">
                  <div className="flex justify-between">
                    <Skeleton className="h-5 w-1/3" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 flex-1 rounded-lg" />
            <Skeleton className="h-10 w-10 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNavigation activeTab="reports" />
      </div>
    </div>
  )
}

