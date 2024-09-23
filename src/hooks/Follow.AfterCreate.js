const User = require("../models/User.model.js");
const Notification = require("../models/Notification.model");
const constants = require("../constants.js");

const followerNotification = async (slave, master) => {
  try {
    const user = await User.findByPk(slave);
    const content = constants.followermsg(user.username);
    console.log("content : ", content);
    const data = {
      Content: content,
      UserId: master,
    };
    const notification = await Notification.create(data);
    return notification;
  } catch (error) {
    console.log("error : ", error);
  }
};

const followingNotification = async (slave, master) => {
  try {
    const user = await User.findByPk(master);
    const content = constants.followingmsg(user.username);
    // const userid = user.id;
    const data = {
      Content: content,
      UserId: slave,
    };
    const notification = await Notification.create(data);
    return notification;
  } catch (error) {
    console.log("error : ", error);
  }
};



const FollowHook = async(Follow,options)=>{
  const followerId = Follow.followerId;
  const followingId = Follow.followeeId; 
  await followerNotification(followerId, followingId);
  await followingNotification(followerId, followingId);  
}

module.exports = FollowHook