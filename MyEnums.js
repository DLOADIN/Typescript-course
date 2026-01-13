"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NEWAISLE = 0;
const NEWMIDDEL = 1;
const NEWWINDOW = 0;
// This is not the professional way to define enums in TypeScript
// But this is just to show how enums work in TypeScript
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 1] = "AISLE";
    SeatChoice[SeatChoice["MIDDEL"] = 2] = "MIDDEL";
    SeatChoice[SeatChoice["WINDOW"] = 3] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
const NEWhcSeat = SeatChoice.FOURTH;
console.log(NEWhcSeat);
//# sourceMappingURL=MyEnums.js.map