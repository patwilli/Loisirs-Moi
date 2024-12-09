#!/bin/bash

# Exécuter les migrations avec sequelize-cli

npm run migrate || {
    echo "Migrations échouées, arrêt du conteneur"
    exit 1
}
npm run seed
npm start
