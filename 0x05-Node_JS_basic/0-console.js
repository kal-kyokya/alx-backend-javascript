// This file contains a function that writes its input to 'STDOUT'

module.exports = (message) => {
  process.stdout.write(`${message}\n`);
};
