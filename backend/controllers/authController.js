let authController = {
  register: function (req, res) {
    res.render("register", { title: "AG Beaters - Register" });
  },
  login: function (req, res) {
    res.render("login", { title: "AG Beaters - Login" });
  },
};

module.exports = authController;
