var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.redirect('/article/list/1/2');
});
module.exports = router;
