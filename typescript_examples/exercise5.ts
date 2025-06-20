
function wrapInArray<T>(arg: T): T[] {
    return [arg];
}

let stringArray = wrapInArray("hello");
let numberArray = wrapInArray(123);

console.log(stringArray);
console.log(numberArray);

