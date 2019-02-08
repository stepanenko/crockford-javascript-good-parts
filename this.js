
var obj = {
  name: 'Jack',
  sayHi: function() {
    var that = this;
    console.log(this); // { name: 'Jack', sayHi: [ Function: sayHi ] }
    return function inner() {
      console.log(this); // Object [global] { ... }
      console.log(that); // { name: 'Jack', sayHi: [ Function: sayHi ] }
    }
  }
}

obj.sayHi()();
