const AISLE = 0
const MIDDEL = 1
const WINDOW = 0
// This is not the professional way to define enums in TypeScript


// But this is just to show how enums work in TypeScript
const enum SeatChoice {
    AISLE = 1,
    MIDDEL,
    WINDOW,
    FOURTH = 5,
}

const hcSeat = SeatChoice.FOURTH;
console.log(hcSeat);


