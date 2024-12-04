const axios = require('axios');
const { Activite } = require('./models');  // Assurez-vous que le chemin d'accès est correct

// Fonction pour géocoder une adresse et obtenir les coordonnées
const geocodeAddress = async (address) => {
  try {
    const response = await axios.get('https://nominatim.openstreetmap.org/search', {
      params: {
        q: address,
        format: 'json',
      },
    });

    if (response.data.length > 0) {
      const { lat, lon } = response.data[0];
      return { latitude: lat, longitude: lon };
    } else {
      console.error(`Aucune coordonnée trouvée pour l'adresse : ${address}`);
      return null;
    }
  } catch (error) {
    console.error('Erreur lors du géocodage:', error.message);
    return null;
  }
};

// Fonction pour mettre à jour les activités avec les coordonnées GPS
const updateCoordinates = async () => {
  try {
    const activities = await Activite.findAll();  // Récupère toutes les activités de la base de données

    for (let activity of activities) {
      const address = `${activity.adresse_postale}, ${activity.code_postal} ${activity.commune}`;
      const geolocation = await geocodeAddress(address);

      if (geolocation) {
        // Mise à jour de l'activité avec les coordonnées GPS
        await activity.update({
          latitude: geolocation.latitude,
          longitude: geolocation.longitude,
        });

        console.log(`Activité ${activity.id} mise à jour avec les coordonnées.`);
      }
    }
  } catch (error) {
    console.error('Erreur lors de la mise à jour des coordonnées:', error.message);
  }
};

updateCoordinates();
