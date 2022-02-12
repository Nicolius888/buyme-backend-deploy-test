const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("query", {
    //idCustomer
    //idAdmin   ===> van por relación
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    queryHistory: {
      type: DataTypes.ARRAY(DataTypes.JSON),
    },
    resolved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
