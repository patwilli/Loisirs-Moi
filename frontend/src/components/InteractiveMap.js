import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Définir une icône personnalisée pour les marqueurs (facultatif)
const customIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png", // Remplacez l'URL si vous avez votre propre icône
    iconSize: [25, 41], // Taille de l'icône
    iconAnchor: [12, 41], // Point d'ancrage de l'icône
    popupAnchor: [1, -34], // Point d'ancrage du popup
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png", // Ombre
    shadowSize: [41, 41],
});

const InteractiveMap = ({ activities }) => {
    useEffect(() => {
        // Initialiser la carte
        const map = L.map("map").setView([48.111, -1.680], 12); // Par défaut centré sur Rennes

        // Ajouter un fond de carte (OpenStreetMap)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Ajouter les marqueurs pour chaque activité
        activities.forEach((activity) => {
            if (activity.latitude && activity.longitude) {
                // Ajouter un marqueur avec une icône personnalisée
                const marker = L.marker([activity.latitude, activity.longitude], { icon: customIcon }).addTo(map);

                // Ajouter une popup avec des informations
                marker.bindPopup(`
                    <div style="font-size: 14px;">
                        <strong>${activity.nom_organisme}</strong><br/>
                        <em>${activity.description_activite || "Description non disponible"}</em><br/>
                        ${activity.adresse_postale || "Adresse non disponible"}<br/>
                        ${activity.tarif || "Tarif non renseigné"}<br/>
                        ${activity.e_mail ? `<a href="mailto:${activity.e_mail}">${activity.e_mail}</a>` : ""}
                    </div>
                `);
            }
        });

        return () => {
            map.remove(); // Nettoyer la carte lorsqu'on quitte le composant
        };
    }, [activities]);

    return <div id="map" style={{ height: "600px", width: "100%" }}></div>;
};

export default InteractiveMap;
