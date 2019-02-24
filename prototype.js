
function Gizmo(id) {
  this.id = id;
}

Gizmo.prototype.toString = function() {
  return 'gizmo' + this.id;
}

var giz = new Gizmo(4).toString(); 

function Hoozit(id) {
  this.id = id;
}

Hoozit.prototype = new Gizmo(1);
Hoozit.prototype.test = function(id) {
  return this.id === id;
};


console.log(Gizmo.prototype.constructor); // [Function: Gizmo]
console.log(Hoozit.prototype.constructor); // [Function: Gizmo]
console.log(Object.prototype.constructor); // [Function: Object]
console.log(Gizmo.prototype); // Gizmo { toString: [Function] }
console.log(Hoozit.prototype); // Gizmo { id: 1, test: [Function] }
console.log(giz); // gizmo4
console.log(new Hoozit(3).toString()); // gizmo3
