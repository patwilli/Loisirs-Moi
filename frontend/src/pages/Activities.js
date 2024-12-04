import React, { useState, useEffect } from "react";
import axios from "axios";
import ActivitiesList from "../components/ActivitiesList";

const Home = () => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/activites")
            .then((response) => {
                console.log(response.data); 
                setActivities(response.data || []);
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
