const axios = require("axios");
const db = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const geocodeAddress = async (address) => {
      try {
        const response = await axios.get(
          "https://nominatim.openstreetmap.org/search",
          {
            params: {
              q: address,
              format: "json",
            },
          }
        );

        if (response.data.length > 0) {
          const { lat, lon } = response.data[0];
          return { latitude: lat, longitude: lon };
        } else {
          console.error(
            `Aucune coordonnée trouvée pour l'adresse : ${address}`
          );
          return null;
        }
      } catch (error) {
        console.error("Erreur lors du géocodage:", error.message);
        return null;
      }
    };

    const fetchDataAndInsert = async () => {
      const limit = 10;
      let offset = 0;
      const totalCount = 50;

      while (offset < totalCount) {
        try {
          // Fetch data from API
          const response = await axios.get(
            "https://data.rennesmetropole.fr/api/explore/v2.1/catalog/datasets/loisirs-az-4bis/records",
            {
              params: { limit, offset },
            }
          );

          const records = response.data?.results;
          if (!records || records.length === 0) {
            console.warn(`Aucune donnée récupérée pour l'offset ${offset}.`);
            break;
          }

          // Prepare data for bulk insertion
          const activities = records.map((record) => ({
            nom_organisme: record.nom_organisme || null,
            sigle: record.sigle || null,
            complement_nom: record.complement_nom || null,
            adresse_postale: record.adresse_postale || null,
            complement_adresse: record.complement_adresse || null,
            boite_postale: record.boite_postale || null,
            code_postal: record.code_postal || null,
            commune: record.commune || null,
            tel: record.tel || null,
            tel2: record.tel2 || null,
            e_mail: record.e_mail || null,
            url: record.url || null,
            description_activite: record.description_activite || null,
            age_en_clair: record.age_en_clair || null,
            niveau_de_l_activite: record.niveau_de_l_activite || null,
            moment_de_l_activite: record.moment_de_l_activite || null,
            tarif: record.tarif || null,
            contact_activite: record.contact_activite || null,
            lieu_activite: record.lieu_activite || null,
            activite: record.activite || null,
            paiements_acceptes: record.paiements_acceptes || null,
            age: record.age || null,
            niveau: record.niveau || null,
            commune_ou_quartier_de_lactivite:
              record.commune_ou_quartier_de_lactivite || null,
            createdAt: new Date(),
            updatedAt: new Date(),
          }));

          // Insert data into the database
          await queryInterface.bulkInsert("Activities", activities);

          console.log(
            `Données insérées pour les enregistrements ${offset + 1} à ${
              offset + limit
            }.`
          );

          offset += limit;

          // Pause between API calls
          await delay(1000);
        } catch (error) {
          console.error(
            "Erreur lors de la récupération des données:",
            error.message
          );

          if (error.response?.status === 429) {
            console.warn("Trop de requêtes. Pause de 5 secondes...");
            await delay(5000);
          } else {
            break;
          }
        }
      }
    };

    const geocodeActivities = async () => {
      try {
        const activities = await queryInterface.sequelize.query(
          `SELECT id, adresse_postale, code_postal, commune FROM Activities`,
          { type: Sequelize.QueryTypes.SELECT }
        );

        for (let activity of activities) {
          const address = `${activity.adresse_postale}, ${activity.code_postal} ${activity.commune}`;
          const geolocation = await geocodeAddress(address);

          if (geolocation) {
            await queryInterface.sequelize.query(
              `UPDATE Activities SET latitude = :latitude, longitude = :longitude WHERE id = :id`,
              {
                replacements: {
                  latitude: geolocation.latitude,
                  longitude: geolocation.longitude,
                  id: activity.id,
                },
              }
            );

            console.log(
              `Activité ${activity.id} mise à jour avec les coordonnées.`
            );
          }
        }
      } catch (error) {
        console.error(
          "Erreur lors de la mise à jour des coordonnées:",
          error.message
        );
      }
    };

    console.log("Début de la récupération des données et du géocodage...");
    await fetchDataAndInsert();
    await geocodeActivities();
    console.log("Processus terminé.");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Activities", null, {});
  },
};
