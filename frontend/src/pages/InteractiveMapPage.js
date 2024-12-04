import React, { useEffect, useState } from "react";
import InteractiveMap from "../components/InteractiveMap";

const InteractiveMapPage = () => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Récupérer les activités depuis l'API
        const fetchActivities = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/activites"); // Remplacez par l'URL réelle
                if (!response.ok) throw new Error("Erreur lors de la récupération des données");
                const data = await response.json();
                setActivities(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchActivities();
    }, []);

    if (loading) return <p>Chargement des activités...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div>
            <h1>Carte des activités</h1>
            <InteractiveMap activities={activities} />
        </div>
    );
};

export default InteractiveMapPage;
