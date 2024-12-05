# Dockerfile
FROM node:16

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application
COPY . .

# Exécuter le script pour remplir la base de données avant de démarrer le serveur
CMD sh -c "node ./bd_script.js && node server.js"
