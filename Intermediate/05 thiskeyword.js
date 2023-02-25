// Part 1 for "this" keyword

console.log(this);

var game = "ludo";

function sayName(){
    var name = "Satyam";
    console.log(this);
}
sayName();