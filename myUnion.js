"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myscore = 100;
let Realhuman = { username: 'Jean', student_id: 12345, Admin_id: 123456 };
function getDbId(id) {
    if (typeof id === "string") {
        console.log(`DB id is ${id}`);
    }
    if (typeof id === "number") {
        console.log(`DB id is ${id}`);
    }
}
let newName = ['Jean', 12345, true];
getDbId(12345);
getDbId('12345');
console.log(newName);
//# sourceMappingURL=myUnion.js.map