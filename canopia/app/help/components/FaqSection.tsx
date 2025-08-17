"use client"

import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

interface Faq {
  id: string
  question: string
  answer: string
}

interface FaqSectionProps {
  faqs: Faq[]
  expandedFaqs: string[]
  onToggleFaq: (id: string) => void
  searchQuery: string
}

export default function FaqSection({ faqs, expandedFaqs, onToggleFaq, searchQuery }: FaqSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center mb-4">
        <HelpCircle className="h-5 w-5 text-[#2B463C] mr-2" />
        <h2 className="text-lg font-medium text-[#2B463C] font-montserrat">Questions fréquentes</h2>
      </div>

      <div className="space-y-3">
        {faqs.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-[#5F5B52]">Aucun résultat trouvé pour "{searchQuery}"</p>
          </div>
        ) : (
          faqs.map((faq) => (
            <div key={faq.id} className="border border-[#D8D3CA] rounded-lg overflow-hidden">
              <div
                className="flex items-center justify-between p-3 cursor-pointer bg-[#F4F1E9]"
                onClick={() => onToggleFaq(faq.id)}
              >
                <h3 className="text-[#2B2B2B] font-medium">{faq.question}</h3>
                {expandedFaqs.includes(faq.id) ? (
                  <ChevronUp className="h-5 w-5 text-[#5F5B52]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#5F5B52]" />
                )}
              </div>
              {expandedFaqs.includes(faq.id) && (
                <div className="p-3 bg-white">
                  <p className="text-[#5F5B52]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

