var palimpsest = require('palimpsest');

module.exports = function(img, path) {
  return palimpsest.save(img, path);
};
