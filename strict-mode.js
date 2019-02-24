
// Functions to check if 'use strict' is on or off

// 'use strict'

function isStrictMode() {
  return (function () {
    return !this;
  }());
}

console.log(isStrictMode()); // false


function strictModeImplemented() {
  return (function () {
    'use strict';
    return !this;
  }());
}

console.log(strictModeImplemented()); // true
