const Tweet = require("../models/Tweet.model.js");

const retweetNotification  = require("../controllers/Notification.Controller").retweetNotification;

const RetweetHook = async(Retweet,options)=>{
    const tweetId = Retweet.TweetId;
  const userId = Retweet.UserId; //id of person who has retweeted the tweet
  const tweet = await Tweet.findOne({ where: { id: tweetId } });
  const recieverId = tweet.UserId; //id of person whose post got retweeted
  await retweetNotification(userId, recieverId);
}

module.exports = RetweetHook