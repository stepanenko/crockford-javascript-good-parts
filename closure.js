
function outer() {
  var a = 'outer';

  return function inner() {
    a = a + 5;
    console.log(a);
  }
}

var foo = outer();

foo(); // outer5
