function element (arr, func) {
  var array = arr;
  return function () {
    return array[func()];
  };
}

module.exports = {element};
