
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/estabilishConnection.js");

const User = require("./User.model.js");
const Tweet = require("./Tweet.model.js");
const RetweetNoti = require("../controllers/Notification.Controller.js").retweetNotification;

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

Tweet.hasMany(Retweet);
Retweet.belongsTo(Tweet);


User.hasMany(Retweet);
Retweet.belongsTo(User);

Retweet.addHook("afterCreate", async (Retweet, options) => {
  const tweetId = Retweet.TweetId;
  const userId = Retweet.UserId;//id of person who has retweeted the tweet
  const tweet = await Tweet.findOne({ where: { id: tweetId } });
  const recieverId = tweet.UserId;//id of person whose post got retweeted
  await RetweetNoti(userId,recieverId);
});

module.exports=Retweet
