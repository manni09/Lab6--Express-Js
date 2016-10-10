var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'Contactus', success: false, errors : {}, csrfToken: req.csrfToken()});
});

router.post('/contactus', function(req, res, next) {
  req.assert('fname', 'Name is Required').notEmpty();
  req.assert('message', 'Message is Required').notEmpty();

  var errors = req.validationErrors();

  console.log(errors.length);

  if(errors)
      res.render('contactus', {title: 'Contactus', errors : errors, success: false, csrfToken: req.csrfToken()});
  else
      res.render('contactus', { title: 'Contactus', errors : errors, success: true, csrfToken: req.csrfToken()});
});

module.exports = router;
