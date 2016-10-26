function mul (a, b) {
  return a * b;
}
// var curriedMul = curry (mul, 3);
function curry (bin, a) {
  return function (b) {
    return bin(a, b);
  };
}
module.exports = {curry, mul};
