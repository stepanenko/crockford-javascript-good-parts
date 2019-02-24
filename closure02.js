
var digit_name = (function () {
  var names = ['zero', 'one', 'two', 'three', 'four', 'five'];

  return function (n) {
    return names[n];
  }
})();

console.log(digit_name(3));
