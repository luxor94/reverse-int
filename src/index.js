const { after, afterEach } = require("mocha");

module.exports = function reverse (n) {
  let a = (Math.abs(n) + "").split('', ).reverse().join('');
  return +a;
}
