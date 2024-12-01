import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const InteractiveMap = ({ activities }) => {
    useEffect(() => {
        // Initialiser la carte
        const map = L.map("map").setView([48.111, -1.680], 12); // Coordonées par défaut sur Rennes

        // Ajouter un fond de carte (OpenStreetMap)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Ajouter les marqueurs pour chaque activité
        activities.forEach((activity) => {
            if (activity.commune) {
                const coordinates = parseCoordinates(activity.commune);
                if (coordinates) {
                    L.marker(coordinates)
                        .addTo(map)
                        .bindPopup(`
                            <strong>${activity.nom_organisme}</strong><br/>
                            ${activity.adresse_postale || "Adresse non disponible"}<br/>
                            ${activity.tarif || "Tarif non renseigné"}
                        `);
                }
            }
        });

        return () => {
            map.remove(); // Nettoyer la carte lorsqu'on quitte le composant
        };
    }, [activities]);

    // Fonction pour convertir le texte en coordonnées (à personnaliser selon l'API)
    const parseCoordinates = (commune) => {
        const mapping = {
            "La Fresnais": [48.605, -1.837],
            // Ajouter d'autres communes avec leurs coordonnées exactes
        };
        return mapping[commune] || null;
    };

    return <div id="map" style={{ height: "700px", width: "100%" }}></div>;
};

export default InteractiveMap;
