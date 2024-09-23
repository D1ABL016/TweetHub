const Tweet = require("../models/Tweet.model.js");
const User = require("../models/User.model.js");
const Notification = require("../models/Notification.model.js");
const constants = require("../constants.js");



const retweetNotification = async (notificationSender,notificationReciever) => {
  try {
    const user = await User.findByPk(notificationSender);
    const content = constants.retweetmsg(user.username);
    // const userid = user.id;
    const data = {
      Content: content,
      UserId: notificationReciever,
    };
    const notification = await Notification.create(data);
    return notification;
  } catch (error) {
    console.log("error : ", error);
  }
};


const RetweetHook = async(Retweet,options)=>{
  const tweetId = Retweet.TweetId;
  const userId = Retweet.UserId; //id of person who has retweeted the tweet
  const tweet = await Tweet.findByPk(tweetId);
  const recieverId = tweet.UserId; //id of person whose post got retweeted
  await retweetNotification(userId, recieverId);
}

module.exports = RetweetHook