const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("loisirs", "user", "password", {
  host: "mysql",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
