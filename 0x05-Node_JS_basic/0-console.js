// This file contains a function that writes its input to 'STDOUT'

module.exports = function displayMessage(message) {
  process.stdout.write(`${message}\n`);
};
