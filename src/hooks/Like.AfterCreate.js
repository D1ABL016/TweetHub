const Tweet = require("../models/Tweet.model.js");

const likeNotification  = require("../controllers/Notification.Controller").likeNotification;

const LikeHook = async(Like,options)=>{
    const tweetId = Like.TweetId;
  const userId = Like.UserId; //id of person who has liked the tweet
  const tweet = await Tweet.findOne({ where: { id: tweetId } });
  const recieverId = tweet.UserId; //id of person whose post got liked
  await likeNotification(userId, recieverId);
}

module.exports = LikeHook