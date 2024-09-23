const User = require("../models/User.model.js");
const Follow = require("../models/Follow.model.js");

const followerCount = async (users) => {
    if(!Array.isArray(users)) {//for ensuring if it is an array , if not convert it(for single user)
        users = [users];
    }

    for(const user of users) {
        const followerCount = await Follow.count({ where: { followeeId: user.id } });
        const followingCount = await Follow.count({ where: { followerId: user.id } });
        user.setDataValue("followerCount", followerCount);
        user.setDataValue("followingCount", followingCount);
    }
}

User.addHook("afterFind", followerCount);

module.exports = User