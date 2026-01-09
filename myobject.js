"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Jean",
    age: 23,
    gender: "Male",
    isActive: true,
};

function Usersme(name, age, gender, isActive) {
    console.log(User);
    return User;
}

Usersme(User)