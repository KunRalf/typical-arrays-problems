
exports.min = function min (array) {
  if (!array || !array.length){
    return 0;
  }
  else {
    let minNum = (a, b) => {
      return a < b ? a : b;
    }
    return array.reduce(minNum);
  }
}

exports.max = function max (array) {
  if (!array || !array.length){
    return 0;
  }
  else {
    let maxNum = (a, b) => {
      return a > b ? a : b;
     }
     return array.reduce(maxNum);
  }
}

exports.avg = function avg (array) {
  if (!array || !array.length){
    return 0;
  }
  else {
    return array.reduce((a, b) => (a+b)) / array.length;
  }
}
