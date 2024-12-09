FROM node:18
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install && npm cache clean --force
COPY migrate.sh ./
RUN chmod +x migrate.sh
COPY wait-for-it.sh ./
RUN chmod +x wait-for-it.sh
#RUN npm run migrate

EXPOSE 5000
CMD ["migrate.sh"]