
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/estabilishConnection.js");


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




module.exports=Retweet
