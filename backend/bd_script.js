const axios = require('axios');
const { Activite } = require('./models'); // Ton modèle Sequelize pour les activités

// Fonction pour ajouter un délai
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchData = async () => {
  const limit = 10; // Nombre d'enregistrements par page
  let offset = 0; // Initialiser l'offset
  const totalCount = 50; // Total de données à récupérer (tu peux ajuster selon les besoins)

  while (offset < totalCount) {
    try {
      // Récupération des données via l'API
      const response = await axios.get(
        'https://data.rennesmetropole.fr/api/explore/v2.1/catalog/datasets/loisirs-az-4bis/records',
        {
          params: { limit, offset },
        }
      );

      // Validation des résultats
      const records = response.data?.results;
      if (!records || records.length === 0) {
        console.warn(`Aucune donnée récupérée pour l'offset ${offset}.`);
        break;
      }

      // Insertion dans la base de données
      await Activite.bulkCreate(
        records.map((record) => ({
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
        }))
      );

      console.log(
        `Données insérées pour les enregistrements ${offset + 1} à ${
          offset + limit
        }.`
      );

      // Incrémentation de l'offset
      offset += limit;

      // Pause d'une seconde entre les requêtes pour éviter une surcharge
      await delay(1000);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error.message);

      // Gestion des erreurs de surcharge (429 Too Many Requests)
      if (error.response?.status === 429) {
        console.warn('Trop de requêtes. Pause de 5 secondes...');
        await delay(5000); // Pause de 5 secondes
      } else {
        break; // Arrêter en cas d'erreur fatale
      }
    }
  }

  console.log('Processus terminé.');
};

fetchData();
