import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const headerStyle = {
        backgroundColor: "#ffbd59", 
        color: "white",
        textAlign: "center",
        padding: "20px 0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
    };

    const headerContentStyle = {
        maxWidth: "1200px",
        margin: "0 auto",
    };

    const videoStyle = {
        width: "120px", // Taille ajustée pour la vidéo
        height: "auto", // Conserve le ratio
        marginBottom: "10px",
    };

    const navBarStyle = {
        marginTop: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "20px", // Espacement entre les liens
    };

    const linkStyle = {
        textDecoration: "none",
        color: "white",
        fontSize: "1.2rem",
        fontWeigth: "bold"
    };

    const linkHoverStyle = {
        textDecoration: "underline",
        color: "white",
    };

    // Fonction pour gérer le hover
    const handleMouseEnter = (e) => {
        Object.assign(e.target.style, linkHoverStyle);
    };

    const handleMouseLeave = (e) => {
        Object.assign(e.target.style, linkStyle);
    };

    return (
        <header style={headerStyle}>
            <div style={headerContentStyle}>
                {/* Logo en vidéo */}
                <video
                    src={require("../assets/logo.mp4")} // Chemin vers la vidéo
                    style={videoStyle}
                    autoPlay
                    loop
                    muted
                />
                {/* Barre de navigation */}
                <nav style={navBarStyle}>
                    <Link
                        to="/Accueil"
                        style={linkStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Accueil
                    </Link>
                    <Link
                        to="/Loisirs"
                        style={linkStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Loisirs
                    </Link>
                    <Link
                        to="/Cartes-des-loisirs"
                        style={linkStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Carte
                    </Link>
                    <Link
                        to="/Mes-favoris"
                        style={linkStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Favoris
                    </Link>
                    <Link
                        to="/A-propos"
                        style={linkStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        A propos
                    </Link>
                    <Link
                        to="/Recherche"
                        style={linkStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Recherche
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
