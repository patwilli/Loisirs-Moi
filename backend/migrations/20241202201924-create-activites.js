'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Activites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nom_organisme: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      sigle: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      complement_nom: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      adresse_postale: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      complement_adresse: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      boite_postale: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      code_postal: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      commune: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      tel: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      tel2: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      e_mail: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      url: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      description_activite: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      age_en_clair: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      niveau_de_l_activite: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      moment_de_l_activite: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      tarif: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      contact_activite: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      lieu_activite: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      activite: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      paiements_acceptes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      age: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      niveau: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      commune_ou_quartier_de_lactivite: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      latitude: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      longitude: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Activites');
  },
};
