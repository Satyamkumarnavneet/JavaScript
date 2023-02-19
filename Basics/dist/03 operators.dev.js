"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var a = 6;
var b = 8;
var sum = a + b;
console.log(sum);
var isGrater = a > b;
console.log(isGrater); // Calculate discount percentage

var sellingPrice = 119990;
var listingPrice = 113490;
var discountPercentage = (listingPrice - sellingPrice) / listingPrice * 100;
console.log("Discount percentage is : " + discountPercentage);
displayDiscountPercentage = Math.round(discountPercentage);
console.log(displayDiscountPercentage + " % off");
console.log(_typeof(discountPercentage)); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence