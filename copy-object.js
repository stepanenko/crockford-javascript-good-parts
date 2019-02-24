
// from video '36. Meta Object API 00:05:49'

function copy(object, prototype) {
  var result = Object.create(prototype);

  Object
    .getOwnPropertyNames(object)
    .forEach(key => {
      Object.defineProperty(result, key,
          Object.getOwnPropertyDescriptor(object, key));
    });
  
  return result;
}

var person = {
  first: 'Serge',
  last: 'Lutens'
}

var personRef = person;
console.log(person === personRef); // true

var personCopy = copy(person, null);
console.log(personCopy); // { first: 'Serge', last: 'Lutens' }
console.log(person === personCopy); // false

console.log(JSON.stringify(person) === JSON.stringify(personCopy)); // true
