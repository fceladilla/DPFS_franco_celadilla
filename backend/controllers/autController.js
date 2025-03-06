const path = require("path");

let authController = {
  register: function (req, res) {
    res.sendFile(path.join(__dirname, "../views/register.html"));
  },
  login: function (req, res) {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  },
};

module.exports = authController;
