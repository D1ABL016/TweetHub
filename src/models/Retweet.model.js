
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/estabilishConnection.js");

const RetweetHook = require("../hooks/Retweet.AfterCreate.js");
class Retweet extends Model {}

Retweet.init(
  {
    Content: DataTypes.STRING,
    mediaURL: DataTypes.STRING,
  },
  {
    timestamps: true,
    sequelize,
    modelName: "Retweet",
  }
);

Retweet.addHook("afterCreate", RetweetHook);


module.exports=Retweet
