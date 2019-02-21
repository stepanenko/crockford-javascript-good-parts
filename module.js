
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
