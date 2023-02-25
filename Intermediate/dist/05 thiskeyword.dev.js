"use strict";

// Part 1 for "this" keyword
console.log(void 0);
var game = "ludo";

function sayName() {
  var name = "Satyam";
  console.log(this);
}

sayName();