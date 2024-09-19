const Follow = require("../models/Follow.model");

async function checkFollow(res,req,next) {
    try {
        const followerId  = req.user.id;
        const influencerId = req.body.influencerId;
        const follow = await Follow.findOne({ where: { followerId: followerId, followeeId: influencerId } });
        if(follow)  next();
        else return res.status(401).json(new ApiResponse("You are not following this user", 401));
    } catch (error) {
       return res.status(500).json(new ApiResponse(error.name, 500));
    }

}

module.exports = checkFollow