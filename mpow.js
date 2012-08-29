"use strict";

// modular exponentiation
function mpow(x, pow, mod) {
   var t = x;
   if (pow === 0) {
      return 1;
   }
   pow -= 1;
   do {
      if (pow & 1) {
         x *= t;
         x %= mod;
      }
      t *= t;
      t %= mod;
      pow = pow >> 1;
   } while (pow);
   return x;
}

module.exports = mpow;
