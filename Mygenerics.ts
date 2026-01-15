// First generic function 
const score: Array<number> = [100, 200, 300];

// Second generic function 
const names: Array<string> = ['Jean', 'Doe', 'Smith'];

function identityOne(val: boolean | number): boolean | number {
    return val;
}


function identityTwo(val: any): any {
    return val;
}

console.log(identityOne(true));

function identityThree<Type>(val : Type): Type   {
    return val;
}  

identityThree(true);


interface Bottle {
    brand: string;
    type: number;
}