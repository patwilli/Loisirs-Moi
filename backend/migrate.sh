#!/bin/bash

# Exécuter les migrations avec sequelize-cli
npm run migrate || { echo "Migrations échouées, arrêt du conteneur"; exit 1; }
# node bd_script.js
# Lancer l'application après la migration
npm start
