#!/bin/bash

# Exécuter les migrations avec sequelize-cli
npx sequelize-cli db:migrate || { echo "Migrations échouées, arrêt du conteneur"; exit 1; }

# Lancer l'application après la migration
npm start
