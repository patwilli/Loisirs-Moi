const express = require('express');
const { Op } = require('sequelize');
const { Activite } = require('../models'); // Import du modèle Sequelize

const router = express.Router();

// Récupérer toutes les activités
router.get('/activites', async (req, res) => {
    try {
        const activites = await Activite.findAll();
        res.status(200).json(activites);
    } catch (error) {
        console.error('Erreur lors de la récupération des activités :', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Récupérer une activité par ID
router.get('/activites/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const activite = await Activite.findByPk(id);
        if (!activite) {
            return res.status(404).json({ error: 'Activité non trouvée' });
        }
        res.status(200).json(activite);
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'activité :', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Rechercher des activités selon des critères
router.get('/search', async (req, res) => {
    try {
      const { activite, commune, niveau, age } = req.query;
  
      // Construire les critères dynamiquement
      const where = {};
      if (activite) where.activite = activite;
      if (commune) where.commune = commune;
      if (niveau) where.niveau = niveau;
      if (age) where.age = age;
  
      // Effectuer la requête
      const activites = await Activite.findAll({ where });
  
      // Retourner les résultats
      if (activites.length === 0) {
        return res.status(404).json({ message: 'Aucune activité trouvée avec ces critères.' });
      }
  
      res.status(200).json(activites);
    } catch (error) {
      console.error('Erreur lors de la recherche des activités :', error);
      res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
  });

//Route pour les thématiques (activite)

router.get('/options/activites', async (req, res) => {
    try {
      const activites = await Activite.findAll({
        attributes: ['activite'],
        group: ['activite'], // Évite les doublons
        where: { activite: { [Op.ne]: null } }, // Ignore les champs `null`
      });
  
      const activiteOptions = activites.map(a => a.activite);
      res.status(200).json(activiteOptions);
    } catch (error) {
      console.error('Erreur lors de la récupération des thématiques :', error);
      res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
  });

  
//Route pour les communes (commune)
router.get('/options/communes', async (req, res) => {
    try {
      const communes = await Activite.findAll({
        attributes: ['commune'],
        group: ['commune'],
        where: { commune: { [Op.ne]: null } },
      });
  
      const communeOptions = communes.map(c => c.commune);
      res.status(200).json(communeOptions);
    } catch (error) {
      console.error('Erreur lors de la récupération des communes :', error);
      res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
  });
  

//Route pour les niveaux (niveau)
router.get('/options/niveaux', async (req, res) => {
    try {
      const niveaux = await Activite.findAll({
        attributes: ['niveau'],
        group: ['niveau'],
        where: { niveau: { [Op.ne]: null } },
      });
  
      const niveauOptions = niveaux.map(n => n.niveau);
      res.status(200).json(niveauOptions);
    } catch (error) {
      console.error('Erreur lors de la récupération des niveaux :', error);
      res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
  });
  

//Route pour les âges (age)
router.get('/options/ages', async (req, res) => {
    try {
      const ages = await Activite.findAll({
        attributes: ['age'],
        group: ['age'],
        where: { age: { [Op.ne]: null } },
      });
  
      const ageOptions = ages.map(a => a.age);
      res.status(200).json(ageOptions);
    } catch (error) {
      console.error('Erreur lors de la récupération des âges :', error);
      res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
  });
  

module.exports = router;
