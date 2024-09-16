const followNotification = require("../controllers/Notification.Controller").followNotification;
const FollowHook = async(Follow,options)=>{
    const followerId = Follow.followerId;
  const followingId = Follow.followingId;
  await followNotification(followerId, followingId);
}

module.exports = FollowHook