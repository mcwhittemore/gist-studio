#!/usr/bin/env node

try {
  var cmd = require(`./cmds/${process.argv[2]}`);
  cmd(process.argv.slice(3));
}
catch (err) {
  console.log(err.message);
  process.exit(1);
}

