import React from "react";
import { Link } from "react-router-dom";
 

const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Bienvenue sur le guide des loisirs</h1>
            <p style={styles.description}>
                Découvrez les activités disponibles dans la région de Rennes et ses alentours.
            </p>
            <nav>
                <Link to="/mon-compte">Mon Compte</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        marginBottom: "20px",
        textAlign: "center",
    },
    title: {
        color: "#333",
        fontSize: "2rem",
        marginBottom: "10px",
    },
    description: {
        color: "#555",
        fontSize: "1.2rem",
    },
};

export default Header;
