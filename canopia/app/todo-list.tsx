"use client"

import { useTodoListPageState } from "./hooks/useTodoListPageState"
import TodoSection from "./components/TodoSection"

export default function TodoListPage() {
  const { expandedSections, toggleSection } = useTodoListPageState()

  // Core Screens tasks
  const coreTasks = [
    { text: "Écran d'accueil / Tableau de bord", completed: true },
    { text: "Carte interactive", completed: true },
    { text: "Profil utilisateur", completed: true },
    { text: "Paramètres", completed: true },
    { text: "Aide et support", completed: true },
    { text: "Onboarding / Introduction", completed: false },
    { text: "Authentification (Connexion/Inscription)", completed: false },
    { text: "Notifications", completed: true },
    { text: "Recherche globale", completed: false },
    { text: "Tour guidé / Tutoriel", completed: false },
  ]

  // Environmental Monitoring tasks
  const environmentalTasks = [
    { text: "Qualité de l'air (visualisation et alertes)", completed: true },
    { text: "Température et îlots de chaleur", completed: true },
    { text: "Qualité de l'eau", completed: true },
    { text: "Niveau de bruit", completed: false },
    { text: "Biodiversité locale", completed: false },
    { text: "Espaces verts", completed: false },
    { text: "Signalement de problèmes environnementaux", completed: true },
    { text: "Historique et tendances", completed: true },
  ]

  // Community Engagement tasks
  const communityTasks = [
    { text: "Fil d'actualité communautaire", completed: true },
    { text: "Événements locaux", completed: true },
    { text: "Groupes thématiques", completed: true },
    { text: "Initiatives citoyennes", completed: true },
    { text: "Forum de discussion", completed: true },
    { text: "Projets collaboratifs", completed: false },
    { text: "Votes et sondages", completed: false },
    { text: "Chat communautaire", completed: false },
    { text: "Système de modération communautaire", completed: false },
  ]

  // Education & Resources tasks
  const educationTasks = [
    { text: "Articles et guides", completed: true },
    { text: "Cours et modules d'apprentissage", completed: true },
    { text: "Fiches pratiques", completed: false },
    { text: "Vidéothèque", completed: false },
    { text: "Quiz et jeux éducatifs", completed: false },
    { text: "Glossaire environnemental", completed: false },
    { text: "Ressources locales", completed: false },
    { text: "Système de certification/badges éducatifs", completed: false },
  ]

  // Sustainable Lifestyle tasks
  const lifestyleTasks = [
    { text: "Calculateur d'empreinte carbone", completed: false },
    { text: "Conseils personnalisés", completed: false },
    { text: "Suivi des habitudes écologiques", completed: false },
    { text: "Alimentation durable", completed: true },
    { text: "Transport durable", completed: true },
    { text: "Économie d'énergie", completed: false },
    { text: "Réduction des déchets", completed: false },
    { text: "Consommation responsable", completed: false },
    { text: "Annuaire de commerces durables", completed: false },
  ]

  // Gamification & Rewards tasks
  const gamificationTasks = [
    { text: "Système de points et niveaux", completed: true },
    { text: "Badges et réalisations", completed: true },
    { text: "Défis individuels et collectifs", completed: true },
    { text: "Classements", completed: false },
    { text: "Récompenses et avantages locaux", completed: true },
    { text: "Programme de fidélité", completed: false },
    { text: "Objectifs personnalisés", completed: false },
  ]

  // Data & Analytics tasks
  const dataTasks = [
    { text: "Visualisations de données", completed: true },
    { text: "Rapports personnalisés", completed: false },
    { text: "Analyses prédictives", completed: false },
    { text: "Comparaisons temporelles", completed: true },
    { text: "Exportation de données", completed: false },
    { text: "API publique", completed: false },
    { text: "Tableaux de bord analytiques", completed: false },
    { text: "Alertes personnalisées", completed: false },
  ]

  // Technical Features tasks
  const technicalTasks = [
    { text: "Mode hors ligne", completed: false },
    { text: "Synchronisation multi-appareils", completed: false },
    { text: "Notifications push", completed: false },
    { text: "Géolocalisation", completed: true },
    { text: "Scan de codes QR", completed: false },
    { text: "Réalité augmentée", completed: false },
    { text: "Accessibilité (WCAG)", completed: false },
    { text: "Support multilingue", completed: false },
    { text: "Thème clair/sombre", completed: false },
    { text: "Système de recherche avancée", completed: false },
    { text: "Sauvegarde et restauration des données", completed: false },
    { text: "Système de mise à jour", completed: false },
    { text: "Gestion des erreurs", completed: false },
  ]

  return (
    <div className="min-h-screen bg-[#F4F1E9] p-4 pb-24">
      <h1 className="text-2xl font-bold text-[#2B463C] mb-6">Canopia - Liste des Tâches</h1>

      {/* Core Screens */}
      <TodoSection
        title="Écrans Principaux"
        tasks={coreTasks}
        expanded={expandedSections.core}
        onToggle={() => toggleSection("core")}
      />

      {/* Environmental Monitoring */}
      <TodoSection
        title="Surveillance Environnementale"
        tasks={environmentalTasks}
        expanded={expandedSections.environmental}
        onToggle={() => toggleSection("environmental")}
      />

      {/* Community Engagement */}
      <TodoSection
        title="Engagement Communautaire"
        tasks={communityTasks}
        expanded={expandedSections.community}
        onToggle={() => toggleSection("community")}
      />

      {/* Education & Resources */}
      <TodoSection
        title="Éducation & Ressources"
        tasks={educationTasks}
        expanded={expandedSections.education}
        onToggle={() => toggleSection("education")}
      />

      {/* Sustainable Lifestyle */}
      <TodoSection
        title="Mode de Vie Durable"
        tasks={lifestyleTasks}
        expanded={expandedSections.lifestyle}
        onToggle={() => toggleSection("lifestyle")}
      />

      {/* Gamification & Rewards */}
      <TodoSection
        title="Gamification & Récompenses"
        tasks={gamificationTasks}
        expanded={expandedSections.gamification}
        onToggle={() => toggleSection("gamification")}
      />

      {/* Data & Analytics */}
      <TodoSection
        title="Données & Analyses"
        tasks={dataTasks}
        expanded={expandedSections.data}
        onToggle={() => toggleSection("data")}
      />

      {/* Technical Features */}
      <TodoSection
        title="Fonctionnalités Techniques"
        tasks={technicalTasks}
        expanded={expandedSections.technical}
        onToggle={() => toggleSection("technical")}
      />

      {/* Administrative Features */}
      <TodoSection
        title="Fonctionnalités Administratives"
        tasks={[
          { text: "Tableau de bord administrateur", completed: false },
          { text: "Gestion des utilisateurs", completed: false },
          { text: "Modération de contenu", completed: false },
          { text: "Gestion des capteurs", completed: false },
          { text: "Rapports d'activité", completed: false },
          { text: "Gestion des événements", completed: false },
          { text: "Gestion des récompenses", completed: false },
          { text: "Gestion des rôles et permissions", completed: false },
          { text: "Journaux d'audit", completed: false },
          { text: "Gestion des notifications massives", completed: false },
        ]}
        expanded={expandedSections.admin}
        onToggle={() => toggleSection("admin")}
      />

      {/* Integration Features */}
      <TodoSection
        title="Fonctionnalités d'Intégration"
        tasks={[
          { text: "Partage sur réseaux sociaux", completed: true },
          { text: "Intégration calendrier", completed: false },
          { text: "Connexion avec applications de santé", completed: false },
          { text: "Intégration transports publics", completed: false },
          { text: "Connexion objets connectés", completed: false },
          { text: "Intégration services municipaux", completed: false },
          { text: "Intégration systèmes de paiement", completed: false },
          { text: "Single Sign-On (SSO)", completed: false },
          { text: "Webhooks", completed: false },
        ]}
        expanded={expandedSections.integration}
        onToggle={() => toggleSection("integration")}
      />

      {/* Future Expansion */}
      <TodoSection
        title="Idées d'Expansion Future"
        tasks={[
          { text: "Version pour écoles et éducation", completed: false },
          { text: "Plateforme pour entreprises", completed: false },
          { text: "Marketplace produits durables", completed: false },
          { text: "Financement participatif de projets", completed: false },
          { text: "Réseau de capteurs citoyens", completed: false },
          { text: "Intégration avec smart city", completed: false },
          { text: "Jumelage avec autres villes", completed: false },
          { text: "Application pour montres connectées", completed: false },
          { text: "Intégration maisons intelligentes", completed: false },
        ]}
        expanded={expandedSections.future}
        onToggle={() => toggleSection("future")}
      />

      {/* UI States */}
      <TodoSection
        title="États UI Essentiels"
        tasks={[
          { text: "État: Aucune Donnée Disponible", completed: false },
          { text: "État: Erreur Réseau", completed: false },
          { text: "État: Confirmation Action Critique", completed: false },
          { text: "État: Chargement", completed: true },
          { text: "État: Liste Vide", completed: false },
          { text: "État: Succès", completed: false },
          { text: "État: Accès Refusé", completed: false },
          { text: "État: Première Utilisation", completed: false },
          { text: "État: Maintenance", completed: false },
          { text: "État: Mise à Jour Disponible", completed: false },
        ]}
        expanded={expandedSections.uiStates}
        onToggle={() => toggleSection("uiStates")}
      />

      {/* Modals */}
      <TodoSection
        title="Modals"
        tasks={[
          { text: "Modal: Confirmation", completed: false },
          { text: "Modal: Information", completed: false },
          { text: "Modal: Formulaire", completed: false },
          { text: "Modal: Succès/Erreur", completed: false },
          { text: "Modal: Partage", completed: false },
          { text: "Modal: Filtres/Recherche avancée", completed: false },
          { text: "Modal: Aide contextuelle", completed: false },
          { text: "Modal: Sélection de date/heure", completed: false },
          { text: "Modal: Galerie d'images", completed: false },
          { text: "Modal: Feedback utilisateur", completed: false },
        ]}
        expanded={expandedSections.modals}
        onToggle={() => toggleSection("modals")}
      />

      {/* UI Components */}
      <TodoSection
        title="Composants UI Réutilisables"
        tasks={[
          { text: "Système de design complet", completed: false },
          { text: "Boutons et contrôles", completed: true },
          { text: "Cartes et conteneurs", completed: true },
          { text: "Formulaires et champs", completed: true },
          { text: "Navigation (tabs, breadcrumbs)", completed: true },
          { text: "Tableaux et listes", completed: false },
          { text: "Graphiques et visualisations", completed: false },
          { text: "Avatars et badges", completed: true },
          { text: "Tooltips et popovers", completed: false },
          { text: "Notifications et toasts", completed: true },
          { text: "Accordéons et divulgations", completed: false },
          { text: "Pagination", completed: false },
          { text: "Stepper (étapes)", completed: false },
          { text: "Calendriers et sélecteurs", completed: false },
          { text: "Composants de glisser-déposer", completed: false },
          { text: "Indicateurs de progression", completed: true },
        ]}
        expanded={expandedSections.components}
        onToggle={() => toggleSection("components")}
      />

      {/* Animations */}
      <TodoSection
        title="Animations et Transitions"
        tasks={[
          { text: "Transitions de page", completed: false },
          { text: "Animations de chargement", completed: true },
          { text: "Animations de feedback", completed: false },
          { text: "Animations de données", completed: false },
          { text: "Micro-interactions", completed: false },
          { text: "Animations de défilement", completed: false },
          { text: "Animations d'onboarding", completed: false },
          { text: "Interactions gestuelles", completed: false },
        ]}
        expanded={expandedSections.animations}
        onToggle={() => toggleSection("animations")}
      />

      {/* Testing */}
      <TodoSection
        title="Tests et Assurance Qualité"
        tasks={[
          { text: "Tests unitaires", completed: false },
          { text: "Tests d'intégration", completed: false },
          { text: "Tests end-to-end", completed: false },
          { text: "Tests d'accessibilité", completed: false },
          { text: "Tests de performance", completed: false },
          { text: "Tests de compatibilité", completed: false },
          { text: "Tests de sécurité", completed: false },
          { text: "Tests utilisateurs", completed: false },
          { text: "Tests A/B", completed: false },
          { text: "Tests de charge", completed: false },
        ]}
        expanded={expandedSections.testing}
        onToggle={() => toggleSection("testing")}
      />

      {/* Performance */}
      <TodoSection
        title="Performance et Optimisation"
        tasks={[
          { text: "Optimisation des images", completed: false },
          { text: "Lazy loading", completed: false },
          { text: "Code splitting", completed: false },
          { text: "Mise en cache", completed: false },
          { text: "Optimisation des requêtes API", completed: false },
          { text: "Optimisation pour mobile", completed: false },
          { text: "Optimisation des animations", completed: false },
          { text: "Monitoring de performance", completed: false },
          { text: "Optimisation du temps de démarrage", completed: false },
          { text: "Compression des ressources", completed: false },
        ]}
        expanded={expandedSections.performance}
        onToggle={() => toggleSection("performance")}
      />

      {/* Security */}
      <TodoSection
        title="Sécurité"
        tasks={[
          { text: "Authentification sécurisée", completed: false },
          { text: "Autorisation et contrôle d'accès", completed: false },
          { text: "Protection des données", completed: false },
          { text: "Sécurité des API", completed: false },
          { text: "Protection contre les attaques courantes", completed: false },
          { text: "Conformité RGPD", completed: false },
          { text: "Audit de sécurité", completed: false },
          { text: "Gestion des sessions", completed: false },
          { text: "Chiffrement des données", completed: false },
          { text: "Politique de mots de passe", completed: false },
          { text: "Détection de fraude", completed: false },
        ]}
        expanded={expandedSections.security}
        onToggle={() => toggleSection("security")}
      />

      {/* Documentation */}
      <TodoSection
        title="Documentation"
        tasks={[
          { text: "Documentation technique", completed: false },
          { text: "Guide utilisateur", completed: false },
          { text: "Documentation API", completed: false },
          { text: "Guide de contribution", completed: false },
          { text: "Documentation du système de design", completed: false },
          { text: "FAQ et base de connaissances", completed: false },
          { text: "Tutoriels et guides", completed: false },
          { text: "Politiques et conditions d'utilisation", completed: false },
        ]}
        expanded={expandedSections.documentation}
        onToggle={() => toggleSection("documentation")}
      />

      {/* Accessibility */}
      <TodoSection
        title="Accessibilité"
        tasks={[
          { text: "Conformité WCAG 2.1 AA", completed: false },
          { text: "Support des lecteurs d'écran", completed: false },
          { text: "Navigation au clavier", completed: false },
          { text: "Textes alternatifs pour images", completed: false },
          { text: "Contraste des couleurs", completed: false },
          { text: "Mode daltonisme", completed: false },
          { text: "Taille de texte ajustable", completed: false },
          { text: "Sous-titres pour vidéos", completed: false },
          { text: "Audit d'accessibilité", completed: false },
        ]}
        expanded={expandedSections.accessibility}
        onToggle={() => toggleSection("accessibility")}
      />

      {/* Infrastructure */}
      <TodoSection
        title="Infrastructure & DevOps"
        tasks={[
          { text: "CI/CD Pipeline", completed: false },
          { text: "Environnements multiples (dev, staging, prod)", completed: false },
          { text: "Monitoring et alertes", completed: false },
          { text: "Journalisation centralisée", completed: false },
          { text: "Gestion des versions", completed: false },
          { text: "Sauvegarde et récupération", completed: false },
          { text: "Scaling automatique", completed: false },
          { text: "Gestion des erreurs et reporting", completed: false },
          { text: "Architecture de microservices", completed: false },
        ]}
        expanded={expandedSections.infrastructure}
        onToggle={() => toggleSection("infrastructure")}
      />

      {/* Analytics */}
      <TodoSection
        title="Analytics & Monitoring"
        tasks={[
          { text: "Suivi d'utilisation", completed: false },
          { text: "Entonnoirs de conversion", completed: false },
          { text: "Heatmaps et analytics comportementaux", completed: false },
          { text: "KPIs environnementaux", completed: false },
          { text: "Reporting d'erreurs", completed: false },
          { text: "Monitoring en temps réel", completed: false },
          { text: "Analyse de rétention", completed: false },
          { text: "Analyse des performances", completed: false },
        ]}
        expanded={expandedSections.analytics}
        onToggle={() => toggleSection("analytics")}
      />

      {/* Legal */}
      <TodoSection
        title="Conformité & Aspects Légaux"
        tasks={[
          { text: "Conformité RGPD", completed: false },
          { text: "Politique de confidentialité", completed: false },
          { text: "Conditions d'utilisation", completed: false },
          { text: "Politique de cookies", completed: false },
          { text: "Gestion des consentements", completed: false },
          { text: "Droits des utilisateurs (accès, suppression)", completed: false },
          { text: "Règles de modération du contenu", completed: false },
          { text: "Mentions légales", completed: false },
          { text: "Conformité aux réglementations locales", completed: false },
        ]}
        expanded={expandedSections.legal}
        onToggle={() => toggleSection("legal")}
      />

      {/* Monetization */}
      <TodoSection
        title="Monétisation & Business"
        tasks={[
          { text: "Modèles d'abonnement", completed: false },
          { text: "Transactions in-app", completed: false },
          { text: "Publicité responsable", completed: false },
          { text: "Partenariats locaux", completed: false },
          { text: "Programme d'affiliation", completed: false },
          { text: "Modèle freemium", completed: false },
          { text: "Analytics de revenus", completed: false },
          { text: "Gestion des factures et paiements", completed: false },
        ]}
        expanded={expandedSections.monetization}
        onToggle={() => toggleSection("monetization")}
      />

      {/* Architecture */}
      <TodoSection
        title="Architecture & Patterns"
        tasks={[
          { text: "Architecture modulaire", completed: false },
          { text: "Patterns de conception UI", completed: false },
          { text: "Architecture de données", completed: false },
          { text: "Patterns d'état et gestion", completed: false },
          { text: "Patterns de communication API", completed: false },
          { text: "Architecture sécurisée", completed: false },
          { text: "Patterns de synchronisation", completed: false },
          { text: "Architecture pour le scaling", completed: false },
        ]}
        expanded={expandedSections.architecture}
        onToggle={() => toggleSection("architecture")}
      />

      {/* Feedback */}
      <TodoSection
        title="Feedback & Support Utilisateur"
        tasks={[
          { text: "Système de collecte de feedback", completed: false },
          { text: "Formulaires de contact", completed: false },
          { text: "Système de tickets support", completed: false },
          { text: "Chat support", completed: false },
          { text: "Système de signalement de bugs", completed: false },
          { text: "FAQ et aide contextuelle", completed: false },
          { text: "Sondages de satisfaction", completed: false },
          { text: "Programme bêta-testeurs", completed: false },
        ]}
        expanded={expandedSections.feedback}
        onToggle={() => toggleSection("feedback")}
      />

      {/* AI & Machine Learning */}
      <TodoSection
        title="IA & Machine Learning"
        tasks={[
          { text: "Recommandations personnalisées", completed: false },
          { text: "Analyse prédictive environnementale", completed: false },
          { text: "Chatbot d'assistance écologique", completed: false },
          { text: "Reconnaissance d'images (plantes, déchets)", completed: false },
          { text: "Analyse de sentiment communautaire", completed: false },
          { text: "Détection d'anomalies environnementales", completed: false },
          { text: "Optimisation des parcours utilisateurs", completed: false },
          { text: "Traduction automatique multilingue", completed: false },
        ]}
        expanded={expandedSections.ai}
        onToggle={() => toggleSection("ai")}
      />

      {/* Blockchain & Decentralized */}
      <TodoSection
        title="Blockchain & Technologies Décentralisées"
        tasks={[
          { text: "Traçabilité des actions environnementales", completed: false },
          { text: "Tokens de récompense écologiques", completed: false },
          { text: "Gouvernance communautaire décentralisée", completed: false },
          { text: "Certification d'impact environnemental", completed: false },
          { text: "Financement participatif décentralisé", completed: false },
          { text: "Identité numérique souveraine", completed: false },
          { text: "Marché carbone local", completed: false },
        ]}
        expanded={expandedSections.blockchain}
        onToggle={() => toggleSection("blockchain")}
      />

      {/* Advanced UX */}
      <TodoSection
        title="Expérience Utilisateur Avancée"
        tasks={[
          { text: "Personnalisation avancée de l'interface", completed: false },
          { text: "Adaptation contextuelle (lieu, heure, activité)", completed: false },
          { text: "Parcours utilisateur adaptatif", completed: false },
          { text: "Interface conversationnelle", completed: false },
          { text: "Expérience multi-sensorielle", completed: false },
          { text: "Interfaces tangibles et physiques", completed: false },
          { text: "Expérience utilisateur émotionnelle", completed: false },
        ]}
        expanded={expandedSections.uxAdvanced}
        onToggle={() => toggleSection("uxAdvanced")}
      />

      {/* Collaboration Tools */}
      <TodoSection
        title="Outils de Collaboration"
        tasks={[
          { text: "Édition collaborative en temps réel", completed: false },
          { text: "Planification d'événements communautaires", completed: false },
          { text: "Gestion de tâches collectives", completed: false },
          { text: "Tableaux blancs collaboratifs", completed: false },
          { text: "Partage de ressources", completed: false },
          { text: "Système de commentaires et annotations", completed: false },
          { text: "Outils de prise de décision collective", completed: false },
        ]}
        expanded={expandedSections.collaboration}
        onToggle={() => toggleSection("collaboration")}
      />

      {/* Content Management */}
      <TodoSection
        title="Gestion de Contenu"
        tasks={[
          { text: "Système de publication et workflow", completed: false },
          { text: "Gestion des versions de contenu", completed: false },
          { text: "Bibliothèque de médias", completed: false },
          { text: "Système de catégorisation et tags", completed: false },
          { text: "Modèles de contenu", completed: false },
          { text: "Planification de publication", completed: false },
          { text: "Traduction et localisation de contenu", completed: false },
          { text: "Analyse de performance du contenu", completed: false },
        ]}
        expanded={expandedSections.contentManagement}
        onToggle={() => toggleSection("contentManagement")}
      />

      {/* IoT Integration */}
      <TodoSection
        title="Intégration IoT Avancée"
        tasks={[
          { text: "Réseau de capteurs environnementaux", completed: false },
          { text: "Intégration domotique écologique", completed: false },
          { text: "Monitoring énergétique", completed: false },
          { text: "Capteurs de qualité de l'air personnels", completed: false },
          { text: "Stations météo connectées", completed: false },
          { text: "Gestion de l'eau intelligente", completed: false },
          { text: "Capteurs de biodiversité", completed: false },
          { text: "Plateforme de gestion des appareils IoT", completed: false },
        ]}
        expanded={expandedSections.iot}
        onToggle={() => toggleSection("iot")}
      />

      {/* Platform Specific */}
      <TodoSection
        title="Fonctionnalités Spécifiques aux Plateformes"
        tasks={[
          { text: "Widgets iOS", completed: false },
          { text: "Intégration Android (intents, widgets)", completed: false },
          { text: "Extensions navigateur", completed: false },
          { text: "Intégration assistants vocaux", completed: false },
          { text: "Fonctionnalités spécifiques aux wearables", completed: false },
          { text: "Intégration desktop", completed: false },
          { text: "Fonctionnalités spécifiques aux tablettes", completed: false },
          { text: "Intégration TV connectée", completed: false },
        ]}
        expanded={expandedSections.platformSpecific}
        onToggle={() => toggleSection("platformSpecific")}
      />

      {/* Media Management */}
      <TodoSection
        title="Gestion des Médias"
        tasks={[
          { text: "Traitement d'images avancé", completed: false },
          { text: "Édition vidéo intégrée", completed: false },
          { text: "Streaming en direct", completed: false },
          { text: "Galeries et albums", completed: false },
          { text: "Reconnaissance d'objets et scènes", completed: false },
          { text: "Gestion des métadonnées", completed: false },
          { text: "Compression et optimisation", completed: false },
          { text: "Filtres et effets", completed: false },
        ]}
        expanded={expandedSections.mediaManagement}
        onToggle={() => toggleSection("mediaManagement")}
      />

      {/* Printing & Export */}
      <TodoSection
        title="Impression & Exportation"
        tasks={[
          { text: "Génération de rapports PDF", completed: false },
          { text: "Impression de certificats", completed: false },
          { text: "Exportation de données (CSV, Excel)", completed: false },
          { text: "Partage de visualisations", completed: false },
          { text: "Impression de cartes et plans", completed: false },
          { text: "Génération de QR codes", completed: false },
          { text: "Exportation de calendriers", completed: false },
          { text: "Impression d'étiquettes et badges", completed: false },
        ]}
        expanded={expandedSections.printing}
        onToggle={() => toggleSection("printing")}
      />

      {/* Advanced Search */}
      <TodoSection
        title="Recherche Avancée"
        tasks={[
          { text: "Recherche sémantique", completed: false },
          { text: "Filtres complexes et combinés", completed: false },
          { text: "Recherche géospatiale", completed: false },
          { text: "Recherche par facettes", completed: false },
          { text: "Suggestions et auto-complétion", completed: false },
          { text: "Recherche en langage naturel", completed: false },
          { text: "Historique et favoris de recherche", completed: false },
          { text: "Recherche multilingue", completed: false },
        ]}
        expanded={expandedSections.search}
        onToggle={() => toggleSection("search")}
      />
    </div>
  )
}

