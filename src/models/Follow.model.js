const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/estabilishConnection.js");
class Follow extends Model {}

Follow.init(
  {},
  {
    timestamps: true,
    sequelize,
    modelName: "Follow",
  }
);




module.exports = Follow;
