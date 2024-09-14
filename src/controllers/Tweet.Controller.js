const Tweet = require("../models/Tweet.model");

async function getTweetByUser(userId){
    const data = await Tweet.findAll({
        where:{
            UserId:userId
        }
    })
    return data;
}