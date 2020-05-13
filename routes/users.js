var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/profile',usersController.showProfile);

router.get('/register',usersController.showRegisterForm);
router.post('/register',usersController.processRegisterForm);

module.exports = router;
