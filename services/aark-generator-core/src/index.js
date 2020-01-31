const { argv } = require('yargs');
const { initGenerator } = require('./generator');

initGenerator({
  args: argv,
});
