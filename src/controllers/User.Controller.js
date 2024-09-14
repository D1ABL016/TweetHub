const User = require("../models/User.model");
const ApiResponse = require("../utils/ApiResponse");
const getUser = async (req, res) => {
  try {
    const data = await User.findAll();
    return res.status(200).json(new ApiResponse(data, 200));
  } catch (error) {
    console.log("error : ", error);
  }
};

const createUser = async (req, res) => {
  try {
    const data = await User.create(req.body);
    
    return res.status(200).json(new ApiResponse(data, 200));
  } catch (error) {
    console.log("error : ", error);
  }
};

module.exports = { getUser, createUser };
