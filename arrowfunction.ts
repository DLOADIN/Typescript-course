//single-type parameter and return type
const numbers = (n: number): number => {
    return n + 2;
};

//multi-type parameter
const numberone = (n: number | string): any => {
    return Number(n) * 1;
};