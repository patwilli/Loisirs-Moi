import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    // Les styles restent inchangés
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

    // State pour les données récupérées
    const [options, setOptions] = useState({
        activites: [],
        communes: [],
        niveaux: [],
        ages: [],
    });

    const [formData, setFormData] = useState({
        thematique: "",
        activite: "",
        commune: "",
        niveau: "",
        age: "",
    });

    // Charger les données depuis l'API
    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const [activitesRes, communesRes, niveauxRes, agesRes] = await Promise.all([
                    axios.get("http://localhost:5000/api/options/activites"),
                    axios.get("http://localhost:5000/api/options/communes"),
                    axios.get("http://localhost:5000/api/options/niveaux"),
                    axios.get("http://localhost:5000/api/options/ages"),
                ]);

                setOptions({
                    activites: activitesRes.data,
                    communes: communesRes.data,
                    niveaux: niveauxRes.data,
                    ages: agesRes.data,
                });
            } catch (error) {
                console.error("Erreur lors du chargement des options :", error);
            }
        };

        fetchOptions();
    }, []);

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
                {/* Première ligne : Type d'activités et commune */}
                <div style={rowStyle}>
                    <div style={fieldContainerStyle}>
                        <label style={labelStyle} htmlFor="thematique">
                            Type activités :
                        </label>
                        <select
                            id="thematique"
                            name="thematique"
                            style={selectStyle}
                            value={formData.thematique}
                            onChange={handleChange}
                        >
                            <option value="">Sélectionnez une thématique</option>
                            {options.activites.map((activite) => (
                                <option key={activite.id} value={activite.id}>
                                    {activite.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div style={fieldContainerStyle}>
                        <label style={labelStyle} htmlFor="commune">
                            Commune :
                        </label>
                        <select
                            id="commune"
                            name="commune"
                            style={selectStyle}
                            value={formData.commune}
                            onChange={handleChange}
                        >
                            <option value="">Sélectionnez une commune</option>
                            {options.communes.map((commune) => (
                                <option key={commune.id} value={commune.id}>
                                    {commune.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Deuxième ligne : Niveau et âge */}
                <div style={rowStyle}>
                    <div style={fieldContainerStyle}>
                        <label style={labelStyle} htmlFor="niveau">
                            Niveau :
                        </label>
                        <select
                            id="niveau"
                            name="niveau"
                            style={selectStyle}
                            value={formData.niveau}
                            onChange={handleChange}
                        >
                            <option value="">Sélectionnez un niveau</option>
                            {options.niveaux.map((niveau) => (
                                <option key={niveau.id} value={niveau.id}>
                                    {niveau.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div style={fieldContainerStyle}>
                        <label style={labelStyle} htmlFor="age">
                            Par âge :
                        </label>
                        <select
                            id="age"
                            name="age"
                            style={selectStyle}
                            value={formData.age}
                            onChange={handleChange}
                        >
                            <option value="">Sélectionnez une option</option>
                            {options.ages.map((age) => (
                                <option key={age.id} value={age.id}>
                                    {age.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Bouton de recherche */}
                <button type="submit" style={buttonStyle}>
                    Rechercher
                </button>
            </form>
        </div>
    );
};

export default Search;