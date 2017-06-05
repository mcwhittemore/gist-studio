var path = require('path');

var open = require('./open');
var save = require('./save');

async function runner() {
  // takes a list
  var src = await open(path.join(__dirname, 'input.jpg'));
  await save(src, path.join(__dirname, 'result.jpg'));
}

runner().catch(err => console.log(err));

