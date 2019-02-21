
// ...look at module.js for intro...

// ===  Functional Inheritance  ===

function gizmo(id) {
  return {
    // id: id,  // by deleting this line we set an id to be private
    toString: function () {
      // return 'gizmo ' + this.id;  // in case we dont want an id to be private
      return 'gizmo ' + id;
    }
  };
}

function hoozit(id) {
  var that = gizmo(id);

  that.test = function (testid) {
    return testid === this.id;
  };

  return that;
}

console.log(hoozit(5).toString());  // gizmo 5

// In case we have millions of objects its probably better to use prototypal (pseudoclassical) inheritance
