const { initGenerator } = require('./generator');
const { argv } = require('yargs');

initGenerator({
  args: argv,
});