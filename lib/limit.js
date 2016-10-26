function limit (bin, limit) {
  var count = 0;
  return function (a, b) {
    if (count < limit) {
      count++;
      return bin(a, b);
    }
  };
}

module.exports = {limit};
