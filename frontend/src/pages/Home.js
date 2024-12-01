import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const containerStyle = {
        textAlign: "center",
        padding: "40px 20px",
        backgroundColor: "",
        fontFamily: "'Arial', sans-serif",
    };

    const titleStyle = {
        fontSize: "3rem",
        fontWeight: "bold",
        color: "#ffbd59",
        marginBottom: "20px",
    };

    const descriptionStyle = {
        fontSize: "1.2rem",
        margin: "20px auto",
        maxWidth: "800px",
        lineHeight: "1.8",
        color: "#555",
    };

    const galleryStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "40px",
    };

    const cardStyle = {
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "300px",
        textAlign: "center",
        overflow: "hidden",
    };

    const imageStyle = {
        width: "100%",
        height: "200px",
        objectFit: "cover",
    };

    const cardTitleStyle = {
        fontSize: "1.5rem",
        fontWeight: "bold",
        margin: "15px 0",
    };

    const buttonStyle = {
        display: "inline-block",
        marginTop: "30px",
        padding: "15px 30px",
        fontSize: "1.2rem",
        backgroundColor: "#ffbd59",
        color: "white",
        borderRadius: "5px",
        textDecoration: "none",
        transition: "background-color 0.3s ease",
        cursor: "pointer",
    };

    const buttonHoverStyle = {
        backgroundColor: "#1769aa",
    };

    // Gestion hover bouton
    const handleMouseEnter = (e) => {
        Object.assign(e.target.style, buttonHoverStyle);
    };

    const handleMouseLeave = (e) => {
        Object.assign(e.target.style, buttonStyle);
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Bienvenue sur Loisirs & Moi !</h1>
            <p style={descriptionStyle}>
                Découvrez une sélection d'activités adaptées à vos envies : des sports 
                dynamiques, des activités artistiques captivantes, et bien plus encore.
                Explorez et choisissez ce qui vous passionne !
            </p>

            {/* Galerie d'illustrations */}
            <div style={galleryStyle}>
                <div style={cardStyle}>
                    <img
                        src={require("../assets/sports.jpg")}
                        alt="Activité sportive"
                        style={imageStyle}
                    />
                    <h2 style={cardTitleStyle}>Sport</h2>
                    <p style={descriptionStyle}>Explorez des activités physiques pour tous les goûts.</p>
                </div>
                <div style={cardStyle}>
                    <img
                        src={require("../assets/arts.jpg")}
                        alt="Activité artistique"
                        style={imageStyle}
                    />
                    <h2 style={cardTitleStyle}>Art</h2>
                    <p style={descriptionStyle}>Laissez libre cours à votre créativité avec des ateliers d'art.</p>
                </div>
                <div style={cardStyle}>
                    <img
                        src={require("../assets/autres.jpg")}
                        alt="Autre activité"
                        style={imageStyle}
                    />
                    <h2 style={cardTitleStyle}>Autres Loisirs</h2>
                    <p style={descriptionStyle}>Détendez-vous avec des expériences uniques et enrichissantes.</p>
                </div>
            </div>

            {/* Bouton vers les activités */}
            <Link
                to="/activities"
                style={buttonStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Voir les activités
            </Link>
        </div>
    );
};

export default Home;
