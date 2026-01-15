function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42);   // T = number
const str = identity<string>("Hi"); // T = string

//- T is a placeholder - When you call identity<number>(42), TypeScript replaces T with number.



// ! This exclamation sign means that the value will never be null or undefined
// ! It is a way to tell TypeScript that you are sure about the value's existence
function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3;
    return products[myIndex]!;
}



function getValue<T>(arr: T[], index: number): T {
    const value = arr[index];
    if (value === undefined) {
        throw new Error('Value not found');
    }
    return value;
}