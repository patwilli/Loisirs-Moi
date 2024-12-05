# Utilisation de l'image Node.js
FROM node:16

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier uniquement les fichiers nécessaires pour installer les dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers dans le conteneur
COPY . .

# Copiez le script wait-for-it.sh dans le répertoire backend
COPY wait-for-it.sh /app/

# Assurez-vous qu'il est exécutable
RUN chmod +x /app/wait-for-it.sh

# Exposer le port utilisé par l'application
EXPOSE 5000

# Commande à exécuter au démarrage du conteneur
CMD sh -c "/app/wait-for-it.sh mysql:3306 -- npx sequelize-cli db:migrate && node ./bd_script.js && node server.js"
