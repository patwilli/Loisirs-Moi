const express = require("express");
const { Op } = require("sequelize");
const { Activite } = require("../models"); 

const router = express.Router();

// Récupérer toutes les activités
router.get("/activites", async (req, res) => {
  try {
    const activites = await Activite.findAll();
    res.status(200).json(activites);
  } catch (error) {
    console.error("Erreur lors de la récupération des activités :", error);
    res.status(500).json({ error: "Erreur interne du serveur." });
  }
});

// Récupérer une activité par ID
router.get("/activites/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const activite = await Activite.findByPk(id);

    if (!activite) {
      return res.status(404).json({ error: "Activité non trouvée." });
    }

    res.status(200).json(activite);
  } catch (error) {
    console.error("Erreur lors de la récupération de l'activité :", error);
    res.status(500).json({ error: "Erreur interne du serveur." });
  }
});

// Rechercher des activités selon des critères
router.get("/search", async (req, res) => {
  try {
    const { activite, commune, niveau, age } = req.query;

    const where = {};
    if (activite) where.activite = { [Op.like]: `%${activite}%` };
    if (commune) where.commune = { [Op.like]: `%${commune}%` };
    if (niveau) where.niveau = { [Op.like]: `%${niveau}%` };
    if (age) where.age = age;

    const activites = await Activite.findAll({ where });

    if (!activites.length) {
      return res
        .status(404)
        .json({ message: "Aucune activité trouvée avec ces critères." });
    }

    res.status(200).json(activites);
  } catch (error) {
    console.error("Erreur lors de la recherche des activités :", error);
    res.status(500).json({ error: "Erreur interne du serveur." });
  }
});

// Obtenir les options pour une colonne spécifique
const getOptions = async (column, res) => {
  try {
    const results = await Activite.findAll({
      attributes: [[column, "name"]],
      group: [column],
      where: { [column]: { [Op.ne]: null } },
    });

    const options = results.map((result, index) => ({
      id: index + 1,
      name: result.name,
    }));

    res.status(200).json(options);
  } catch (error) {
    console.error(`Erreur lors de la récupération des options pour ${column} :`, error);
    res.status(500).json({ message: "Erreur interne du serveur." });
  }
};

// Route générique pour les options
router.get("/options/:column", async (req, res) => {
  const { column } = req.params;
  const validColumns = ["activite", "commune", "niveau", "age"];

  if (!validColumns.includes(column)) {
    return res.status(400).json({ error: "Colonne invalide." });
  }

  await getOptions(column, res);
});

module.exports = router;
