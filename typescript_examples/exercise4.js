"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function displayId(id) {
    if (typeof id === "string") {
        console.log(`The ID is a string: ${id.toUpperCase()}`);
    }
    else {
        console.log(`The ID is a number: ${id.toFixed(2)}`);
    }
}
displayId("abc-123");
displayId(456.789);
//# sourceMappingURL=exercise4.js.map