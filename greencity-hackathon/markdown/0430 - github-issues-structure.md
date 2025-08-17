# Structure des Issues et Labels GitHub pour le projet GreenCity

## 1. Structure des Issues

Chaque issue GitHub devrait être créée avec la structure suivante pour maintenir la cohérence et faciliter le suivi du
projet.

### Template d'Issue pour le développement

```markdown
## Description
[Description concise et claire de la tâche à accomplir]

## Objectifs
- [Objectif principal de cette tâche]
- [Impact attendu sur le projet]

## Tâches
- [ ] Sous-tâche 1
- [ ] Sous-tâche 2
- [ ] Sous-tâche 3

## Critères d'acceptation
- [Critère 1 permettant de valider que la tâche est terminée]
- [Critère 2 permettant de valider que la tâche est terminée]

## Ressources
- [Lien vers documentation pertinente]
- [Références techniques]
- [Lien vers design/wireframe si applicable]

## Notes additionnelles
[Informations complémentaires, contraintes, dépendances]
```

### Template d'Issue pour les bugs

```markdown
## Description du bug
[Description claire et concise du bug rencontré]

## Comment reproduire
1. [Étape 1]
2. [Étape 2]
3. [Étape 3]
4. [Erreur observée]

## Comportement attendu
[Description du comportement correct qui devrait se produire]

## Captures d'écran
[Si applicable, ajouter des captures d'écran]

## Environnement
- Appareil: [ex. ESP32, Navigateur Chrome]
- Version: [ex. v1.0.2]
- OS: [si applicable]

## Gravité
- [ ] Bloquant
- [ ] Majeur
- [ ] Mineur
- [ ] Cosmétique
```

### Template d'Issue pour les améliorations

```markdown
## Amélioration proposée
[Description claire de l'amélioration]

## Motivation
[Pourquoi cette amélioration est-elle nécessaire?]

## Bénéfices attendus
- [Bénéfice 1]
- [Bénéfice 2]

## Implémentation suggérée
[Si vous avez des idées sur comment implémenter cette amélioration]

## Alternatives considérées
[Autres approches possibles et pourquoi elles n'ont pas été retenues]
```

## 2. Liste des Labels GitHub avec codes couleur

### Labels par composant

| Label           | Code Couleur | Description                                           |
|-----------------|--------------|-------------------------------------------------------|
| `hardware`      | `#D93F0B`    | Tâches liées au matériel (ESP32, capteurs, etc.)      |
| `backend`       | `#0E8A16`    | Développement backend (API, serveur, base de données) |
| `frontend`      | `#1D76DB`    | Interface utilisateur, visualisations et dashboard    |
| `data`          | `#6F42C1`    | Traitement, analyse et intégration des données        |
| `documentation` | `#0075CA`    | Documentation technique et utilisateur                |

### Labels par type de tâche

| Label         | Code Couleur | Description                                 |
|---------------|--------------|---------------------------------------------|
| `bug`         | `#D73A4A`    | Problème à résoudre                         |
| `enhancement` | `#A2EEEF`    | Amélioration d'une fonctionnalité existante |
| `feature`     | `#84B6EB`    | Nouvelle fonctionnalité à développer        |
| `tech-debt`   | `#8B8B8B`    | Refactoring ou nettoyage de code            |
| `research`    | `#FBCA04`    | Recherche et exploration technique          |

### Labels spécifiques au projet GreenCity

| Label              | Code Couleur | Description                                                |
|--------------------|--------------|------------------------------------------------------------|
| `sensors`          | `#FFA500`    | Configuration et intégration des capteurs environnementaux |
| `visualization`    | `#5319E7`    | Graphiques, cartes et tableaux de bord                     |
| `machine-learning` | `#FBCA04`    | Modèles prédictifs et analyse de données                   |
| `api`              | `#006B75`    | Développement d'APIs et d'interfaces de service            |
| `ux-design`        | `#BFD4F2`    | Conception de l'expérience utilisateur                     |

### Labels de priorité et statut

| Label              | Code Couleur | Description                                                 |
|--------------------|--------------|-------------------------------------------------------------|
| `priority-high`    | `#FF0000`    | Tâche de haute priorité nécessitant une attention immédiate |
| `priority-medium`  | `#FFD700`    | Tâche de priorité moyenne                                   |
| `priority-low`     | `#C2E0C6`    | Tâche de faible priorité                                    |
| `blocked`          | `#E99695`    | Tâche bloquée par une dépendance externe                    |
| `good-first-issue` | `#7057FF`    | Tâche accessible pour les nouveaux contributeurs            |
| `help-wanted`      | `#008672`    | Tâche nécessitant une expertise particulière                |

## 3. Exemple d'Issues par catégorie

### Composant Hardware

```markdown
Titre: [Hardware] Configuration des capteurs ESP32 avec MQTT

## Description
Configurer les capteurs ESP32 pour collecter les données environnementales et les transmettre via MQTT au backend.

## Objectifs
- Établir une connexion fiable entre capteurs et serveur
- Assurer la précision des mesures environnementales

## Tâches
- [ ] Installer les bibliothèques ESP32 nécessaires
- [ ] Configurer les capteurs (CO2, PM2.5, température)
- [ ] Mettre en place la connexion WiFi
- [ ] Configurer le client MQTT
- [ ] Implémenter la transmission des données au format JSON
- [ ] Optimiser la consommation d'énergie

## Critères d'acceptation
- Les capteurs transmettent des données valides toutes les 5 minutes
- Le format JSON est correctement structuré
- La connexion est rétablie automatiquement en cas de perte

## Ressources
- Documentation ESP32: [lien]
- Bibliothèque MQTT PubSubClient: [lien]
- Format de données attendu: [spécification]
```

### Composant Backend

```markdown
Titre: [Backend] Mise en place d'InfluxDB pour séries temporelles

## Description
Configurer InfluxDB comme base de données time-series pour stocker les données environnementales collectées.

## Objectifs
- Stocker efficacement les données de capteurs en série temporelle
- Permettre des requêtes rapides pour alimenter le dashboard

## Tâches
- [ ] Installer et configurer InfluxDB
- [ ] Créer les buckets et rétention policies
- [ ] Développer l'API de réception des données MQTT
- [ ] Implémenter les conversions et validations des données
- [ ] Développer les endpoints pour les requêtes d'agrégation
- [ ] Mettre en place la sécurité et l'authentification

## Critères d'acceptation
- L'insertion des données a une latence < 100ms
- Les requêtes d'agrégation s'exécutent en < 500ms
- Le système peut supporter 100 capteurs envoyant des données toutes les 5 min
```

### Composant Frontend

```markdown
Titre: [Frontend] Développement de la carte thermique des îlots de chaleur

## Description
Créer une visualisation cartographique interactive montrant les îlots de chaleur urbains basée sur les données collectées.

## Objectifs
- Permettre aux utilisateurs de visualiser les zones de chaleur excessive
- Offrir des filtres temporels (heure/jour/mois)

## Tâches
- [ ] Intégrer OpenStreetMap avec Leaflet.js
- [ ] Développer la couche de visualisation thermique
- [ ] Implémenter les contrôles de filtrage temporel
- [ ] Créer la légende et les informations contextuelles
- [ ] Optimiser les performances de rendu pour appareils mobiles

## Critères d'acceptation
- La carte se charge en moins de 2 secondes
- Les gradients de couleur sont accessibles (daltonisme)
- L'interface est responsive et fonctionne sur mobile
```
