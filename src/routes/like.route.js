const express = require("express");
const router = express.Router();

const like = require("../controllers/Like.Controller");

router.post("/", like);


module.exports = router