# API Reference GreenCity

## 🔑 Authentification

```bash
# Obtenir un token JWT
POST /api/v1/auth/token
{
  "email": "user@example.com",
  "password": "secret"
}

# Réponse
{
  "token": "eyJhbGciOiJ...",
  "expires_in": 3600
}
```

## 📊 Mesures environnementales

### Obtenir les dernières mesures
```bash
GET /api/v1/measurements/latest
Authorization: Bearer {token}

# Paramètres
?location=50.8503,4.3517  # Latitude, Longitude
?radius=1000              # Rayon en mètres
?types=co2,no2,pm25      # Types de mesures

# Réponse
{
  "timestamp": "2025-04-05T10:30:00Z",
  "measurements": [
    {
      "type": "co2",
      "value": 415.2,
      "unit": "ppm",
      "location": {
        "lat": 50.8503,
        "lon": 4.3517
      }
    }
  ]
}
```

### Historique des mesures
```bash
GET /api/v1/measurements/history
Authorization: Bearer {token}

# Paramètres
?start=2025-04-01T00:00:00Z
?end=2025-04-05T23:59:59Z
?interval=1h
?types=temperature,humidity

# Réponse
{
  "data": [
    {
      "timestamp": "2025-04-01T00:00:00Z",
      "values": {
        "temperature": 22.5,
        "humidity": 45
      }
    }
  ]
}
```

## 🔮 Prédictions

### Prévisions pollution
```bash
GET /api/v1/predictions/pollution
Authorization: Bearer {token}

# Paramètres
?location=50.8503,4.3517
?horizon=24h              # Horizon de prédiction

# Réponse
{
  "predictions": [
    {
      "timestamp": "2025-04-06T10:00:00Z",
      "co2": 425.1,
      "no2": 45.2,
      "pm25": 15.3,
      "confidence": 0.85
    }
  ]
}
```

## 🌡️ Îlots de chaleur

### Carte thermique
```bash
GET /api/v1/heatmap
Authorization: Bearer {token}

# Paramètres
?bounds=50.8,4.3,50.9,4.4  # SW et NE coords
?resolution=100            # Points par côté

# Réponse
{
  "timestamp": "2025-04-05T14:00:00Z",
  "grid": [
    {
      "lat": 50.8503,
      "lon": 4.3517,
      "temperature": 24.5,
      "intensity": 0.8
    }
  ]
}
```

## ⚡ Consommation énergétique

### Données en temps réel
```bash
GET /api/v1/energy/realtime
Authorization: Bearer {token}

# Paramètres
?building_id=123
?metrics=consumption,power

# Réponse
{
  "timestamp": "2025-04-05T10:30:00Z",
  "metrics": {
    "consumption": 45.2,
    "power": 5.4
  }
}
```

## 🔔 Alertes

### Configuration des alertes
```bash
POST /api/v1/alerts/config
Authorization: Bearer {token}

# Corps de la requête
{
  "type": "pollution",
  "metric": "pm25",
  "threshold": 50,
  "condition": "greater_than",
  "channels": ["email", "sms"]
}

# Réponse
{
  "alert_id": "abc123",
  "status": "active"
}
```

### Historique des alertes
```bash
GET /api/v1/alerts/history
Authorization: Bearer {token}

# Paramètres
?start=2025-04-01
?end=2025-04-05
?status=triggered

# Réponse
{
  "alerts": [
    {
      "id": "abc123",
      "type": "pollution",
      "triggered_at": "2025-04-03T15:20:00Z",
      "value": 55.2,
      "threshold": 50
    }
  ]
}
```

## 📈 Statistiques

### Agrégations
```bash
GET /api/v1/stats/aggregate
Authorization: Bearer {token}

# Paramètres
?metric=co2
?function=avg,max
?group_by=hour
?start=2025-04-01
?end=2025-04-05

# Réponse
{
  "results": [
    {
      "timestamp": "2025-04-01T00:00:00Z",
      "avg": 412.5,
      "max": 450.2
    }
  ]
}
```

## Codes d'erreur

| Code | Description |
|------|-------------|
| 400  | Requête invalide |
| 401  | Non authentifié |
| 403  | Non autorisé |
| 404  | Ressource non trouvée |
| 429  | Trop de requêtes |
| 500  | Erreur serveur |

## Limites d'utilisation

- Rate limit: 1000 requêtes/heure
- Taille max requête: 1MB
- Pagination: 100 items max par page
- Rétention données: 12 mois 