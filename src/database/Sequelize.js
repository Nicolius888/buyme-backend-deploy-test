// Se conecta a la BD con las credenciales de el archivo .env

require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  // ecommerce es el nombre de la base de datos local
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  freezeTableName: true, //prevent sequelize from pluralizing table names
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
