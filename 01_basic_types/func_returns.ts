function add(n1: number, n2: number): number {
    return n1 + n2;
}

// a function's return type can be undefined, if it return statement is without a value
function returnUndefined(n1: number, n2: number): undefined {
    console.log(n1 + n2);
    return;
}

console.log(returnUndefined(10, 20)) // undefined