const NEWAISLE = 0
const NEWMIDDEL = 1
const NEWWINDOW = 0
// This is not the professional way to define enums in TypeScript


// But this is just to show how enums work in TypeScript
const enum SeatChoice {
    AISLE = 1,
    MIDDEL,
    WINDOW,
    FOURTH = 5,
}

const NEWhcSeat = SeatChoice.FOURTH;
console.log(NEWhcSeat);


