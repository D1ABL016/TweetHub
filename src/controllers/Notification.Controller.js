const Notification = require("../models/Notification.model");
const ApiResponse = require("../utils/ApiResponse");

const getNotifications = async (req, res) => {
  try {
    const Userid = req.user.id;
    const data = await Notification.findAll({
      where: {
        Userid: Userid,
      },
    });
    await Notification.update({ Read: true }, { where: { UserId: Userid } });
    return res.status(200).json(new ApiResponse(data, 200));
  } catch (error) {
    console.log("error : ", error);
    return res.status(500).json(new ApiResponse(error.name, 500));
  }
};

module.exports = {
  getNotifications  
};
