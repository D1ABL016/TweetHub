const Tweet = require("../models/Tweet.model");
const Follow = require("../models/Follow.model");

const checkPermission = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const tweetId = req.body.tweetId;
    
        const tweet = await Tweet.findOne({ where: { id: tweetId } });
        
        const CreaterOfTweet = tweet.UserId;
    
        const follower = await Follow.findOne({ where: { followerId: userId, followeeId: CreaterOfTweet } });
        if (follower) {
            next();
        } else {
            return res.status(401).json(new ApiResponse("Unaouthorized", 401));
        }
    } catch (error) {
        return res.status(500).json(new ApiResponse(error.name, 500));
    }
}

module.exports = checkPermission;
