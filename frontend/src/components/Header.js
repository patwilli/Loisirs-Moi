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
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    };

    const headerContentStyle = {
        maxWidth: "1200px",
        margin: "0 auto",
    };

    const videoStyle = {
        width: "150px",
        height: "auto",
        marginBottom: "10px",
        borderRadius: "50%",
        border: "2px solid white",
    };

    const navBarStyle = {
        marginTop: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "25px",
    };

    const linkStyle = {
        textDecoration: "none",
        color: "white",
        fontSize: "1.2rem",
        fontWeight: "bold",
        transition: "color 0.3s ease, transform 0.3s ease",
    };

    const linkHoverStyle = {
        color: "#f8f8f8",
        textDecoration: "underline",
        transform: "scale(1.1)", // Effet de zoom
    };

    const handleMouseEnter = (e) => {
        Object.assign(e.target.style, linkHoverStyle);
    };

    const handleMouseLeave = (e) => {
        Object.assign(e.target.style, linkStyle);
    };

    return (
        <header style={headerStyle}>
            <div style={headerContentStyle}>
                {/* Logo vidéo stylisé */}
                <video
                    src={require("../assets/logo.mp4")}
                    style={videoStyle}
                    autoPlay
                    loop
                    muted
                />
                {/* Barre de navigation améliorée */}
                <nav style={navBarStyle}>
                    {["Accueil", "Loisirs", "Carte", "Mes favoris", "A propos", "Recherche"].map((item, index) => (
                        <Link
                            key={index}
                            to={`/${item}`}
                            style={linkStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {item.replace("-", " ")}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
