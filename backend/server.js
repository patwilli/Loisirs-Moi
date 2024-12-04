const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require('body-parser');
const activitesRoutes = require('./routes/activites'); 

const app = express();

// Middleware CORS
app.use(cors({
    origin: 'http://localhost:3000', // Autoriser uniquement 3000
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Méthodes autorisées
    allowedHeaders: ['Content-Type', 'Authorization'], // En-têtes autorisés
}));

// Middleware pour parser le JSON
app.use(bodyParser.json());

// Utilisation des routes pour les activités
app.use('/api', activitesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur backend démarré sur le port ${PORT}`));
