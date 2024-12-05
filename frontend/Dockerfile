FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier uniquement les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances du frontend
RUN npm install

# Copier tout le reste du code dans le conteneur
COPY . .

# Exposer le port utilisé par le frontend
EXPOSE 3000

# Commande par défaut pour lancer le frontend
CMD ["npm", "start"]
