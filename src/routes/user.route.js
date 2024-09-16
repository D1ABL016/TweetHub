const express = require("express");
const router = express.Router();
const passportAuthenticate = require("../middlewares/JWT.middleware");
const { getUser} = require("../controllers/User.Controller");

router.get("/:userId",passportAuthenticate(), getUser);


module.exports = router