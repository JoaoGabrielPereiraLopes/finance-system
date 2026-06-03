var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.json(
    {
      message: 'The server is runing',
      status:200,
      success:true
    });
});

module.exports = router;
