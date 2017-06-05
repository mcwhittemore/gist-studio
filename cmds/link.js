var fs = require('fs');
var path = require('path');

module.exports = function(args) {
  var config = fs.readFileSync(path.join('.git', 'config')).toString();
  var id = config.split('url = git@gist.github.com:')[1].split('.git')[0];
  console.log(`https://gist.github.com/${id}`);
}
