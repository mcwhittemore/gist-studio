var palimpsest = require('palimpsest');

module.exports = function(files) {
  if (typeof files === 'string') {
    return palimpsest.open([files])[0];
  }
  return palimpsest.open(files);
};

