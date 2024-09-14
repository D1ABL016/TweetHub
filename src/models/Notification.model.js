
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/estabilishConnection.js");

const User = require("./User.model.js");

class Notification extends Model {}

Notification.init(
  {
    Content: DataTypes.STRING,
    Read:{
      DataTypes:DataTypes.BOOLEAN,
      defaultValue:false
    },
  },
  {
    timestamps: true,
    sequelize,
    modelName: "Notification",
  }
);

User.hasMany(Notification);
Notification.belongsTo(User);

module.exports = Notification