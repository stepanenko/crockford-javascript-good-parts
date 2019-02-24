
// ====  Module Pattern  ====

var singleton = (function () {
  var privateVariable = 'private';
  function privateFunction (x = ' place') {
    return privateVariable + x;
  }

  return {
    firstMethod: function (a = 0, b = ' ') {
      console.log(a + b + privateVariable);
    },
    secondMethod: function (c) {
      console.log(privateFunction(c));
    }
  }
}());

singleton.firstMethod(5);  // 5 private
singleton.secondMethod();  // private place

// Another Version

(function () {
  var privateVariable = 'hello';

  function privateFunction (x) {
    console.log(privateVariable + ' world')
  }

  global.methodical = {
    firstMethod: function (a, b) {
      console.log(privateVariable);
    },
    secondMethod: function (c) {
      privateFunction();
    }
  };

}());

methodical.secondMethod(); // hello world


// Module pattern is easily transformed into a powerful constructor patterns.
// ====  Power Constructors:  ====
// 1. Make an object
// - Object literal
// - new
// - Object.create
// - call another power constructor
// 2. Define some private variables and functions
// 3. Define public methods that closes over the private stuff
// 4. Return the object

function constructor(spec) {
  // ===  1  ===
  var that = {};
  // ===  2  ===
  var member = 1;
  var method = function() {
    // spec, member, method
    console.log(member + spec);
  };
  // ===  3  ===
  that.method = method;
  // ===  4  ===
  return that;
}

var myObj = constructor(5);
var myObj2 = new constructor(5);
myObj.method();  // 6
myObj2.method();  // 6
