
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/estabilishConnection.js");

const User = require("./User.model.js");

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

User.hasMany(Tweet);
Tweet.belongsTo(User);




module.exports=Tweet
