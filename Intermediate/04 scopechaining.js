var name = "Satyam";

console.log("Line num 3", name);

function sayName(){
    //var name = "Sweety";
    console.log("Line num 6", name);

    sayNameTwo();

    function sayNameTwo(){
        var name = "Supriya";
        console.log("Line num 11", name);
    }
}

sayName();