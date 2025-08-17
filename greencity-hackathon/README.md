# 🌿 GreenCity - Monitoring Environnemental Urbain

Solution de monitoring environnemental développée pour le challenge Pyxion lors du hackathon Citizens of Wallonia 2025.

## 🎯 Objectif

GreenCity vise à résoudre trois problèmes majeurs des territoires urbains :
- 🏭 **Pollution atmosphérique** : Surveillance des concentrations de CO₂, NO₂ et particules fines (PM10/PM2.5)
- ⚡ **Consommation énergétique** : Monitoring des infrastructures publiques
- 🌡️ **Îlots de chaleur** : Cartographie thermique des zones urbaines

## 🛠️ Technologies

### Hardware & IoT
- ESP32 avec capteurs environnementaux (DHT22, CO₂, PM2.5/PM10)
- Infrastructure LoRaWAN et WiFi/4G
- Alimentation durable des capteurs

### Backend
- ASP.NET Core avec architecture Dapr
- MongoDB pour les données structurées
- InfluxDB pour les séries temporelles
- Kafka/Redis Streams pour l'ingestion temps réel

### Intelligence Artificielle
- TensorFlow et Scikit-Learn pour les prédictions
- OpenCV pour l'analyse d'images thermiques
- Modèles de séries temporelles

### Frontend
- Blazor pour les dashboards personnalisés
- OpenStreetMap avec Leaflet.js
- Interfaces adaptatives multi-publics

## 📊 Sources de données

- Qualité de l'air en Wallonie (Portail Open Data wallon)
- Consommation énergétique (OpenData Wallonie)
- Données météorologiques (IRM OpenData)
- Images satellites (Geoportail Wallonie)

## 👥 Public cible

- **Municipalités** : Tableaux de bord décisionnels
- **Citoyens** : Interface simplifiée temps réel
- **Urbanistes** : Outils de simulation d'impact
- **Scientifiques** : Accès aux données brutes

## 🚀 Installation

```bash
# Cloner le dépôt
git clone https://github.com/your-org/greencity-hackathon.git
cd greencity-hackathon

# Installation des dépendances backend
cd src/backend
dotnet restore

# Installation des dépendances frontend
cd ../frontend
npm install

# Configuration des capteurs
cd ../hardware
platformio run
```

## 📁 Structure du projet

```
greencity-hackathon/
├── src/
│   ├── frontend/     # Interface utilisateur Blazor
│   ├── backend/      # API ASP.NET Core
│   ├── hardware/     # Code ESP32 et capteurs
│   └── data/        # Scripts d'intégration données
├── docs/            # Documentation
└── tests/           # Tests unitaires et E2E
```

## 🤝 Contribution

Les contributions sont bienvenues ! Consultez notre [guide de contribution](CONTRIBUTING.md) pour plus d'informations.

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👥 Équipe

- [Membre 1] - Hardware/IoT
- [Membre 2] - Backend/Infrastructure
- [Membre 3] - Data Science/IA
- [Membre 4] - Frontend/UX

## 🔗 Liens utiles

- [Documentation technique](docs/technical.md)
- [Guide d'utilisation](docs/user-guide.md)
- [API Reference](docs/api-reference.md)
- [Architecture](docs/architecture.md) 