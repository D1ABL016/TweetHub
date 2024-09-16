const bcrypt = require("bcrypt");
const hashPassword = async(user, options) => {
    try {
        const hashedPassword = await bcrypt.hash(
          user.password,
          parseInt(process.env.SALT_ROUNDS)
        );
    
        user.password = hashedPassword;
      } catch (error) {
        console.log("error : ", error);
      }
}

module.exports = hashPassword