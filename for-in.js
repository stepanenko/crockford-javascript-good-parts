
// Iterates through all of object members
// But Douglas recommends to use Object.keys instead

var myObj = {
  first: 'Serhiy',
  second: 'Stepanenko'
}

for (name in myObj) {
  if (myObj.hasOwnProperty(name)) {
    console.log(name + ' : ' + myObj[name]);
  }
}

console.log(Object.keys(myObj)); // [ 'first', 'second' ]
