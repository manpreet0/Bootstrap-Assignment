var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to React API',
subtitle: 'We have started working on API today' });
});

module.exports = router;
