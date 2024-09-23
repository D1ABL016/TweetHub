const User = require("../models/User.model.js");
const Like = require("../models/Like.model.js");
const Tweet = require("../models/Tweet.model.js");
const Retweet = require("../models/Retweet.model.js");
const Notification = require("../models/Notification.model.js");
const Follow = require("../models/Follow.model.js");



const FollowHook = require("../hooks/Follow.AfterCreate.js");
const LikeHook = require("../hooks/Like.AfterCreate.js");
const RetweetHook = require("../hooks/Retweet.AfterCreate.js");
const hashPassword = require("../hooks/User.BeforeSave.js");
const CreateAccount = require("../hooks/User.AfterCreate.js");

const sequelize = require("./estabilishConnection.js");

//relationships

User.hasMany(Notification);
Notification.belongsTo(User);

User.belongsToMany(User, {
  through: Follow,
  as: "Followers",
  foreignKey: "followeeId",
});

User.belongsToMany(User, {
  through: Follow,
  as: "Followees",
  foreignKey: "followerId",
});

Tweet.hasMany(Like);
Like.belongsTo(Tweet);

User.hasMany(Like);
Like.belongsTo(User);

Tweet.hasMany(Retweet);
Retweet.belongsTo(Tweet);

User.hasMany(Retweet);
Retweet.belongsTo(User);

User.hasMany(Tweet);
Tweet.belongsTo(User);

Follow.addHook("afterCreate", FollowHook);
Like.addHook("afterCreate", LikeHook);
Retweet.addHook("afterCreate", RetweetHook);
User.addHook("beforeSave", hashPassword);
User.addHook("afterCreate", CreateAccount);

sequelize.sync({ alter: true });

module.exports = {
  User,
  Like,
  Tweet,
  Retweet,
  Notification,
  Follow,
}
