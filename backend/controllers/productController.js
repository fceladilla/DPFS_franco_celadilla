const products = [
  { id: 1, nombre: 'Mazo Modelo X', precio: 50, imagen: '/images/mazo1.jpg' },
  { id: 2, nombre: 'Mazo Modelo Y', precio: 55, imagen: '/images/mazo2.jpg' },
  { id: 3, nombre: 'Mazo Modelo Z', precio: 60, imagen: '/images/mazo3.jpg' },
];

const cart = [
  { id: 1, nombre: 'Mazo Modelo X', precio: 50, imagen: '/images/mazo1.jpg' },
  { id: 2, nombre: 'Mazo Modelo Y', precio: 55, imagen: '/images/mazo2.jpg' },
  { id: 3, nombre: 'Mazo Modelo Z', precio: 60, imagen: '/images/mazo3.jpg' },
];

let productController = {
  getAllProducts: function (req, res) {
    res.render('productDetail', {
      title: 'Tienda | AG Beaters',
      productos: products,
    });
  },
  getCart: function (req, res) {
    res.render('productCart', { title: 'AG Beaters - Cart', cart });
  },
};

const addToCart = (req, res) => {
  const { id, nombre, precio, imagen } = req.body;
  const existingItem = cart.find((item) => item.id == id);

  if (existingItem) {
    existingItem.cantidad++;
  } else {
    cart.push({ id, nombre, precio, imagen, cantidad: 1 });
  }

  res.redirect('/productCart');
};

const removeFromCart = (req, res) => {
  const { id } = req.params;
  cart = cart.filter((item) => item.id != id);
  res.redirect('/productCart');
};

module.exports = productController;
