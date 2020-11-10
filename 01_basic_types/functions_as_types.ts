function add(n1: number, n2: number): number {
    return n1 + n2;
}

// a function's return type can be undefined, if it return statement is without a value
function returnUndefined(n1: number, n2: number): undefined {
    console.log(n1 + n2);
    return;
}

function greet() {
    console.log("Hello")
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) { // void here represents, returned result is ignored even though cb's return type is void
    cb(n1 + n2);
}

// Note: Typescript with respect to callbacks care about type strictness of parameters and return type. However, if return type of callback is void, its return value no matter what is simply ignore by Typescript

//console.log(returnUndefined(10, 20)) // undefined

// let combineValues: Function; // type Function
// combineValues = add;
// // combineValues = 5; // error
// // combineValues = greet; //  doesn't give error but returns undefined
let combineValues: (n1: number, n2: number) => number; // defining return function's signature and return type
combineValues = add;
// combineValues = 5; // error
// combineValues = greet; // give error as it doesn't match with function's signature and return type
//console.log(combineValues(10, 209)) // works fine

addAndHandle(10, 20, (num) => console.log(num))

addAndHandle(10, 20, (num) => {
    console.log(num * 2)
    return num * 2;
})