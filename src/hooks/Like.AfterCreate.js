const Tweet = require("../models/Tweet.model.js");
const User = require("../models/User.model.js");
const Notification = require("../models/Notification.model.js");
const constants = require("../constants.js");


const likeNotification = async (notificationSender, notificationReciever) => {
  try {
    const user = await User.findByPk(notificationSender);
    const content = constants.likemsg(user.username);
    // const userid = user.id;
    const data = {
      content: content,
      UserId: notificationReciever,
    };
    const notification = await Notification.create(data);
    return notification;
  } catch (error) {
    console.log("error : ", error);
  }
};

const LikeHook = async(Like,options)=>{
    const tweetId = Like.TweetId;
  const userId = Like.UserId; //id of person who has liked the tweet
  const tweet = await Tweet.findByPk(tweetId);
  const recieverId = tweet.UserId; //id of person whose post got liked
  await likeNotification(userId, recieverId);
}

module.exports = LikeHook