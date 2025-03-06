const path = require("path");

let productController = {
  productDetail: function (req, res) {
    res.sendFile(path.join(__dirname, "../views/productDetail.html"));
  },
  productCart: function (req, res) {
    res.sendFile(path.join(__dirname, "../views/productCart.html"));
  },
};

module.exports = productController;
