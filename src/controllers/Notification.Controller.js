const constants = require("../constants.js");
const Notification = require("../models/Notification.model");
const User = require("../models/User.model");



const CreateAccount = async (userId) => {
  try {
    const user = await User.findOne({ where: { id: userId } });
    const username = user.username;
    console.log("username : ", username);
    const content = constants.creatingAccountmsg(username);
    console.log("content : ", content);
    const data = {
      Content: content,
      UserId: userId,
    };
    console.log("data : ", data);
    const notification = await Notification.create(data);

  } catch (error) {
    console.log("error : ", error);
  }
};
//notificationReciever
const followerNotification = async (slave, master) => {
  try {
    const user = await User.findOne({
      where: { id: slave },
    });
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
    const user = await User.findOne({
      where: { id: master },
    });
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

const retweetNotification = async (
  notificationSender,
  notificationReciever
) => {
  try {
    const user = await User.findOne({
      where: { username: notificationSender },
    });
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

const followNotification = async (notificationSender, notificationReciever) => {
  await followerNotification(notificationSender, notificationReciever);
  await followingNotification(notificationSender, notificationReciever);
};

const likeNotification = async (notificationSender, notificationReciever) => {
  try {
    const user = await User.findOne({
      where: { username: notificationSender },
    });
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

const getNotifications = async (req, res) => {
  try {
    const Userid = req.body.Userid;
    const data = await Notification.findAll({
      where: {
        Userid: Userid,
      },
    });
    data.forEach(async (element) => {
      element.dataValues["read"] = true;
    });
    return data;
  } catch (error) {
    console.log("error : ", error);
  }
};

User.addHook("afterCreate", async(user, options) => {
  await CreateAccount(user.id);
});


module.exports = {
  getNotifications,
  likeNotification,
  followNotification,
  retweetNotification,
  CreateAccount
}
