const passport = require("../config/passport.config");

function passportAuthenticate() {
  return passport.authenticate("jwt", { session: false })
}
module.exports = passportAuthenticate;
