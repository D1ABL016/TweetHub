const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/estabilishConnection.js");
const FollowHook = require("../hooks/Follow.AfterCreate.js");
class Follow extends Model {}

Follow.init(
  {},
  {
    timestamps: true,
    sequelize,
    modelName: "Follow",
  }
);

Follow.addHook("afterCreate", FollowHook);


module.exports = Follow;
