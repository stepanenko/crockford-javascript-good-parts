
var foo = (function outer() {
  var a = 'outer';

  return function inner() {
    a = a + 5;
    console.log(a);
  }
})();

foo(); // outer5
console.log(foo); // [Function: inner]
