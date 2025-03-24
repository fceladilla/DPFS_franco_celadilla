var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.home);
router.get('/aboutMe', mainController.aboutMe);
router.get('/contact', mainController.contact);
router.get('/services', mainController.services);

module.exports = router;
