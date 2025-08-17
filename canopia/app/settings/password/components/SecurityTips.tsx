export default function SecurityTips() {
  return (
    <div>
      <h3 className="text-sm font-medium text-[#2B463C] mb-2">Conseils de sécurité</h3>
      <ul className="text-sm text-[#5F5B52] space-y-2">
        <li className="flex items-start">
          <span className="text-[#688F4E] mr-2">•</span>
          Utilisez au moins 8 caractères
        </li>
        <li className="flex items-start">
          <span className="text-[#688F4E] mr-2">•</span>
          Incluez des lettres majuscules et minuscules
        </li>
        <li className="flex items-start">
          <span className="text-[#688F4E] mr-2">•</span>
          Ajoutez des chiffres et des caractères spéciaux
        </li>
        <li className="flex items-start">
          <span className="text-[#688F4E] mr-2">•</span>
          Évitez les informations personnelles facilement devinables
        </li>
      </ul>
    </div>
  )
}

