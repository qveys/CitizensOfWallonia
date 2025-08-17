export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F4F1E9] p-6">
      <div className="w-16 h-16 border-4 border-[#688F4E] border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-[#4D4D4D] font-roboto">Chargement...</p>
    </div>
  )
}

