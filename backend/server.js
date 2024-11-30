const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const API_URL = "https://data.rennesmetropole.fr/api/explore/v2.1/catalog/datasets/loisirs-az-4bis/records?limit=100";

app.get("/api/loisirs", async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        res.json(response.data);
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API :", error);
        res.status(500).send("Erreur serveur");
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur backend démarré sur le port ${PORT}`));
