const express = require("express");
const router = express.Router();

const { getUser} = require("../controllers/User.Controller");
router.get("/", getUser);


module.exports = router