const User = require("../models/User.model.js");
const ApiResponse = require("../utils/ApiResponse");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const createUser = async (req, res) => {
  try {
    const data = await User.create(req.body);
    return res.status(200).json(new ApiResponse(data, 200));
  } catch (error) {
    console.log("error : ", error);
    return res.status(500).json(new ApiResponse("internal server error", 500));
  }
};

const loginUser = async (req, res) => {
  const user = await User.findOne({ where: { username: req.body.username } });
  if (!user) {
    return res.status(401).json(new ApiResponse("User not found", 401));
  }
  const passwordMatch = await (User.comparePassword(req.body.password, user.password));
  if (!passwordMatch){
    return res.status(401).json(new ApiResponse("Incorrect Password", 401));
  }
  

  const payload = {
    id: user.id,
    username: user.username,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWY_EXPIRY,
  });
  res.cookie('token', token, { httpOnly: true });
  const BearerToken = "Bearer " + token;
  return res.status(200).json(new ApiResponse({ "token":BearerToken}, 200));
};

module.exports = { createUser, loginUser };
