const { sort } = require("semver");

exports.min = function min (array) {
  if (!array || array.length == 0){return 0;} 
  else {
  array.sort(function(a, b) {
    return a - b;
  }); return array[0];}
}

exports.max = function max (array) {
  if (!array || array.length == 0){return 0;} 
  else {
    array.sort(function(a, b) {
      return a - b;
    }); return (array[array.length-1]);
  }
 
}

exports.avg = function avg (array) {
  if (!array || array.length == 0){return 0;} 
  else 
  {
    array.map(i=>x+=i, x=0).reverse()[0]
    return (x/array.length);
  }
}
