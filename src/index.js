module.exports = function getZerosCount(number) {
  // your implementation
  var zeros = 0;
  for(var i = 1; Math.pow(5, i) <= number; i++){
    zeros += parseInt(number / Math.pow(5,i));
  }
  return zeros;
}
