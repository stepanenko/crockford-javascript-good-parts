
// ====  Object.freeze(object)  ====

var player = {
  name: 'Peter',
  score: 120
}

Object.freeze(player)
console.log(Object.getOwnPropertyDescriptor(player, 'name')); // writable: false, conf: false
console.log('Is frozen: ', Object.isFrozen(player)); // true

// ====  Object.preventExtensions(object)  ====

var user = {
  id: 4,
  first: 'Tomas'
}

Object.preventExtensions(user);
user.last = 'Fainsil'; // console.log(user) => { id: 4, first: 'Tomas' }
console.log('Is Extensible: ', Object.isExtensible(user)); // false
