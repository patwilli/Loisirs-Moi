import React, { useState } from "react";

const Search = () => {
    const containerStyle = {
        maxWidth: "900px",
        margin: "50px auto",
        padding: "20px",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    };

    const titleStyle = {
        textAlign: "center",
        fontSize: "2.5rem",
        color: "#ffbd59",
        marginBottom: "30px",
        fontWeight: "600",
    };

    const formStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "30px",
    };

    const rowStyle = {
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
    };

    const fieldContainerStyle = {
        flex: "1",
        display: "flex",
        flexDirection: "column",
    };

    const labelStyle = {
        fontSize: "1.1rem",
        fontWeight: "500",
        marginBottom: "10px",
        color: "#555",
    };

    const selectStyle = {
        padding: "10px",
        fontSize: "1rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
        color: "#333",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "border-color 0.3s",
    };

    const selectHoverStyle = {
        borderColor: "#ffbd59",
    };

    const buttonStyle = {
        padding: "15px",
        fontSize: "1.2rem",
        color: "white",
        backgroundColor: "#ffbd59",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        textAlign: "center",
        marginTop: "20px",
    };

    const buttonHoverStyle = {
        backgroundColor: "#1769aa",
    };

    const [formData, setFormData] = useState({
        thematique: "",
        activite: "",
        commune: "",
        ageOrHandicap: "",
    });

    const handleMouseEnter = (e) => {
        if (e.target.tagName === "BUTTON") {
            Object.assign(e.target.style, buttonHoverStyle);
        } else {
            Object.assign(e.target.style, selectHoverStyle);
        }
    };

    const handleMouseLeave = (e) => {
        if (e.target.tagName === "BUTTON") {
            Object.assign(e.target.style, buttonStyle);
        } else {
            Object.assign(e.target.style, selectStyle);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Recherche effectuée avec : " + JSON.stringify(formData, null, 2));
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Rechercher une Activité</h1>
            <form style={formStyle} onSubmit={handleSubmit}>
                {/* Première ligne : Thématique et Activités */}
                <div style={rowStyle}>
                    <div style={fieldContainerStyle}>
                        <label style={labelStyle} htmlFor="thematique">
                            Thématique :
                        </label>
                        <select
                            id="thematique"
                            name="thematique"
                            style={selectStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            value={formData.thematique}
                            onChange={handleChange}
                        >
                            <option value="">Sélectionnez une thématique</option>
                            <option value="sport">Sport</option>
                            <option value="art">Art</option>
                            <option value="nature">Nature</option>
                        </select>
                    </div>
                    <div style={fieldContainerStyle}>
                        <label style={labelStyle} htmlFor="activite">
                            Activité :
                        </label>
                        <select
                            id="activite"
                            name="activite"
                            style={selectStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            value={formData.activite}
                            onChange={handleChange}
                        >
                            <option value="">Sélectionnez une activité</option>
                            <option value="randonnée">Randonnée</option>
                            <option value="peinture">Peinture</option>
                            <option value="escalade">Escalade</option>
                        </select>
                    </div>
                </div>

                {/* Deuxième ligne : Commune et Par âge/handicap */}
                <div style={rowStyle}>
                    <div style={fieldContainerStyle}>
                        <label style={labelStyle} htmlFor="commune">
                            Commune :
                        </label>
                        <select
                            id="commune"
                            name="commune"
                            style={selectStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            value={formData.commune}
                            onChange={handleChange}
                        >
                            <option value="">Sélectionnez une commune</option>
                            <option value="paris">Paris</option>
                            <option value="lyon">Lyon</option>
                            <option value="marseille">Marseille</option>
                        </select>
                    </div>
                    <div style={fieldContainerStyle}>
                        <label style={labelStyle} htmlFor="ageOrHandicap">
                            Par âge / Handicap :
                        </label>
                        <select
                            id="ageOrHandicap"
                            name="ageOrHandicap"
                            style={selectStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            value={formData.ageOrHandicap}
                            onChange={handleChange}
                        >
                            <option value="">Sélectionnez une option</option>
                            <option value="enfant">Enfant</option>
                            <option value="adulte">Adulte</option>
                            <option value="senior">Senior</option>
                            <option value="handicap">Handicap</option>
                        </select>
                    </div>
                </div>

                {/* Bouton de recherche */}
                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Rechercher
                </button>
            </form>
        </div>
    );
};

export default Search;
