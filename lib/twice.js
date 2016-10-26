var add = require ('../lib/binFunc.js').add;

function twice (binary) {
  return function (x) {
    return binary(x, x);
  };
}

module.exports = {twice};
