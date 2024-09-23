const express = require("express");
const router = express.Router();
const passportAuthenticate = require("../middlewares/JWT.middleware");
const { getNotifications } = require("../controllers/Notification.Controller");

router.get("/",passportAuthenticate(), getNotifications);//gets notification of a user


module.exports = router