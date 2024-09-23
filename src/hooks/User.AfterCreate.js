const User = require("../models/User.model");
const Notification = require("../models/Notification.model");
const constants = require("../constants.js");

const CreateAccount = async (userId) => {
    try {
      const user = await User.findByPk(userId);
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

  module.exports = CreateAccount