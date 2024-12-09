FROM node:16
WORKDIR /app
COPY package*.json ./


COPY . .
RUN npm install && npm cache clean --force

EXPOSE 3000
CMD ["npm", "start"]