function composeu (a, b) {
  return function (c) {
    return b(a(c));
  };
}

module.exports = {composeu};
