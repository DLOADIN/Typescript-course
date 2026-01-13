"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Ourpeople(packages) {
    console.log(packages._id, packages.name, packages.traits, packages.isActive);
    return packages;
}
Ourpeople({
    _id: 1,
    name: "Jean",
    traits: {
        skintone: 'lightskin',
        height: '1.90m',
        weight: '70kg',
        complexion: 'fair',
    },
    age: 21,
    gender: 'male',
    isActive: true,
});
//# sourceMappingURL=newObject.js.map