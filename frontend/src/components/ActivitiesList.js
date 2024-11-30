import React from "react";

const ActivitiesList = ({ activities }) => {
    if (!activities || activities.length === 0) {
        return <p>Aucune activité disponible pour le moment.</p>;
    }

    return (
        <div style={styles.cardContainer}>
            {activities.map((activity) => {
                // Créer un identifiant unique basé sur les données disponibles
                const uniqueId = `${activity.nom_organisme}-${activity.code_postal}`;

                return (
                    <div key={uniqueId} style={styles.card}>
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
                        <a
                            href={`/activities/${encodeURIComponent(uniqueId)}`}
                            style={styles.moreInfoLink}
                        >
                            En savoir plus
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

const styles = {
    cardContainer: {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
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
