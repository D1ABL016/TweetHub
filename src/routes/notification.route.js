const express = require("express");
const router = express.Router();

const { getNotifications } = require("../controllers/Notification.Controller");
router.post("/", getNotifications);//gets notification of a user


module.exports = router