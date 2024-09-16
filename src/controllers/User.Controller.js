const User = require("../models/User.model");
const ApiResponse = require("../utils/ApiResponse");
const getUser = async (req, res) => {
  try {
    const data = await User.findByPk(req.user.id);
    return res.status(200).json(new ApiResponse(data, 200));
  } catch (error) {
    console.log("error : ", error);
  }
};



module.exports = { getUser};
