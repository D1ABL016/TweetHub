/*
this file will save all of the constants that are used in this project 

main difference between env file and this is it will contain all the things that can be public and be published online 

*/

const creatingAccountmsg = (username)=>{
 return "welcome to TweetHub " + username + ". Your account has been successfully created.";
}

const followermsg=(followername)=>{
    return "" + followername + " has started following you"
}
const followingmsg=(followingname)=>{
    return "you have started following "+ followingname
}

const retweetmsg=(followername)=>{
    return "" + followername + " has retweeted your tweet";
}

const likemsg=(followername)=>{
    return "" + followername + " has liked your tweet";
}

module.exports = {
    creatingAccountmsg,
    followermsg,
    followingmsg,
    retweetmsg,
    likemsg
}   