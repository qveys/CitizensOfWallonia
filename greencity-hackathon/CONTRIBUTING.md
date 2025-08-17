# Guide de contribution GreenCity

## 🌱 Comment contribuer

Merci de votre intérêt pour GreenCity ! Voici comment vous pouvez nous aider à améliorer le projet.

### 1. Prérequis

- Git
- .NET SDK 8.0+
- Node.js 20+
- Docker et Docker Compose
- PlatformIO (pour le code ESP32)

### 2. Installation

```bash
# Fork et clone
git clone https://github.com/votre-username/greencity-hackathon.git
cd greencity-hackathon

# Branches
git checkout -b feature/votre-feature
```

### 3. Standards de code

#### Backend (C#)
- Suivre les conventions Microsoft
- Utiliser les nullable reference types
- Documenter avec XML comments
- Tests unitaires obligatoires

#### Frontend (Blazor)
- Composants réutilisables
- CSS modules
- Tests avec bUnit
- Accessibilité WCAG 2.1

#### IoT (Arduino/C++)
- Style Arduino standard
- Commentaires explicites
- Gestion des erreurs robuste
- Tests sur hardware réel

### 4. Processus de contribution

1. **Issues**
   - Vérifier les issues existantes
   - Créer une nouvelle issue descriptive
   - Attendre la validation des maintainers

2. **Branches**
   - `main`: production
   - `develop`: développement
   - `feature/*`: nouvelles fonctionnalités
   - `fix/*`: corrections de bugs
   - `docs/*`: documentation

3. **Commits**
   ```
   type(scope): description courte

   Description détaillée si nécessaire
   ```
   Types: feat, fix, docs, style, refactor, test, chore

4. **Pull Requests**
   - Titre clair et descriptif
   - Description détaillée
   - Screenshots/vidéos si UI/UX
   - Lier les issues concernées

### 5. Tests

```bash
# Backend
cd src/backend
dotnet test

# Frontend
cd src/frontend
npm test

# IoT
cd src/hardware
platformio test
```

### 6. Documentation

- Mettre à jour la doc technique
- Ajouter des commentaires de code
- Documenter les breaking changes
- Maintenir le changelog

### 7. Review process

1. Tests automatisés passent
2. Review par 2 maintainers
3. Validation fonctionnelle
4. Merge dans develop

### 8. Support

- Discord: [GreenCity Community](https://discord.gg/greencity)
- Email: dev@greencity.app
- Issues GitHub

## 📝 License

En contribuant, vous acceptez que votre code soit sous licence MIT.

## 🙏 Code de conduite

### Notre engagement

- Environnement bienveillant
- Respect mutuel
- Critiques constructives
- Focus sur l'objectif commun

### Comportements attendus

✅ **Encouragés**
- Langage inclusif
- Respect des opinions
- Feedback constructif
- Collaboration

❌ **Interdits**
- Harcèlement
- Discrimination
- Spam
- Trolling

### Application

Les maintainers peuvent:
- Modifier/refuser les contributions
- Bannir temporairement/définitivement
- Supprimer les contenus inappropriés

## 🌟 Reconnaissance

Les contributeurs sont listés dans:
- README.md
- Documentation
- Release notes 