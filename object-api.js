
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

console.log(obj);
