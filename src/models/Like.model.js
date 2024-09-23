const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/estabilishConnection.js");



class Like extends Model {}

Like.init(
  {},
  {
    timestamps: true,
    sequelize,
    modelName: "Like",
  }
);




module.exports = Like;
