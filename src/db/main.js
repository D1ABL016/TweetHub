const LikeModel = require('./models/Like.model')
const TweetModel = require('./models/Tweet.model')
const RetweetModel = require('./models/Retweet.model')
const NotificationModel = require('./models/Notification.model')
const FollowModel = require('./models/Follow.model')
const UserModel = require('./models/User.model')
const sequelize = require('./db/estabilishConnection')

sequelize.sync()

