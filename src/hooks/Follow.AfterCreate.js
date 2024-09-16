const followNotification = require("../controllers/Notification.Controller").followNotification;
const FollowHook = async(Follow,options)=>{
    const followerId = Follow.followerId;
  const followingId = Follow.followeeId;
  console.log(followerId,followingId);
  await followNotification(followerId, followingId);
}

module.exports = FollowHook