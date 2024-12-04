'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activite = sequelize.define('Activite', {
    nom_organisme: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sigle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    complement_nom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    adresse_postale: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    complement_adresse: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    boite_postale: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    code_postal: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    commune: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tel2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    e_mail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description_activite: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    age_en_clair: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    niveau_de_l_activite: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    moment_de_l_activite: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tarif: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contact_activite: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lieu_activite: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    activite: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    paiements_acceptes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    niveau: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    commune_ou_quartier_de_lactivite: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {});

  Activite.associate = function(models) {
    // Define associations here
  };

  return Activite;
};
