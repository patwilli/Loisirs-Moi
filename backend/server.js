const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const API_URL = "https://data.rennesmetropole.fr/api/explore/v2.1/catalog/datasets/loisirs-az-4bis/records?limit=100";

//Affichage des activites
app.get("/api/loisirs", async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        res.json(response.data);
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API :", error);
        res.status(500).send("Erreur serveur");
    }
});

//Affichage des details d une activité
app.get("/api/loisirs/:uniqueId", async (req, res) => {
    const { uniqueId } = req.params;

    try {
        const response = await axios.get(API_URL);
        const allActivities = response.data.records.map(record => record.fields);

        // Décoder l'identifiant unique et extraire les composants
        const decodedUniqueId = decodeURIComponent(uniqueId);
        const [nom_organisme, code_postal] = decodedUniqueId.split("-");

        // Recherche de l'activité correspondant à l'ID unique
        const activity = allActivities.find(
            (activity) =>
                activity.nom_organisme === nom_organisme &&
                activity.code_postal === parseInt(code_postal)
        );

        if (activity) {
            res.json(activity);
        } else {
            res.status(404).send("Activité non trouvée");
        }
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API :", error);
        res.status(500).send("Erreur serveur");
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur backend démarré sur le port ${PORT}`));
