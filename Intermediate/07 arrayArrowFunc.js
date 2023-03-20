var isEven = (element) =>{
    // if(element % 2 == 0){
    //     return true;
    // } 
    // return false;

    return element %2 == 0;
};

//console.log(isEven(32));

// var ans = [9,4,6,8].every(isEven);
// console.log(ans);

var result = [2,4,5,8].every((e) =>{
    return e % 2 === 0;
});

console.log(result);

var res = [3,5,6,7].every((e) =>{
    return e%2===0;

});
console.log(res);

var res1 = [2,4,6,7].every((e)=> (e%2 ===0));
console.log(res1);