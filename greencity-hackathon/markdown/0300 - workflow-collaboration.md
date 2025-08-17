# Établissement du workflow de collaboration - Projet GreenCity

Ce guide détaille les étapes pour mettre en place un environnement de collaboration efficace pour votre équipe pendant
le hackathon Citizens of Wallonia 2025.

## 1. Configuration du dépôt Git

### Objectif

Mettre en place un système de contrôle de version pour gérer efficacement le code source du projet.

### Étapes

1. **Création du dépôt**
    - Créer un nouveau dépôt sur GitHub/GitLab/Bitbucket
    - Nom recommandé: `greencity-hackathon-2025`
    - Description: "Solution de monitoring environnemental pour le challenge Pyxion - Hackathon CitOfWal 2025"
    - Visibilité: Privé (pour l'instant, vous pourrez le rendre public après le hackathon)

2. **Structure initiale du dépôt**
   ```bash
   # Cloner le dépôt vide
   git clone [URL_DU_REPO] greencity-hackathon
   cd greencity-hackathon
   
   # Créer la structure de base
   mkdir -p src/{frontend,backend,hardware,data}
   mkdir -p docs/assets
   touch README.md .gitignore LICENSE
   ```

3. **Fichier README.md initial**
   ```markdown
   # GreenCity - Monitoring Environnemental

   Solution développée pour le challenge Pyxion lors du hackathon Citizens of Wallonia 2025.

   ## Objectif
   Créer un système de monitoring environnemental pour surveiller la pollution, la consommation énergétique et les îlots de chaleur urbains.

   ## Structure du projet
   - `src/frontend`: Interface utilisateur et visualisations
   - `src/backend`: API et traitement des données
   - `src/hardware`: Code pour les capteurs ESP32
   - `src/data`: Scripts d'intégration des données externes
   - `docs`: Documentation technique et utilisateur

   ## Équipe
   - [Membre 1] - [Rôle]
   - [Membre 2] - [Rôle]
   - [Membre 3] - [Rôle]
   - ...
   ```

4. **Fichier .gitignore approprié**
   ```
   # Fichiers de configuration locale
   .env
   .env.local
   config.json

   # Dépendances
   node_modules/
   packages/
   .venv/
   venv/
   __pycache__/
   *.pyc

   # Fichiers de build
   dist/
   build/
   *.exe
   *.bin

   # Données sensibles ou volumineuses
   *.csv
   *.xlsx
   *.db
   *.sqlite

   # Fichiers système
   .DS_Store
   Thumbs.db

   # Fichiers IDE
   .idea/
   .vscode/
   *.swp
   ```

5. **Convention de branchement**
    - `main`: Code stable et fonctionnel
    - `dev`: Branche de développement principale
    - `feature/[nom-feature]`: Pour les nouvelles fonctionnalités
    - `fix/[bug-description]`: Pour les corrections de bugs

6. **Inviter les membres de l'équipe**
    - Ajouter tous les membres comme collaborateurs
    - S'assurer que chacun a configuré son client Git local

## 2. Mise en place d'un tableau Kanban

### Objectif

Organiser et suivre les tâches du projet avec une méthode visuelle.

### Étapes avec Trello

1. **Création du tableau**
    - Créer un compte Trello (ou utiliser un compte existant)
    - Créer un nouveau tableau nommé "GreenCity - CitOfWal 2025"
    - Rendre le tableau accessible à toute l'équipe (ajouter les membres par email)

2. **Structure des colonnes**
    - **Backlog**: Toutes les tâches identifiées
    - **À faire (Sprint courant)**: Tâches prioritaires pour le sprint actuel
    - **En cours**: Tâches en cours de réalisation
    - **Revue/Test**: Tâches terminées en attente de validation
    - **Terminé**: Tâches complétées et validées

3. **Création des listes de tâches initiales**
    - **Hardware/IoT**
        - Configuration des capteurs ESP32
        - Test des capteurs environnementaux
        - Mise en place du protocole MQTT
        - ...

    - **Backend**
        - Configuration du serveur ASP.NET Core
        - Mise en place de la base de données InfluxDB
        - Développement des APIs REST
        - ...

    - **Frontend**
        - Maquettes UI du dashboard
        - Implémentation des visualisations de données
        - Intégration de la carte OpenStreetMap
        - ...

    - **Data Science**
        - Intégration des sources de données externes
        - Développement des modèles prédictifs
        - Validation des algorithmes
        - ...

4. **Template pour les cartes Trello**
    - Titre: Nom concis de la tâche
    - Description: Détails et acceptance criteria
    - Labels: Hardware, Backend, Frontend, Data, Documentation
    - Membres: Assignés à la tâche
    - Checklist: Sous-tâches spécifiques
    - Date d'échéance: Pour les tâches critiques

5. **Intégration avec GitHub** (optionnel mais recommandé)
    - Activer le Power-Up GitHub sur Trello
    - Connecter le tableau au dépôt Git
    - Permettre le lien entre commits et cartes Trello

### Alternative avec GitHub Projects

Si l'équipe préfère rester dans l'écosystème GitHub:

1. Créer un nouveau projet depuis l'onglet "Projects"
2. Choisir le template "Automated kanban"
3. Configurer les colonnes comme indiqué ci-dessus
4. Créer des issues pour chaque tâche et les lier au projet

## 3. Configuration de l'espace Google Drive partagé

### Objectif

Centraliser les documents, ressources et livrables non-code du projet.

### Étapes

1. **Création de la structure**
    - Créer un dossier racine "GreenCity - CitOfWal 2025"
    - Inviter tous les membres de l'équipe avec accès en édition
    - Créer les sous-dossiers:
        - `01_Gestion_Projet`: Documents organisationnels
        - `02_Recherche`: Recherches préliminaires et benchmarks
        - `03_Design`: Maquettes, wireframes, assets graphiques
        - `04_Données`: Datasets, documentations API, schémas
        - `05_Documentation`: Guides techniques, documentation utilisateur
        - `06_Présentation`: Slides et matériel pour le pitch final

2. **Documents essentiels à créer immédiatement**

    - **Plan de projet (Google Docs)**
        - Objectifs et scope du projet
        - Timeline des 48h avec jalons clés
        - Répartition des rôles et responsabilités

    - **Journal de bord collaboratif (Google Docs)**
        - Document chronologique pour noter les décisions, problèmes rencontrés et solutions
        - Utile pour la documentation post-hackathon et le pitch

    - **Inventaire des ressources (Google Sheets)**
        - Liste des APIs et sources de données
        - Technologies et frameworks utilisés
        - Besoins matériels spécifiques

    - **Canvas CitOfWal (Google Docs)**
        - Copie du template fourni pour le hackathon
        - À remplir progressivement selon les instructions

3. **Règles de nommage et organisation**
    - Format de nommage: `[YYYYMMDD]_[Catégorie]_[Titre]`
    - Ex: "20250404_Design_Dashboard_Mockup_V1"
    - Créer des versions plutôt que remplacer les fichiers

4. **Intégration avec les autres outils**
    - Inclure les liens vers le dépôt Git et le tableau Kanban dans le document principal
    - Ajouter les liens des documents Drive pertinents dans les cartes Trello associées

## 4. Communication d'équipe

### Objectif

Assurer une communication fluide et efficace pendant le hackathon.

### Canaux recommandés

1. **Communication instantanée**
    - Créer un groupe Discord ou Slack
    - Configurer des canaux thématiques (#général, #tech, #design, #questions)

2. **Appels et réunions**
    - Planifier des stand-ups quotidiens (matin/soir)
    - Utiliser Google Meet/Zoom pour les sessions de collaboration

3. **Documentation des décisions**
    - Noter toutes les décisions importantes dans le journal de bord
    - Partager les mises à jour de statut après chaque session de travail

## 5. Planning des 48h (exemple)

### Jour 1 (Vendredi)

- 18h-20h: Kick-off, brainstorming, division des tâches
- 20h-22h: Setup technique, premières implémentations
- 22h-00h: Développement parallèle des composants

### Jour 2 (Samedi)

- 09h-12h: Développement intensif
- 12h-13h: Stand-up, ajustements de priorités
- 13h-18h: Développement des fonctionnalités principales
- 18h-19h: Stand-up, évaluation de l'avancement
- 19h-00h: Finalisation des composants critiques

### Jour 3 (Dimanche)

- 09h-12h: Intégration des composants, tests
- 12h-14h: Correction de bugs, optimisations
- 14h-15h: Préparation du pitch et démonstration
- 15h-17h: Finalisation et répétition du pitch

## 6. Check-list de démarrage

- [X] Dépôt Git créé et partagé
- [X] Structure initiale des fichiers commitée
- [X] Tableau Kanban configuré avec les premières tâches
- [ ] Drive partagé créé avec documents essentiels
- [ ] Canaux de communication établis
- [ ] Première réunion d'équipe programmée
- [ ] Rôles et responsabilités définis pour chaque membre
- [ ] Environnements de développement individuels configurés
