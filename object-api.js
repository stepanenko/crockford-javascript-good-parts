
// Meta Object API

var obj = {
  first: 'Sergio'
}

var d = Object.getOwnPropertyDescriptor(obj, 'first');
console.log(d); // { value: 'Sergio', writable: true, enumerable: true, configurable: true }

Object.defineProperty(obj, 'last', {
  value: 'Stepanenko',
  writable: false, // read only if false
  enumerable: true, // if false will not be shown
  configurable: false // cant be deleted
});

obj.last = 'Yes'; // no effect
delete obj.last; // no effect
console.log(obj); // { first: 'Sergio', last: 'Stepanenko' }

var props = Object.getOwnPropertyNames(obj);
console.log(props); // [ 'first', 'last' ]

var methods = {
  fullName: function() {
    console.log(this.first + ' ' + this.last);
  }
}

Object.setPrototypeOf(obj, methods);
var proto = Object.getPrototypeOf(obj);
console.log(proto); // { test: [Function: test] }

obj.fullName(); // 'Sergio Stepanenko'
