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
                const response = await fetch("http://localhost:5000/api/activites");
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
        <div style={styles.pageContainer}>
            <h2 style={styles.title}>Carte des loisirs</h2>
            <InteractiveMap activities={activities} />
        </div>
    );
};

const styles = {
    pageContainer: {
        textAlign: "center",
        padding: "20px",
    },
    title: {
        fontSize: "2rem",
        color: "#333",
        display: "inline-block",
        marginBottom: "20px",
    },
};

export default InteractiveMapPage;
