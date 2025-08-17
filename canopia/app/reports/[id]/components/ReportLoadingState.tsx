export default function ReportLoadingState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F4F1E9] p-6">
      <div className="w-12 h-12 border-4 border-[#688F4E] border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-[#4D4D4D] font-roboto">Chargement du signalement...</p>
    </div>
  )
}

