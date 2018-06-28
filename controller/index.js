var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rajanpreet Singh',
  message: 'Portfolio'});
});
//get about
router.get('/about', (req, res, next) => {
  res.render('about', {
    title: 'About Me',
      message:'kujfbhkjsduf'
  });
});
//get about
router.get('/project', (req, res, next) => {
    res.render('project', {
        title: 'Projects',
        message:'kujfbhkjsduf'
    });
});
module.exports = router;
