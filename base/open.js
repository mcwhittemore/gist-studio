var palimpsest = require('palimpsest');

module.exports = async function open(files) {
  if (typeof files === 'string') {
    var out = await palimpsest.open([files]);
    return out[0];
  }
  return await palimpsest.open(files);
};

