var express = require('express');
var equalRepo = require('equilateral-reproduction');

var path = require('path');
var fs = require('fs');

module.exports = function(args) {
  var tPath = path.resolve(args[0]);
  var iPath = path.resolve('./input.jpg');
  var triangles = require(tPath);
  var app = express();

  app.get('/', function(req, res, next) {
    fs.readFile(path.join(__dirname, '..', 'content', 'server-index.html'), function(err, txt) {
      if (err) return next(err);
      res.set({'Content-Type': 'text/html'});
      res.send(txt.toString());
    });
  });

  app.get('/svg', function(req, res, next) {
    var start = parseInt(req.query.start || 0);
    var edge = parseInt(req.query.edge || 5);
    console.log(iPath);
    equalRepo({img:iPath, triangles, start, edge}, function(err, svg) {
      if (err) return next(err);
      res.set({'Content-Type': 'image/svg+xml'});
      res.send(svg);
    });
  });

  app.listen(4000, function(err) {
    if (err) throw err;
    console.log('ready for ya');
  });
  
}

