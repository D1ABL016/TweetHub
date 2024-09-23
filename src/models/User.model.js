const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/estabilishConnection.js");

const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const path = require("path");
const Follow = require("./Follow.model.js");
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
    followerCount : {
      type:DataTypes.VIRTUAL,
      get() {
        return Follow.count({ where: { followeeId: this.id } });
      }
    },
    followingCount : {
      type:DataTypes.VIRTUAL,
      get() {
        return Follow.count({ where: { followerId: this.id } });
      }
    }
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

module.exports = User;
