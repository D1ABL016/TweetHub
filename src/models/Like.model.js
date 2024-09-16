const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/estabilishConnection.js");

const LikeHook = require("../hooks/Like.AfterCreate.js");

class Like extends Model {}

Like.init(
  {},
  {
    timestamps: true,
    sequelize,
    modelName: "Like",
  }
);

Like.addHook("afterCreate", LikeHook);


module.exports = Like;
