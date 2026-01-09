"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Jean",
    age: 23,
    gender: "Male",
    isActive: true,
};
function Usersme(name, age, gender, MyActive) {
    var User = {
        name: 'Manzi',
        age: 12,
        gender: 'male',
        isActive: true,
    };
    return User;
}
console.log(Usersme(User.name, User.age, User.gender, User.isActive));
