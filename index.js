"use strict";

var mpow = require('./mpow')

function generator() {
  //var p = 795028841
  var p = 3
    , q = 2147483647
    //, n = Math.floor(Math.random() * q)
    , n = 0

  return function() {
    if (n === q) n = 0;
    var r = mpow(n, p, q);
    n += 1;
    return r;
  }
}


test()

function test(max) {
  var next = generator()
  var h = {}
  while (true) {
    var r = next();
    if (h[r]) throw new Error('oh noes ' + r);
    h[r] = true;
    console.log(r);
  }
}
