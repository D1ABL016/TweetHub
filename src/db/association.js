const User = require("../models/User.model.js");
const Like = require("../models/Like.model.js");
const Tweet = require("../models/Tweet.model.js");
const Retweet = require("../models/Retweet.model.js");
const Notification = require("../models/Notification.model.js");
const Follow = require("../models/Follow.model.js");
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

sequelize.sync();

module.exports = {
  User,
  Like,
  Tweet,
  Retweet,
  Notification,
  Follow,
}
