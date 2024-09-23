const express = require("express");
const router = express.Router();

const follow = require("../controllers/Follow.Controller").follow;
const Unfollow = require("../controllers/Follow.Controller").Unfollow;
const passportAuthenticate = require("../middlewares/JWT.middleware");

router.post("/",passportAuthenticate(), follow);
router.delete("/",passportAuthenticate() , Unfollow);

module.exports = router