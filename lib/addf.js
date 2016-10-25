function addf (number) {
  return function (toAdd) {
    return toAdd + number;
  };
}

module.exports = {addf};
