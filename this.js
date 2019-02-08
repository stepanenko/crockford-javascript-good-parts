
var obj = {
  name: 'Jack',
  sayHi: function() {
    console.log(this); // { name: 'Jack', sayHi: [ Function: sayHi ] }
    return function inner() {
      console.log(this); // Object [global] { ... }
    }
  }
}

obj.sayHi()();
