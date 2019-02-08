
var obj = {
  name: 'Jack',
  sayHi: function() {
    console.log(this); // { name: 'Jack', [ Function] }
    return function inner() {
      console.log(this); // Global Object
    }
  }
}

obj.sayHi()();
