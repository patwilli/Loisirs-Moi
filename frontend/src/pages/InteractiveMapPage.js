import React from "react";
import InteractiveMap from "../components/InteractiveMap";

const activities = [
    {
        nom_organisme: "Aquarelle Céline Dodeman",
        adresse_postale: "41 rue des Côtières",
        commune: "La Fresnais",
        tarif: "280 euros pour 30 séances de 2h",
    },
    {
        nom_organisme: "Yoga Center Rennes",
        adresse_postale: "12 rue de la Paix",
        commune: "Rennes",
        tarif: "100 euros par mois",
    },
];

const InteractiveMapPage = () => (
    <div>
        <h1>Carte des activités</h1>
        <InteractiveMap activities={activities} />
    </div>
);

export default InteractiveMapPage;
