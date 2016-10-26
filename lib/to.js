function to (unary, limit) {
  var count = 0;
  return function (a) {
    if (count < limit) {
      count++;
      return unary(a);
    }
  };
}

module.exports = {to};
