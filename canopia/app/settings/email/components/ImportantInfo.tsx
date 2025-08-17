"use client"

import { AlertTriangle } from "lucide-react"

export default function ImportantInfo() {
  return (
    <div>
      <h3 className="text-sm font-medium text-[#2B463C] mb-2">Informations importantes</h3>
      <ul className="text-sm text-[#5F5B52] space-y-2">
        <li className="flex items-start">
          <AlertTriangle className="h-4 w-4 text-[#DFA23C] mt-0.5 mr-2 flex-shrink-0" />
          La modification de votre adresse e-mail nécessitera une vérification.
        </li>
        <li className="flex items-start">
          <AlertTriangle className="h-4 w-4 text-[#DFA23C] mt-0.5 mr-2 flex-shrink-0" />
          Un e-mail de confirmation sera envoyé à votre nouvelle adresse.
        </li>
        <li className="flex items-start">
          <AlertTriangle className="h-4 w-4 text-[#DFA23C] mt-0.5 mr-2 flex-shrink-0" />
          Votre adresse e-mail ne sera mise à jour qu'après confirmation.
        </li>
      </ul>
    </div>
  )
}

