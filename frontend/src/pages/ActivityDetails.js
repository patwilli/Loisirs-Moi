import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ActivityDetails = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  // Vérifie si l'activité est déjà dans les favoris
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some((fav) => fav.id === parseInt(id)));
  }, [id]);

  useEffect(() => {
    const fetchActivityDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/activites/${id}`);
        setActivity(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement des détails de l'activité:", error);
        setLoading(false);
      }
    };

    fetchActivityDetails();
  }, [id]);

  const handleFavoriteToggle = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {
      // Supprimer des favoris
      const updatedFavorites = favorites.filter((fav) => fav.id !== activity.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // Ajouter aux favoris
      const updatedFavorites = [...favorites, activity];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(true);
    }
  };

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (!activity) {
    return <p>Aucune activité trouvée pour cet ID.</p>;
  }

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '20px',
    },
    paragraph: {
      marginBottom: '10px',
      fontSize: '16px',
      color: '#555',
    },
    bold: {
      fontWeight: 'bold',
    },
    link: {
      color: '#007BFF',
      textDecoration: 'none',
    },
    button: {
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: isFavorite ? '#FF6F61' : '#007BFF', // Change la couleur selon l'état
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{activity.nom_organisme}</h2>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Complément au nom:</span> {activity.complement_nom || 'Non renseigné'}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Sigle:</span> {activity.sigle || 'Non renseigné'}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Adresse:</span> {activity.adresse_postale || 'Non renseignée'}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Complément d'adresse:</span> {activity.complement_adresse || 'Non renseigné'}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Boîte postale:</span> {activity.boite_postale || 'Non renseignée'}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Code postal:</span> {activity.code_postal || 'Non renseigné'}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Commune:</span> {activity.commune || 'Non renseignée'}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Téléphone 1:</span> {activity.tel || 'Non disponible'}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Téléphone 2:</span> {activity.tel2 || 'Non disponible'}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Contact de l'activité:</span> {activity.contact_activite || 'Non renseigné'}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Email:</span>{' '}
        <a href={`mailto:${activity.e_mail}`} style={styles.link}>{activity.e_mail || 'Non renseigné'}</a>
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Site web:</span>{' '}
        <a href={activity.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
          {activity.url || 'Non disponible'}
        </a>
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Description:</span> {activity.description_activite || 'Non renseignée'}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Âge recommandé:</span> {activity.age || 'Non renseigné'}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Activité:</span> {activity.activite || 'Non renseignée'}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Niveau:</span> {activity.niveau || 'Non renseigné'}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Moment de l'activité:</span> {activity.moment_de_l_activite || 'Non renseigné'}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Lieu de l'activité:</span> {activity.lieu_activite || 'Non renseigné'}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Paiements acceptés:</span> {activity.paiements_acceptes || 'Non renseigné'}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Commune ou quartier de l'activité:</span>{' '}
        {activity.commune_ou_quartier_de_lactivite || 'Non renseigné'}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.bold}>Tarif:</span> {activity.tarif || 'Non renseigné'}
      </p>
      <button style={styles.button} onClick={handleFavoriteToggle}>
        {isFavorite ? 'Retirer des favoris' : 'Mettre en favoris'}
      </button>    
    </div>
  );
};

export default ActivityDetails;
