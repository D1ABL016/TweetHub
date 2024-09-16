const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/estabilishConnection.js");

const bcrypt = require("bcrypt");
const hashPassword = require("../hooks/User.BeforeSave.js");


const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../.env") });

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

//methods

User.comparePassword = async (candidatePassword, userPassword) => {
  try {
    const isMatching = await bcrypt.compare(candidatePassword, userPassword);
    return isMatching;
  } catch (error) {
    console.log("error : ", error);
  }
};

//hooks
User.addHook("beforeSave", hashPassword);




module.exports = User;
