const Follow = require("../models/Follow.model");
const ApiResponse = require("../utils/ApiResponse");
const follow = async (req, res) => {
    try {
        const followerId = req.user.id;
        const influencerId = req.body.influencerId;
        const  ids = {
            followerId: followerId,
            followeeId: influencerId
        }
        const data = await Follow.create(ids);
        return res.status(200).json(new ApiResponse(data, 200));
    } catch (error) {
        console.log("error : ",JSON.stringify(error) );
        return res.status(500).json(new ApiResponse(error.name, 500));
    }
}

const Unfollow = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {follow, Unfollow}