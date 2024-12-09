"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Create the Activities table
    await queryInterface.createTable("Activities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nom_organisme: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      sigle: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      complement_nom: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      adresse_postale: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      complement_adresse: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      boite_postale: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      code_postal: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      commune: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tel: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tel2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      e_mail: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description_activite: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      age_en_clair: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      niveau_de_l_activite: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      moment_de_l_activite: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tarif: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contact_activite: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lieu_activite: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      activite: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      paiements_acceptes: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      age: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      niveau: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      commune_ou_quartier_de_lactivite: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      latitude: {
        type: Sequelize.DECIMAL(10, 8),
        allowNull: true,
      },
      longitude: {
        type: Sequelize.DECIMAL(11, 8),
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    // Drop the Activities table
    await queryInterface.dropTable("Activities");
  },
};
