"use client"

import { useHelpPageState } from "./hooks/useHelpPageState"
import HelpHeader from "./components/HelpHeader"
import SearchSection from "./components/SearchSection"
import FaqSection from "./components/FaqSection"
import ContactSection from "./components/ContactSection"
import TutorialsSection from "./components/TutorialsSection"

export default function HelpPage() {
  const { searchQuery, setSearchQuery, expandedFaqs, filteredFaqs, toggleFaq, handleBack, handleNavigate } =
    useHelpPageState()

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1E9]">
      {/* Header */}
      <HelpHeader onBack={handleBack} />

      {/* Help Content */}
      <div className="flex-1 p-4 space-y-6">
        {/* Search */}
        <SearchSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        {/* FAQs */}
        <FaqSection faqs={filteredFaqs} expandedFaqs={expandedFaqs} onToggleFaq={toggleFaq} searchQuery={searchQuery} />

        {/* Contact */}
        <ContactSection onNavigate={handleNavigate} />

        {/* Tutorials */}
        <TutorialsSection onNavigate={handleNavigate} />
      </div>
    </div>
  )
}

