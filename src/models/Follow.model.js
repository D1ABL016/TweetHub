const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/estabilishConnection.js");
const followNoti = require("../controllers/Notification.Controller").followNotification;
class Follow extends Model {}

Follow.init(
  {},
  {
    timestamps: true,
    sequelize,
    modelName: "Follow",
  }
);

Follow.addHook("afterCreate", async (Follow, options) => {
  const followerId = Follow.followerId;
  const followingId = Follow.followingId;
  await followNoti(followerId, followingId);
});


module.exports = Follow;
