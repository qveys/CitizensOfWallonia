# Plan d'action détaillé - Projet CityPulse

## Vendredi (Premier jour - Soir)

### Volet 1: Composition d'équipe (à compléter pour 23h)

- [ ] Répartition des rôles et compétences
    - [ ] Équipe Hardware/IoT: configuration des stations ESP32 et capteurs
    - [ ] Équipe Backend: infrastructure serveur et bases de données
    - [ ] Équipe Data Science: traitement et analyse des données
    - [ ] Équipe Frontend: conception UX/UI des dashboards
- [ ] Établissement du workflow de collaboration
    - [ ] Configuration du dépôt Git
    - [ ] Mise en place d'un tableau kanban (Trello ou similaire)
    - [ ] Configuration de l'espace Google Drive partagé
- [ ] Brainstorming initial et vision commune du projet

## Samedi (Deuxième jour)

### Volet 2: Idéation (à compléter pour 9h30)

- [ ] Définition précise de la problématique adressée
    - [ ] Pollution atmosphérique: mesures CO₂, NO₂, PM10/PM2.5
    - [ ] Consommation énergétique des infrastructures publiques
    - [ ] Îlots de chaleur urbains
- [ ] Identification des besoins des utilisateurs cibles
    - [ ] Municipalités: outils d'aide à la décision
    - [ ] Citoyens: sensibilisation et information
    - [ ] Urbanistes: planification data-driven
    - [ ] Scientifiques: accès aux données brutes
- [ ] Formulation du concept CityPulse avec ses objectifs clairs
- [ ] Finalisation du nom du projet et de l'identité visuelle

### Volet 3: Périmètre du projet (à compléter pour 9h30 également)

- [ ] Définition détaillée de la solution proposée
    - [ ] Réseau de capteurs environnementaux connectés
    - [ ] Backend de collecte et analyse de données
    - [ ] Dashboard interactif avec visualisations
- [ ] Analyse des solutions existantes et différenciation
    - [ ] Comparaison avec systèmes commerciaux de surveillance
    - [ ] Positionnement par rapport aux initiatives Smart City
- [ ] Spécification du support de la solution
    - [ ] Stations physiques ESP32 avec capteurs
    - [ ] Application web Blazor pour dashboard
    - [ ] API REST pour intégration avec d'autres systèmes
- [ ] Identification des ressources nécessaires
    - [ ] Matériel: ESP32, capteurs, serveurs
    - [ ] Logiciels: frameworks et librairies
    - [ ] Données: sources et formats

### Début du développement (après la remise des volets 2 et 3)

- [ ] Préparation et configuration de l'environnement
    - [ ] Mise en place de l'environnement de développement
    - [ ] Définition de l'architecture technique globale
    - [ ] Diagramme d'architecture et flux de données
- [ ] Prototypage initial
    - [ ] Assemblage d'une station ESP32 de test
    - [ ] Développement de la base du backend (service Node.js)
    - [ ] Wireframes du dashboard

### Volet 4: Caractéristiques du projet (à compléter pour 19h)

- [ ] Description détaillée des fonctionnalités de base
    - [ ] Collecte de données environnementales en temps réel
    - [ ] Analyse et traitement des mesures
    - [ ] Visualisation interactive des données
    - [ ] Système d'alertes et notifications
- [ ] Présentation du prototype en développement
    - [ ] État actuel de la station de mesure
    - [ ] Avancement du backend et des bases de données
    - [ ] Maquettes du dashboard

## Dimanche (Troisième jour)

### Volet 5: Focus sur les données (à compléter pour 8h30)

- [ ] Inventaire détaillé des sources de données utilisées
    - [ ] Données capteurs: CO₂, NO₂, PM10/PM2.5, température
    - [ ] Open Data: qualité de l'air Wallonie, météo IRM
    - [ ] Images satellites: cartographie thermique
- [ ] Explication de l'utilisation et du traitement des données
    - [ ] ETL et pipeline de données
    - [ ] Algorithmes de fusion et d'enrichissement
    - [ ] Modèles prédictifs appliqués
- [ ] Stratégies de sécurité et de respect de la vie privée
    - [ ] Anonymisation des données sensibles
    - [ ] Sécurisation des transmissions et du stockage
    - [ ] Conformité RGPD

### Volet 6: Technologies du prototype (à compléter pour 8h30 également)

