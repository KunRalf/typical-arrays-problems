
exports.min = function min (array) {
  let minNum = (a, b) => {
    return a < b ? a : b;
  }
  return array.reduce(minNum);
}

exports.max = function max (array) {
  let maxNum = (a, b) => {
    return a > b ? a : b;
  }
  return array.reduce(maxNum);
}

exports.avg = function avg (array) {
  return array.reduce((a, b) => (a+b)) / array.length;
}
