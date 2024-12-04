import React from "react";
import { Link } from "react-router-dom";

const ActivitiesList = ({ activities }) => {
    if (!activities || activities.length === 0) {
        return <p>Aucune activité disponible pour le moment.</p>;
    }

    return (
        <div>
            <h3 style={styles.title}>Parcourez l'ensemble des activités disponibles et trouvez celle qui vous correspond !</h3>
            <div style={styles.cardContainer}>
                {activities.map((activity) => {
                    return (
                        <div key={activity.id} style={styles.card}>
                            <h3 style={styles.activityName}>{activity.nom_organisme}</h3>
                            <p style={styles.activityDetails}>
                                {activity.activite || "Type d'activité non renseigné"}
                            </p>
                            <p style={styles.activityDetails}>
                                {activity.niveau_de_l_activite || "Niveau non renseigné"}
                            </p>
                            <p style={styles.activityDetails}>
                                {activity.tarif || "Tarifs non renseignés"}
                            </p>
                            <Link
                                to={`/loisirs/details/${activity.id}`}
                                style={styles.moreInfoLink}
                            >
                                En savoir plus
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const styles = {
    title: {
        textAlign: "center",
        fontSize: "1.5rem",
        color: "#333",
        margin: "20px 0",
    },
    cardContainer: {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 20px",
    },
    card: {
        width: "250px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        padding: "15px",
        backgroundColor: "#fff",
        textAlign: "center",
    },
    activityName: {
        fontSize: "1.2rem",
        color: "#333",
        marginBottom: "10px",
    },
    activityDetails: {
        fontSize: "0.9rem",
        color: "#555",
        marginBottom: "10px",
    },
    moreInfoLink: {
        color: "#FF9800",
        textDecoration: "none",
        fontSize: "0.9rem",
        marginTop: "10px",
    },
};

export default ActivitiesList;
