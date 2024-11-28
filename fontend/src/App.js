import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Loisirs() {
    const [loisirs, setLoisirs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/loisirs")
            .then(response => {
                setLoisirs(response.data.results);
            })
            .catch(error => console.error("Erreur lors de la récupération des données :", error));
    }, []);

    return (
        <div>
            <h1>Activités de Loisirs</h1>
            <ul>
                {loisirs.length > 0 ? (
                    loisirs.map((loisir, index) => (
                        <li key={index}>{loisir.nom_organisme}</li>
                    ))
                ) : (
                    <li>Aucune activité disponible</li>
                )}
            </ul>
        </div>
    );
}

export default Loisirs;
