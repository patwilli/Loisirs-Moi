import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import ActivitiesList from "../components/ActivitiesList";

const Home = () => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/loisirs")
            .then((response) => {
                console.log(response.data); // Vérifiez que les données sont bien reçues
                setActivities(response.data.results || []); // Utilisez 'results' comme source d'activités
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erreur lors de la récupération des données :", err);
                setError("Impossible de récupérer les activités pour le moment.");
                setLoading(false);
            });
    }, []);
    

    return (
        <div>
            <main>
                {loading && <p>Chargement des activités...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {!loading && !error && <ActivitiesList activities={activities} />}
            </main>
        </div>
    );
};

export default Home;
