# Loisirs & Moi

**Loisirs & Moi** est une plateforme permettant aux utilisateurs de découvrir, rechercher et interagir avec des activités de loisirs autour d'eux. Le projet est développé en utilisant une architecture moderne avec des technologies comme React, Node.js, MySQL et Docker.

---

## 📋 Fonctionnalités

- **Page d'accueil** : Présentation des activités proposées avec une interface visuelle attrayante.
- **Recherche d'activités** : Filtrer les activités par nom, type ou localisation.
- **Liste des activités** : Affichage des activités récupérées via une API.
- **Détails des activités** : Consultation des informations complètes d'une activité spécifique.
- **Carte interactive** : Visualisation des emplacements des activités sur une carte dynamique.
- **Système de favoris** : Enregistrer et gérer les activités préférées des utilisateurs.

---

## 🛠️ Technologies utilisées

### Frontend
- **Framework** : React

### Backend
- **Serveur** : Node.js (Express)
- **Base de données** : MySQL
- **ORM** : Sequelize

### Outils & Déploiement
- **Conteneurisation** : Docker
- **Gestion des dépendances** : npm
- **Gestion de scripts** : `wait-for-it.sh` pour orchestrer les dépendances au démarrage.

---

## 🚀 Installation et utilisation

   ```bash
   git clone https://github.com/patwilli/Loisirs-Moi.git
   cd loisirs-moi
   docker compose up -d
