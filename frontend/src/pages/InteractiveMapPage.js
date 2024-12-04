import React, { useEffect, useState } from "react";
import L from "leaflet";
import axios from "axios";

const InteractiveMapPage = () => {
  const [activities, setActivities] = useState([]);
  const [map, setMap] = useState(null); // État pour la carte

  // Récupérer les activités avec leurs coordonnées depuis la base de données
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/activites"); // Remplace par l'endpoint approprié
        setActivities(response.data); // Assurez-vous que la réponse contient les données avec latitude et longitude
      } catch (error) {
        console.error("Erreur lors de la récupération des activités:", error);
      }
    };
    fetchActivities();
  }, []);

  // Initialiser la carte après le montage du composant
  useEffect(() => {
    if (activities.length > 0 && !map) { // Vérifie si la carte n'est pas déjà initialisée
      // Initialiser la carte Leaflet
      const newMap = L.map("map").setView([48.8566, 2.3522], 13); // Défini un point central pour la carte (ici Paris)

      // Ajouter un fond de carte
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
      }).addTo(newMap);

      setMap(newMap); // Mettre à jour l'état de la carte une fois qu'elle est créée

      // Ajouter des marqueurs pour chaque activité
      activities.forEach((activity) => {
        if (activity.latitude && activity.longitude) {
          L.marker([activity.latitude, activity.longitude])
            .addTo(newMap)
            .bindPopup(`<b>${activity.nom_organisme}</b><br>${activity.description_activite}`);
        }
      });
    }
  }, [activities, map]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Carte des Activités</h2>
      <div id="map" style={styles.map}></div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    lineHeight: "1.6",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  map: {
    height: "500px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  },
};

export default InteractiveMapPage;
