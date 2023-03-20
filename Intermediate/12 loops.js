// for(let i = 0; i<=10; i++){
//     console.log(i);
// }

const statesNames = [
    "Bihar",
    "Mumbai",
    "Punjab",
    "UP",
    5667,
    "Delhi",
    "Haryana",
];

// for loop
// for(let i = 0; i<statesNames.length; i++){
//     if(typeof statesNames[i] !== 'string') continue;
//     console.log(statesNames[i]);
// }

// While loop

// let i = 0;

// while (i<statesNames.length) {
//     console.log(statesNames[i]);
//     i++;
// }

// Do while loop

// let i = 0;
// do {
//     console.log(statesNames[i]);
//     i++;
// } while (i<statesNames.length);

// var i = 0;
// for(;;){
//     if(i > 3) break;
//     console.log(i);
//     i++;
// }

statesNames.forEach(s=> console.log(s));