- [ ] Description complète du stack technologique
    - [ ] Hardware: ESP32, capteurs SDS011, MH-Z19B, DHT22
    - [ ] Communication: MQTT, LoRaWAN (zones sans WiFi)
    - [ ] Backend: Node.js, InfluxDB, MongoDB
    - [ ] IA/ML: TensorFlow, Scikit-Learn
    - [ ] Frontend: Blazor, Leaflet.js, OpenStreetMap
- [ ] Détail des fonctionnalités implémentées dans le prototype
    - [ ] Acquisition de données environnementales
    - [ ] Stockage et traitement en temps réel
    - [ ] Visualisations interactives
    - [ ] Prédictions et alertes (si temps disponible)
- [ ] Plan des développements futurs
    - [ ] Évolution du réseau de capteurs
    - [ ] Fonctionnalités avancées d'IA
    - [ ] Interface mobile pour citoyens

### Volet 7: Résumé du projet (à compléter pour 8h30 également)

- [ ] Synthèse du projet en une phrase claire
- [ ] Identification précise du public cible et de ses besoins
- [ ] Description concise de la solution apportée
- [ ] Présentation de l'impact sociétal et environnemental attendu
- [ ] Points forts et aspects innovants du projet

### Finalisation et présentation

- [ ] Tests finaux et corrections de bugs
    - [ ] Vérification du flux complet de données
    - [ ] Tests de fiabilité des capteurs
    - [ ] Validation des visualisations et prédictions
- [ ] Préparation de la démonstration
    - [ ] Installation des stations sur le lieu de présentation
    - [ ] Configuration du dashboard sur l'écran de présentation
    - [ ] Tests de la démo live
- [ ] Élaboration du pitch final
    - [ ] Structure du discours et arguments clés
    - [ ] Répartition des rôles pour la présentation
    - [ ] Préparation aux questions du jury

## Après le hackathon

### Volet 8: Poursuite post-hackathon (si souhaité)

- [ ] Définition des objectifs à court et moyen terme
    - [ ] Amélioration du prototype
    - [ ] Développement de fonctionnalités additionnelles
    - [ ] Déploiement pilote dans un quartier/ville
- [ ] Formalisation du niveau d'engagement de chaque membre
    - [ ] Rôles et responsabilités
    - [ ] Temps de contribution estimé
- [ ] Élaboration d'un plan d'action post-hackathon
    - [ ] Jalons et échéances
    - [ ] Ressources nécessaires
    - [ ] Partenariats potentiels
- [ ] Réflexion sur la structure juridique et le modèle économique
    - [ ] Forme juridique envisagée
    - [ ] Sources de financement potentielles
    - [ ] Stratégie de propriété intellectuelle

## Échéancier CitOfWal Canvas

| Étape   | Échéance           | Contenu                    |
|---------|--------------------|----------------------------|
| Volet 1 | Vendredi 23h       | Composition d'équipe       |
| Volet 2 | Samedi 9h30        | Idéation                   |
| Volet 3 | Samedi 9h30        | Périmètre du projet        |
| Volet 4 | Samedi 19h         | Caractéristiques du projet |
| Volet 5 | Dimanche 8h30      | Focus sur les données      |
| Volet 6 | Dimanche 8h30      | Technologies du prototype  |
| Volet 7 | Dimanche 8h30      | Résumé du projet           |
| Volet 8 | Après le hackathon | Poursuite post-hackathon   |

## Répartition des tâches par équipe

### Équipe Hardware/IoT

- Configuration et assemblage des stations ESP32
- Programmation du firmware de communication MQTT
- Calibration des capteurs environnementaux
- Tests de fiabilité et d'autonomie des stations

### Équipe Backend

- Mise en place du broker MQTT et des bases de données
- Développement des services d'ingestion et d'API
- Intégration des données externes (Open Data)
- Configuration de la sécurité et de l'authentification

### Équipe Data Science

- Exploration et préparation des jeux de données
- Développement des modèles prédictifs pour pollution/température
- Algorithmes de détection d'anomalies
- Fusion de données multi-sources (capteurs, open data, satellites)

### Équipe Frontend

- Conception UX/UI des dashboards (municipalités et citoyens)
- Développement de l'application Blazor
- Implémentation des visualisations interactives
- Intégration de la cartographie avec Leaflet.js et OpenStreetMap
