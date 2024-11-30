import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ActivityDetails = () => {
    const { uniqueId } = useParams(); // Récupère l'ID unique depuis l'URL
    const [activity, setActivity] = useState(null);

    useEffect(() => {
        const fetchActivity = async () => {
            try {
                const response = await fetch(`/api/loisirs/${uniqueId}`);
                if (response.ok) {
                    const data = await response.json();
                    setActivity(data);
                } else {
                    console.error("Activité non trouvée");
                }
            } catch (error) {
                console.error("Erreur lors du chargement des détails :", error);
            }
        };

        fetchActivity();
    }, [uniqueId]);

    if (!activity) {
        return <p>Chargement des détails de l'activité...</p>;
    }

    return (
        <div>
            <h2>{activity.nom_organisme}</h2>
            <p>{activity.description_activite || "Description non disponible"}</p>
            <p>{activity.tarif || "Tarifs non disponibles"}</p>
            <p>{activity.lieu_activite || "Lieu non disponible"}</p>
        </div>
    );
};

export default ActivityDetails;
