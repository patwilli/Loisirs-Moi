const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("loisirs", "root", "rootpassword", {
  host: "localhost",
  dialect: 'mysql',
  port: 3307,
});

module.exports = sequelize;
