
var add =require('../lib/binFunc').add;
var mul =require('../lib/binFunc').mul;

/*function mul (a, b) {
  return a + b;
}*/
// var curriedMul = curry (mul, 3);

function curry (bin, a) {
  return function (b) {
    return bin(a, b);
  };
}
module.exports = {curry, mul,add};
