const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/estabilishConnection.js");
const Follow = require("./Follow.model.js");
const bcrypt = require("bcrypt");
const CreateAccount = require("../controllers/Notification.Controller.js").CreateAccount;

const path  = require("path");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profilePicUrl: {
      type: DataTypes.STRING,
    },

    Bio: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    sequelize,
    modelName: "User",
  }
);

User.belongsToMany(User, {
  through: Follow,
  as: "Followers",
  foreignKey: "followeeId",
});

User.belongsToMany(User, {
  through: Follow,
  as: "Followees",
  foreignKey: "followerId",
});

//methods

User.comparePassword(async (candidatePassword, userPassword) => {
  try {
    const isMatching =  await bcrypt.compare(candidatePassword, userPassword);
    return isMatching;
  } catch (error) {
    console.log("error : ", error);
  }
});

//hooks
User.addHook("beforeSave", async (user, options) => {
  try {
    const hashedPassword = await bcrypt.hash(
      user.password,
      process.env.SALT_ROUNDS
    );

    user.password = hashedPassword;
  } catch (error) {
    console.log("error : ", error);
  }
});

User.addHook("afterCreate", async (user, options) => {
  await CreateAccount(user.id);
});


module.exports = User;
