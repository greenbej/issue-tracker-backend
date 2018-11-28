var express = require('express');
var phantom = require('phantom');

var router = express.Router();

/* GET issues listing. */
router.get('/', function(req, res, next) {

  var _ph, _page, _outObj;

  phantom.create().then(function(ph){
      _ph = ph;
      return _ph.createPage();
  }).then(function(page){
      _page = page;
      return _page.open('https://angular.io/resources');
  }).then(function(status){
      console.log(status);
      return _page.property('content')
  }).then(function(content){
      console.log(content);
      _page.close();
      _ph.exit();
  }).catch(function(e){
     console.log(e);
  });

  res.send('respond with a resource');
});

module.exports = router;
