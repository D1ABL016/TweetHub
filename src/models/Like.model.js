const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/estabilishConnection.js");

const User = require("./User.model.js");
const Tweet = require("./Tweet.model.js");
const LikeNoti = require("../controllers/Notification.Controller.js").likeNotification;

class Like extends Model {}

Like.init(
  {},
  {
    timestamps: true,
    sequelize,
    modelName: "Like",
  }
);

Tweet.hasMany(Like);
Like.belongsTo(Tweet);

User.hasMany(Like);
Like.belongsTo(User);

Like.addHook("afterCreate", async (Like, options) => {
  const tweetId = Like.TweetId;
  const userId = Like.UserId;//id of person who has liked the tweet
  const tweet = await Tweet.findOne({ where: { id: tweetId } });
  const recieverId = tweet.UserId;//id of person whose post got liked
  await LikeNoti(userId,recieverId);
});

module.exports = Like;
