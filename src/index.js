
exports.min = function min (array) {
  if (array.length > 0 || undefined){
    let minNum = (a, b) => {
      return a < b ? a : b;
    }
    return array.reduce(minNum);
  }
  else {
    return 0;
  }
}

exports.max = function max (array) {
  if (array.length > 0 || undefined){
    let maxNum = (a, b) => {
     return a > b ? a : b;
    }
    return array.reduce(maxNum);
  }
  else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (array.length > 0 || undefined){
    return array.reduce((a, b) => (a+b)) / array.length;
  }
  else {
    return 0;
  }
}
