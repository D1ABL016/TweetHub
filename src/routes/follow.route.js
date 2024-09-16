const express = require("express");
const router = express.Router();

const follow = require("../controllers/Follow.Controller");
const passportAuthenticate = require("../middlewares/JWT.middleware");

router.post("/",passportAuthenticate(), follow);


module.exports = router