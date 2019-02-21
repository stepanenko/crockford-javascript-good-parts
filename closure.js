
var foo = (function outer() {
  var a = 'outer';

  return function inner() {
    a = a + 5;
    console.log(a);
  }
})();

// foo(); // outer5
// console.log(foo); // [Function: inner]


// ====  MORE EXAMPLES  =====

// SLOW
var digit_name_slow = function (n) {
  var names = ['zero', 'one', 'two', 'three'];

  return names[n];
};

// CLOSURE
var digit_name = (function (n) {
  var names = ['zero', 'one', 'two', 'three'];

  return function (n) {
    return names[n];
  }
}());

console.log(digit_name(3)); // three
