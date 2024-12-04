import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    // Charger les favoris depuis le localStorage
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    // Supprimer un favori
    const removeFavorite = (id) => {
        const updatedFavorites = favorites.filter((activity) => activity.id !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Mes Activités Favoris</h2>
            {favorites.length === 0 ? (
                <p style={styles.noFavorites}>Aucun favori pour le moment.</p>
            ) : (
                <ul style={styles.list}>
                    {favorites.map((activity) => (
                        <li key={activity.id} style={styles.card}>
                            <h3 style={styles.activityTitle}>{activity.nom_organisme}</h3>
                            <p style={styles.description}>{activity.description_activite}</p>
                            <div style={styles.buttons}>
                                <Link
                                    to={`/loisirs/details/${activity.id}`}
                                    style={styles.detailsButton}
                                >
                                    Voir les détails
                                </Link>
                                <button
                                    onClick={() => removeFavorite(activity.id)}
                                    style={styles.removeButton}
                                >
                                    Retirer des favoris
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "'Arial', sans-serif",
    },
    title: {
        fontSize: "2rem",
        textAlign: "center",
        color: "#333",
        marginBottom: "20px",
    },
    noFavorites: {
        textAlign: "center",
        color: "#777",
        fontSize: "1.2rem",
        marginTop: "50px",
    },
    list: {
        listStyleType: "none",
        padding: 0,
        margin: 0,
    },
    card: {
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: "20px",
        padding: "15px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    activityTitle: {
        fontSize: "1.5rem",
        color: "#333",
        marginBottom: "10px",
    },
    description: {
        color: "#555",
        marginBottom: "15px",
    },
    buttons: {
        display: "flex",
        justifyContent: "space-between",
    },
    detailsButton: {
        backgroundColor: "#007BFF",
        color: "#fff",
        textDecoration: "none",
        padding: "10px 15px",
        borderRadius: "4px",
        fontSize: "0.9rem",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    },
    removeButton: {
        backgroundColor: "#FF4C4C",
        color: "#fff",
        padding: "10px 15px",
        borderRadius: "4px",
        fontSize: "0.9rem",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    },
    detailsButtonHover: {
        backgroundColor: "#0056b3",
    },
    removeButtonHover: {
        backgroundColor: "#cc0000",
    },
};

export default Favorites;
