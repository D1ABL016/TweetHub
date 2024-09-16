const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/estabilishConnection.js");

class Tweet extends Model {}

Tweet.init(
  {
    Content: DataTypes.STRING,
    mediaURL: DataTypes.STRING,
  },
  {
    timestamps: true,
    sequelize,
    modelName: "Tweet",
  }
);

module.exports=Tweet
